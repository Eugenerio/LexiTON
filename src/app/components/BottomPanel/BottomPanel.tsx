'use client';
import { useRouter, usePathname } from 'next/navigation';
import { ChooseSkin, LeaderBoard, Home } from '@/app/components/icons/';
import styles from './BottomPanel.module.css';

function BottomPanel() {
  const router = useRouter();
  const currentPath = usePathname();

  const navigationHandler = (url: string) => router.push(url);

  return (
    <div className={`absolute bottom-0 h-16 w-full ${styles.background}`}>
      <div className="flex h-full w-full justify-evenly">
        <div
          className={`flex w-full items-center justify-center py-4 hover:cursor-pointer ${currentPath === '/choose-skin' ? styles.selected : ''}`}
          onClick={() => navigationHandler('/choose-skin')}
        >
          <ChooseSkin className="h-6 w-6" />
        </div>
        <div
          className={`flex w-full items-center justify-center py-4 hover:cursor-pointer ${currentPath === '/' || currentPath.startsWith('/single-mode') ? styles.selected : ''}`}
          onClick={() => navigationHandler('/')}
        >
          <Home className="h-6 w-6" />
        </div>
        <div
          className={`flex w-full items-center justify-center py-4 hover:cursor-pointer ${currentPath === '/leaderboard' ? styles.selected : ''}`}
          onClick={() => navigationHandler('/leaderboard')}
        >
          <LeaderBoard className="h-6 w-6" />
        </div>
      </div>
    </div>
  );
}

export default BottomPanel;
