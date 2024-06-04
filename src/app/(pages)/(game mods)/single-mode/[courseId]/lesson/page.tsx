'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Button from '@/app/components/Button/Button';
import FlipCard from '@/app/components/FlipCard/FlipCard';
import styles from '@/app/components/Header/Header.module.css';
import { Arrow } from '@/app/components/icons';
import { useGame } from '@/app/lib/hooks';

const Page = () => {
  const { isFinish, gameData, stepsHandler, activeStep, handleStart, timeRemaining, isActiveTimer, formatTime } =
    useGame();

  const router = useRouter();

  useEffect(() => {
    if (!isActiveTimer) {
      handleStart();
    }
  }, []);

  return (
    <div>
      {!isFinish && (
        <div
          className={`h-16 w-full ${styles.background} translate-y-0 transform p-4 transition-transform duration-300`}
        >
          <div className="flex h-full w-full items-center justify-between">
            <div className="flex h-6 hover:cursor-pointer" onClick={() => router.back()}>
              <Arrow color={'black'} className={'h-6 w-6 rotate-180'} />
              <span className={'ml-2'}>{formatTime()}</span>
            </div>
            <span>
              {activeStep + 1} / {gameData.length}
            </span>
          </div>
        </div>
      )}
      <main className="appear flex px-4">
        <div className={'mt-5 w-full'}>
          {isFinish ? (
            <div className={'flex h-full w-full flex-col items-center justify-center'}>
              <div>FINISH</div>
              <Button content={'Go home'} onClick={() => router.push('/')} />
            </div>
          ) : (
            <div className={'flex w-full flex-col'}>
              <FlipCard title={gameData[activeStep]?.title} description={gameData[activeStep]?.description} />
              <div className={'mt-5 flex flex-row items-center justify-between'}>
                <Button
                  content={gameData[activeStep]?.first}
                  icon={<Arrow className={'h-6 w-6 rotate-180'} color={'#fff'} />}
                  className={'flex flex-row items-center justify-center'}
                  onClick={stepsHandler}
                  iconPosition={'left'}
                />
                <Button
                  content={gameData[activeStep]?.second}
                  icon={<Arrow className={'h-6 w-6'} color={'#fff'} />}
                  iconPosition={'right'}
                  className={'ml-5 flex flex-row items-center justify-center'}
                  onClick={stepsHandler}
                />
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Page;
