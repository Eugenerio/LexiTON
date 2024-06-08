'use client';

import { useEffect, useState } from 'react';
import { getLessonByLanguageAndLevel } from '@/app/lib/api';


const useGame = (courseLevel?: string) => {
  const [gameData, setGameData] = useState<any[]>([]);

  const [activeStep, setActiveStep] = useState<number>(0);
  const [isFinish, setIsFinish] = useState<boolean>(false);

  const [elapsedTime, setElapsedTime] = useState(0);
  const [isActiveTimer, setIsActiveTimer] = useState(false);
  const [isFinishedTimer, setIsFinishedTimer] = useState(false);

  const [ correctAnswers, setCorrectAnswer ] = useState(0);
  const [ timeForLesson, setTimeForLesson ] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
     if(courseLevel) {
       const info = await getLessonByLanguageAndLevel(courseLevel)
       setGameData(info);
     }
    }
    void fetchData();
  }, [courseLevel]);

  useEffect(() => {
    let intervalId: string | number | NodeJS.Timeout | undefined;

    if (isActiveTimer && !isFinish) {
      intervalId = setInterval(() => {
        setElapsedTime((time) => time + 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isActiveTimer, isFinish]);

  const formatTime = () => {
    const minutes = Math.floor(elapsedTime / 60);
    const seconds = elapsedTime % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };


  useEffect(() => {
    if (isFinish) {
      setTimeForLesson(() => formatTime())
      setIsActiveTimer(false);
      setIsFinishedTimer(true);
    }
  }, [isFinish]);

  const handleStart = () => {
    setIsActiveTimer(true);
    setIsFinishedTimer(false);
    setIsFinish(false);
  };

  const handleReset = () => {
    setElapsedTime(0);
    setIsActiveTimer(false);
    setIsFinishedTimer(false);
    setIsFinish(false);
    setActiveStep(0);
    setCorrectAnswer(0);
    setTimeForLesson('');
  };

  const stepsHandler = (value: string) => {
    const nextStep = Math.min(activeStep + 1, gameData.length);
    setActiveStep(nextStep);
    if(value === gameData[activeStep].correct_answer) {
      setCorrectAnswer(prevValue => prevValue + 1);
    }
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
    elapsedTime,
    correctAnswers,
    timeForLesson,
  };
};

export default useGame;
