import Image from 'next/image';
import Link from 'next/link';
import styles from './CourseCard.module.css'
import imgUrl from "./images.png";

interface CourseCardProps {
  course: string;
  level: string;
}

function CourseCard({ course, level }: CourseCardProps) {
  const courseLink = `${course}:${level}`;

  return (
    <Link
      href={`/single-mode/${courseLink}`}
      className={`mb-3 flex h-40 w-full flex-col rounded-2xl border border-black ${styles.background} transition-transform hover:cursor-pointer active:scale-95`}
    >
      <div className="relative h-40 w-full">
        <Image
          src={imgUrl}
          layout="fill"
          objectFit="cover"
          alt="Course picture"
          className="rounded-2xl border border-black"
        />
      </div>
      <div className="flex justify-between rounded-xl p-4">
        <h1>{course}</h1>
        <p>{level}</p>
      </div>
    </Link>
  );
}

export default CourseCard;
