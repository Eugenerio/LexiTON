'use client';

import Button from '@/app/components/Button/Button';
import { Onboarding } from '@/app/components/language';
import useSelectedLanguage from '@/app/lib/hooks/use-selected-language';
import CourseCard from '@/app/components/CourseCard/CourseCard';

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
    <div className='w-full h-full'>
      <h2 className='text-2xl text-medium'>Selected Languages:</h2>
      <h1>{isOnboardingWasFinished}</h1>
      <div className='w-full h-96 bg-grey-100 overflow-y-scroll py-4'>
        {selectedLanguagesKeys.map((language) => (
          <CourseCard course={language} level={selectedLanguages[language]} />
        ))}
        <Button content={'Clear'} onClick={clearLocalStorage} />
        <Button content={'Add Language'} onClick={() => handleOnboardingShown(true)} />
      </div>
    </div>
  );
};

export default SingleMode;
