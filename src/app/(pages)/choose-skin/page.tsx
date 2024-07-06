import Image from 'next/image';
import bear from '@/app/images/bear.gif';

const Page = () => {
  return (
    <>
      <div className={'flex h-full w-full flex-col justify-between'}>
        <Image src={bear} height={500} width={677} alt="A welcoming bear" />
        <div className="my-8">
          <h1 className={'text-center text-2xl'}>Coming soon...</h1>
        </div>
      </div>
    </>
  );
};

export default Page;
