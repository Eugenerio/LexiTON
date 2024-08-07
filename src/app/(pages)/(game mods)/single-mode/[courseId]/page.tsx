'use client';
import { useParams, useRouter } from 'next/navigation';
import Button from '@/app/components/Button/Button';
import FlipCard from '@/app/components/FlipCard/FlipCard';


function CoursePage() {
  const router = useRouter();
  const params = useParams();

  const navigationHandler = async () => {
    router.push(`/single-mode/${params.courseId}/lesson`);
  };
  return (
    <div className="flex h-[400px] w-full flex-col items-center justify-between py-8">
      <FlipCard className='mt-[-50px]' title={'Polish'} description={'A Polish course that you might want to complete'} />
      <p className="w-full select-none text-center text-white-600">SWIPE TO ROTATE</p>
      <Button content="Start the course" onClick={navigationHandler} />
    </div>
  );
}

export default CoursePage;
