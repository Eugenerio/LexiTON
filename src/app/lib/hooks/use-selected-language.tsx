'use client';

import { useState, useEffect } from 'react';

export type LanguageLevel = 'a1' | 'a2' | 'b1' | 'b2' | 'c1' | 'c2';

export interface SelectedLanguages {
  [language: string]: LanguageLevel;
}

const useSelectedLanguage = (key: string, initialValue: SelectedLanguages) => {
  const [selectedLanguages, setSelectedLanguages] = useState<SelectedLanguages>(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue !== null ? JSON.parse(storedValue) : initialValue;
  });

  const [isOnboardingWasFinished, setIsOnboardingWasFinished] = useState<boolean>(() => {
    const storedValue = localStorage.getItem('onboarding');
    return storedValue !== null ? JSON.parse(storedValue) : false;
  });

  const [isShowOnboarding, setIsShowOnboarding] = useState<boolean>(false);

  const selectedLanguagesKeys = Object.keys(selectedLanguages);
  const isDisableButton = selectedLanguagesKeys.length === 0;

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(selectedLanguages));
  }, [selectedLanguages]);

  const handleOnboardingShown = (value: boolean) => {
    setIsShowOnboarding(value);
  };

  const handleLanguageChange = (language: string, level: LanguageLevel) => {
    setSelectedLanguages((prevSelectedLanguages) => ({
      ...prevSelectedLanguages,
      [language]: level,
    }));
  };

  const handleOnboardingFinish = () => {
    localStorage.setItem('onboarding', JSON.stringify(true));

    setIsOnboardingWasFinished(true);
    setIsShowOnboarding(false);
  };

  const clearLocalStorage = () => {
    localStorage.clear();
    setIsOnboardingWasFinished(false);
  };

  return {
    selectedLanguages,
    setSelectedLanguages,
    handleOnboardingFinish,
    isOnboardingWasFinished,
    clearLocalStorage,
    isDisableButton,
    handleLanguageChange,
    isShowOnboarding,
    handleOnboardingShown,
  };
};

export default useSelectedLanguage;
