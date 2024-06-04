import Button from '@/app/components/Button/Button';
import FlipCard from '@/app/components/FlipCard/FlipCard';
import React from 'react';

function CoursePage() {
    return (
        <div className='flex flex-col w-full h-[400px] justify-between items-center py-8'>
            <FlipCard />
            <p className='text-center text-gray-600 w-full select-none'>SWIPE TO ROTATE</p>
            <Button content='Start the course' />
        </div>
    )
}

export default CoursePage;
