'use client';

import Button from '@/app/components/Button/Button';
import { Onboarding } from '@/app/components/language';
import useSelectedLanguage from '@/app/lib/hooks/use-selected-language';

const SingleMode = () => {
  const {
    selectedLanguages,
    isOnboardingWasFinished,
    clearLocalStorage,
    handleOnboardingFinish,
    isShowOnboarding,
    handleOnboardingShown,
  } = useSelectedLanguage('selectedLanguages', {});
  const selectedLanguagesKeys = Object.keys(selectedLanguages);

  if (!isOnboardingWasFinished || isShowOnboarding) {
    return <Onboarding handleOnboardingFinish={handleOnboardingFinish} />;
  }

  return (
    <div className={'flex flex-col'}>
      <h2>Selected Languages:</h2>
      <h1>{isOnboardingWasFinished}</h1>
      <ul>
        {selectedLanguagesKeys.map((language) => (
          <li key={language}>
            {language} - {selectedLanguages[language]}
          </li>
        ))}
      </ul>
      <Button content={'Clear'} onClick={clearLocalStorage} />
      <Button content={'Add Language'} onClick={() => handleOnboardingShown(true)} />
    </div>
  );
};

export default SingleMode;
