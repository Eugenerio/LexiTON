'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import bear from '@/app/images/bear.gif';
import Button from './components/Button/Button';

export default function Home() {
  const router = useRouter();
  return (
    <>
      <div className={'flex h-full w-full flex-col justify-between'}>
        <Image src={bear} height={500} width={677} alt="A welcoming bear" />
        <div className="my-8">
          <Button content="Single mode" onClick={() => router.push('/single-mode')} />
          <Button content="Competetive mode" />
        </div>
      </div>
    </>
  );
}
