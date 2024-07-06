'use client';

import { TonConnectButton, useTonAddress, CHAIN } from '@tonconnect/ui-react';
import { useTonWallet } from '@tonconnect/ui-react';
import { useEffect } from 'react';
import { Arrow, Coins } from '@/app/components/icons';
import { setUser } from '@/app/lib/api';
import { useGame, useVisibleHeader } from '@/app/lib/hooks';
import styles from './Header.module.css';
import { useTonConnect } from '@/app/hooks/useTonConnect';

function Header() {
  const { visible, isGame } = useVisibleHeader();

  const wallet = useTonWallet();
  const address = useTonAddress();


  const isWalletConnected = !!wallet?.account;
  useEffect(() => {
    const fetchData = async () => {
      if (isWalletConnected) {
        await setUser({
          wallet_address: address,
          score: 0,
          choosen_lang: []
        });
      }
    }

    void fetchData();
  }, [isWalletConnected])
  const { network } = useTonConnect();

  return (
    <div
      className={`h-16 w-full ${styles.background} p-4 transition-transform duration-300 ${visible && !isGame ? 'translate-y-0 transform' : '-translate-y-full transform'}`}
    >
      {
        <div className="flex h-full w-full items-center justify-between">
          <div className="flex h-6 w-16">
            <Coins className='text-white' />
            <span className={'ml-2'}>0</span>
          </div>
          <TonConnectButton />
        </div>
      }
    </div>
  );
}

export const GameHeader = () => {
  const { formatTime, gameData, activeStep } = useGame();
  return (
    <div className={`h-16 w-full ${styles.background} translate-y-0 transform p-4 transition-transform duration-300`}>
      <div className="flex h-full w-full items-center justify-between">
        <div className="flex h-6 w-16">
          <Arrow color={'#000'} className={'hover:cursor-pointer'} />
          <span className={'ml-2'}>{formatTime()}</span>
        </div>
        <span>
          {activeStep} / {gameData.length + 1}
        </span>
      </div>
    </div>
  );
};

export default Header;
