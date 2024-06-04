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
      className={`relative h-60 w-full select-none ${styles.transformStylePreserve3d} transition-transform duration-700 ${isFlipped ? styles.rotateY180 : ''}`}
      onClick={handleFlip}
    >
      {/* Front Side */}
      <div
        className={`absolute flex h-full w-full items-center justify-center rounded-lg bg-white shadow-lg ${styles.backfaceHidden}`}
      >
        <h3 className="text-2xl font-bold text-black">{title}</h3>
      </div>

      {/* Back Side */}
      <div
        className={`absolute flex h-full w-full items-center justify-center rounded-lg bg-gray-100 shadow-lg ${styles.backfaceHidden} ${styles.rotateY180}`}
      >
        <p className="p-4 text-lg">{description}</p>
      </div>
    </div>
  );
}

export default FlipCard;
