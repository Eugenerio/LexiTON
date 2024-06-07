'use client';

import { TonConnectButton } from '@tonconnect/ui-react';
import { Arrow, Coins } from '../icons';
import { useGame, useVisibleHeader } from '../../lib/hooks';
import styles from './Header.module.css';

function Header() {
  const { visible, isGame } = useVisibleHeader();

  return (
    <div
      className={`h-16 w-full ${styles.background} p-4 transition-transform duration-300 ${visible && !isGame ? 'translate-y-0 transform' : '-translate-y-full transform'}`}
    >
      {
        <div className="flex h-full w-full items-center justify-between">
          <div className="flex h-6 w-16">
            <Coins />
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
