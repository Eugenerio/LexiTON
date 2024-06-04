'use client';

import { useEffect, useState } from 'react';

const mockedData = [
  {
    title: 'SomeWord',
    description: 'Some description',
    first: 'NIHUA',
    second: 'CHUJ',
  },
  {
    title: 'SUKA',
    description: 'Some description',
    first: 'NIHUA',
    second: 'CHUJ',
  },
  {
    title: "BLYAT'",
    description: 'Some description',
    first: 'NIHUA',
    second: 'CHUJ',
  },
];

const useGame = () => {
  const [gameData, setGameData] = useState<any[]>(mockedData);

  const [activeStep, setActiveStep] = useState<number>(0);
  const [isFinish, setIsFinish] = useState<boolean>(false);

  const [timeRemaining, setTimeRemaining] = useState(20); // 2 minutes
  const [isActiveTimer, setIsActiveTimer] = useState(false);
  const [isFinishedTimer, setIsFinishedTimer] = useState(false);

  useEffect(() => {
    let intervalId: string | number | NodeJS.Timeout | undefined;

    if (isActiveTimer && timeRemaining > 0) {
      intervalId = setInterval(() => {
        setTimeRemaining((time) => {
          if (time - 1 === 0) {
            setIsActiveTimer(false);
            setIsFinishedTimer(true);
            setIsFinish(true);
            return 0;
          }
          return time - 1;
        });
      }, 1000);
    } else if (timeRemaining === 0) {
      setIsFinishedTimer(true);
    }

    return () => clearInterval(intervalId);
  }, [isActiveTimer, timeRemaining]);

  const handleStart = () => {
    setIsActiveTimer(true);
    setIsFinishedTimer(false);
  };

  const handleReset = () => {
    setTimeRemaining(120);
    setIsActiveTimer(false);
    setIsFinishedTimer(false);
  };

  const formatTime = () => {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const stepsHandler = () => {
    const nextStep = Math.min(activeStep + 1, gameData.length);
    setActiveStep(nextStep);
    if (nextStep === gameData.length) {
      setIsFinish(true);
    }
  };

  return {
    gameData,
    setGameData,
    isFinish,
    stepsHandler,
    activeStep,
    handleStart,
    handleReset,
    formatTime,
    isFinishedTimer,
    isActiveTimer,
    timeRemaining,
  };
};

export default useGame;
