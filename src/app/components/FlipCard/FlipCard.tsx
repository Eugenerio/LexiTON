'use client';

import React, { useState } from 'react';
import styles from './FlipCard.module.css';

interface Props {
    title: string;
    description: string;
    className?: string;
}
function FlipCard({ title, description, className }: Props) {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div
            className={`relative w-full ${className} h-[275px] select-none ${styles.transformStylePreserve3d} bg-[#00000075] rounded-xl text-white transition-transform duration-700 ${isFlipped ? styles.rotateY180 : ''}`}
            onClick={handleFlip}
        >
            {/* Front Side */}
            <div className={`absolute w-full h-full ${styles.background} rounded-lg shadow-xl rounded-xl flex justify-center items-center ${styles.backfaceHidden}`}>
                <h3 className="text-2xl font-bold">{title}</h3>
            </div>

            {/* Back Side */}
            <div className={`absolute w-full h-full rounded-lg shadow-lg rounded-xl flex justify-center text-center items-center ${styles.backfaceHidden} ${styles.rotateY180}`}>
                <h1 className='text-6xl font-bold absolute opacity-20 select-none'>LexiTON</h1>
                <p className="p-4 text-lg">{description}</p>
            </div>
        </div>
    );
}

export default FlipCard;
