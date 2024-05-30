import Button from "./components/Button/Button";
import Image from "next/image";
import bear from '@/app/images/bear.gif'


export default function Home() {
  return (
    <>
      <div>
        <Image src={bear} height={500} width={677} alt='A welcoming bear' />
        <div className='my-8'>
          <Button content='Single mode' />
          <Button content='Competetive mode' />
        </div>
      </div>
    </>
  );
}