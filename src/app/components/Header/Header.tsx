'use client';
import { TonConnectButton, useTonWallet } from '@tonconnect/ui-react';
import styles from './Header.module.css';
import { Coins } from '@/app/components/icons';
import { useVisibleHeader } from '@/app/lib/hooks';

function Header() {
  const { visible, isGame } = useVisibleHeader();
  // TODO: if this is not neccessary remove animation
  return (
    <div
      className={`h-16 w-full ${styles.background} p-4 transition-transform duration-300 ${visible ? 'translate-y-0 transform' : '-translate-y-full transform'} ${isGame && 'hidden'}`}
    >
      <div className="flex h-full w-full items-center justify-between">
        <div className="flex h-6 w-16">
          <Coins />
          <span className={'ml-2'}>0</span>
        </div>
        <TonConnectButton />
      </div>
    </div>
  );
}

export default Header;
