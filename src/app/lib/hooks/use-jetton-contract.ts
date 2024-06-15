import { Address, fromNano, OpenedContract, toNano } from '@ton/core';
import { useEffect, useState } from 'react';
import { MintPublic, SampleJetton } from '../wrapers/SampleJetton';
import { JettonDefaultWallet } from '../wrapers/SampleJettonWallet';
import { useAsyncInitialize } from './use-async-initialize';
import { useTonClient } from './use-ton-client';
import { useTonConnect } from './use-ton-connect';

const sleep = (time: number) => new Promise((resolve) => setTimeout(resolve, time));

export function useJettonContract() {
  const { client } = useTonClient();
  const { wallet, sender } = useTonConnect();
  const [balance, setBalance] = useState<string | null>();

  const jettonContract = useAsyncInitialize(async () => {
    if (!client || !wallet) return;

    const contract = SampleJetton.fromAddress(Address.parse('EQDctB0e2KbXRnayQZzVljgTOIKMJ_dl07dXuuUT2WXO1fOA'));

    return client.open(contract) as OpenedContract<SampleJetton>;
  }, [client, wallet]);

  const jettonWalletContract = useAsyncInitialize(async () => {
    if (!jettonContract || !client) return;

    const jettonWalletAddress = await jettonContract.getGetWalletAddress(
      Address.parse(Address.parse(wallet!).toString())
    );

    return client.open(JettonDefaultWallet.fromAddress(jettonWalletAddress));
  }, [jettonContract, client]);

  useEffect(() => {
    async function getBalance() {
      if (!jettonWalletContract) return;
      setBalance(null);
      const balance = (await jettonWalletContract.getGetWalletData()).balance;
      setBalance(fromNano(balance));
      await sleep(5000);
      getBalance();
    }

    getBalance();
  }, [jettonWalletContract]);

  return {
    jettonWalletAddress: jettonWalletContract?.address.toString(),
    balance: balance,
    mint: (amount: any) => {
      const message: MintPublic = {
        $$type: 'MintPublic',
        amount: amount,
      };

      jettonContract?.send(
        sender,
        {
          value: toNano('0.05'),
        },
        message
      );
    },
  };
}
