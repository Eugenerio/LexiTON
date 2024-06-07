'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Button from '../../../../../components/Button/Button';
import FlipCard from '../../../../../components/FlipCard/FlipCard';
import styles from '@/app/components/Header/Header.module.css';
import { Arrow } from '../../../../../components/icons';
import { useGame } from '../../../../../lib/hooks';

const Page = () => {
  const {
    isFinish,
    gameData,
    stepsHandler,
    activeStep,
    handleStart,
    isActiveTimer,
    formatTime,
    handleReset,
    timeForLesson,
    correctAnswers,
  } = useGame();

  const router = useRouter();

  useEffect(() => {
    if (!isActiveTimer) {
      handleStart();
    }
  }, []);

  const backHandler = () => {
    void handleReset();

    router.push('/single-mode');
  };

  return (
    <div>
      {!isFinish && (
        <div
          className={`h-16 w-full ${styles.background} translate-y-0 transform p-4 transition-transform duration-300`}
        >
          <div className="flex h-full w-full items-center justify-between">
            <div className="flex h-6 hover:cursor-pointer" onClick={backHandler}>
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
              <div className={'text-2xl font-bold'}>Summary</div>
              <div className={`my-5 w-full rounded-xl bg-black p-2`}>
                <div className={`w-full text-white ${styles.finish_bg}`}>
                  <div className={'flex w-full items-center justify-between'}>
                    <span>Time</span>
                    <span>{timeForLesson}</span>
                  </div>
                  <div className={'flex w-full items-center justify-between'}>
                    <span>Questions</span>
                    <span>{gameData.length}</span>
                  </div>
                  <div className={'flex w-full items-center justify-between'}>
                    <span>Correct Answers</span>
                    <span>{correctAnswers}</span>
                  </div>
                </div>
              </div>
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
                  onClick={() => stepsHandler('first')}
                  iconPosition={'left'}
                />
                <Button
                  content={gameData[activeStep]?.second}
                  icon={<Arrow className={'h-6 w-6'} color={'#fff'} />}
                  iconPosition={'right'}
                  className={'ml-5 flex flex-row items-center justify-center'}
                  onClick={() => stepsHandler('second')}
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
