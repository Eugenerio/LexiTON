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
            <div className={`absolute w-full h-full ${styles.background} shadow-lg rounded-3xl flex justify-center items-center ${styles.backfaceHidden}`}>
                <h3 className="text-2xl font-bold">{title}</h3>
            </div>

            {/* Back Side */}
            <div className={`absolute w-full h-full bg-gray-100 rounded-lg shadow-lg flex justify-center items-center ${styles.backfaceHidden} ${styles.rotateY180}`}>
                <p className="p-4 text-lg text-black">{description}</p>
            </div>
        </div>
    );
}

export default FlipCard;
