import { Address, fromNano, OpenedContract, toNano } from '@ton/core';
import { useEffect, useState } from 'react';
import { JettonDefaultWallet } from '../../../contracts/jetton/build/SampleJetton/tact_JettonDefaultWallet';
import { useAsyncInitialize } from './useAsyncInitialize';
import { useTonClient } from './useTonClient';
import { useTonConnect } from './useTonConnect';

const sleep = (time: number) => new Promise((resolve) => setTimeout(resolve, time));

export function useJettonContract() {
  const { client } = useTonClient();
  const { wallet, sender } = useTonConnect();
  const [balance, setBalance] = useState<string | null>();

  const jettonContract = useAsyncInitialize(async () => {
    if (!client || !wallet) return;

    const contract = SampleJetton.fromAddress(Address.parse('EQB-xtCBQgzwKyxwXhzbUtdElYcblrwknHnUzVydaGgwpiwm'));

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
    mint: () => {
      const message: Mint = {
        $$type: 'Mint',
        amount: 1000000000000000000000000n,
        receiver: sender.address as Address,
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
