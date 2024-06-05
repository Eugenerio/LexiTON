'use client';

import React, { useState } from 'react';
import styles from './FlipCard.module.css';

interface Props {
    title: string;
    description: string;
}
function FlipCard({ title, description }: Props) {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div
            className={`relative w-full h-60 select-none ${styles.transformStylePreserve3d} bg-black rounded-3xl text-white transition-transform duration-700 ${isFlipped ? styles.rotateY180 : ''}`}
            onClick={handleFlip}
        >
            {/* Front Side */}
            <div className={`absolute w-full h-full ${styles.background} rounded-lg shadow-lg rounded-3xl flex justify-center items-center ${styles.backfaceHidden}`}>
                <h3 className="text-2xl font-bold">{title}</h3>
            </div>

            {/* Back Side */}
            <div className={`absolute w-full h-full rounded-lg shadow-lg rounded-3xl flex justify-center text-center items-center ${styles.backfaceHidden} ${styles.rotateY180}`}>
                <h1 className='text-6xl font-bold absolute opacity-20 select-none'>LexiTON</h1>
                <p className="p-4 text-lg">{description}</p>
            </div>
        </div>
    );
}

export default FlipCard;
