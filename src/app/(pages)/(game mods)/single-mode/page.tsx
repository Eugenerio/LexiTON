'use client';

import Button from '@/app/components/Button/Button';
import CourseCard from '@/app/components/CourseCard/CourseCard';
import { Onboarding } from '@/app/components/language';
import useSelectedLanguage from '@/app/lib/hooks/use-selected-language';
import { useEffect, useState } from 'react';
import { getLessons } from '@/app/lib/api';

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

  const [langs, setLangs] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
       const result = await getLessons();
       setLangs(result);
    }
    void fetchData();
  }, [])

  if (!isOnboardingWasFinished || isShowOnboarding) {
    return <Onboarding handleOnboardingFinish={handleOnboardingFinish} />;
  }

  return (
    <div className="h-full w-full">
      <h2 className="text-medium text-2xl">Selected Languages:</h2>
      <h1>{isOnboardingWasFinished}</h1>
      <div className="bg-grey-100 h-96 w-full overflow-y-scroll py-4">
        {
          langs.map((item: any, index:number) => (
            <div key={index} className={"text-black cursor-pointer"}>{item.id}</div>
          ))
        }
        {selectedLanguagesKeys.map((language, index) => (
          <CourseCard course={language} level={selectedLanguages[language]} key={`course-${index}`} />
        ))}
        <Button content={'Clear'} onClick={clearLocalStorage} />
        <Button content={'Add Language'} onClick={() => handleOnboardingShown(true)} />
      </div>
    </div>
  );
};

export default SingleMode;
