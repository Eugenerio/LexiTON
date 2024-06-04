import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface CourseCardProps {
    course: string,
    /*course {
        name: string,
        id: number,
        link: string
    }*/
    level: string,
}

function CourseCard({ course, level, /* courseLink */ }: CourseCardProps) {
    const courseLink = 'amockcourselink';

    return (
        <Link href={`/single-mode/${courseLink}`} className="h-40 w-full border border-black rounded-2xl flex flex-col mb-3 hover:cursor-pointer active:scale-95 transition-transform">
            <div className="relative h-40 w-full">
                <Image
                    src=''
                    layout='fill'
                    objectFit='cover'
                    alt='Course picture'
                    className='border border-black rounded-2xl'
                />
            </div>
            <div className="flex justify-between p-4 rounded-xl">
                <h1>{course}</h1>
                <p>{level}</p>
            </div>
        </Link>
    )
}

export default CourseCard
