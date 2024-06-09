'use client';

import { useTonAddress } from '@tonconnect/ui-react';
import { useEffect, useState } from 'react';
import Button from '@/app/components/Button/Button';
import CourseCard from '@/app/components/CourseCard/CourseCard';
import { Onboarding } from '@/app/components/language';
import { getLessons } from '@/app/lib/api';
import useSelectedLanguage from '@/app/lib/hooks/use-selected-language';

const SingleMode = () => {
  const {
    isOnboardingWasFinished,
    handleOnboardingFinish,
    isShowOnboarding,
    handleOnboardingShown,
  } = useSelectedLanguage('selectedLanguages', {});

  const address = useTonAddress()

  const [langs, setLangs] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
       const result = await getLessons(address);
       setLangs(result);
    }
    void fetchData();
  }, []);

  if (!isOnboardingWasFinished || isShowOnboarding) {
    return <Onboarding handleOnboardingFinish={handleOnboardingFinish} />;
  }

  return (
    <div className="h-full w-full mt-[-40px]">
      <h2 className="text-medium text-2xl">Selected Languages:</h2>
      <h1>{isOnboardingWasFinished}</h1>
      <div className="bg-grey-100 h-96 w-full overflow-y-scroll py-4">
        {
          langs?.map((item: any, index:number) => (
              <CourseCard course={item.lang} level={item.level} key={`course-${index}`}/>
          ))
        }
        <Button content={'Add Language'} onClick={() => handleOnboardingShown(true)} />
      </div>
    </div>
  );
};

export default SingleMode;
