'use client';
import { useTonWallet} from '@tonconnect/ui-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import bear from '@/app/images/bear.gif';
import Button from './components/Button/Button';

export default function Home() {
  const router = useRouter();
  const wallet = useTonWallet();

  const isWalletAddressProvided = !!wallet?.account.address;


  return (
    <>
      <div className={'flex h-full w-full flex-col justify-between'}>
        <Image src={bear} height={500} width={677} alt="A welcoming bear" />
        {
          isWalletAddressProvided ? (<div className="my-8">
            <Button content="Single mode" onClick={() => router.push('/single-mode')} />
            <Button content="Competetive mode" />
          </div>): (
            <div className={"mt-8 text-center flex justify-center items-center h-full"}>
              <h1 className={"text-2xl"}>Connect your Ton wallet before</h1>
            </div>
          )
        }
      </div>
    </>
  );
}
