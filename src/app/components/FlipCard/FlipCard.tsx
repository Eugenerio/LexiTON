'use client';

import React, { useState, useEffect } from 'react';
import styles from './FlipCard.module.css';

interface Props {
    title: string;
    description: string;
    className?: string;
}

function FlipCard({ title, description, className }: Props) {
    const [isFlipped, setIsFlipped] = useState(false);
    const [startPoint, setStartPoint] = useState<{ x: number; y: number } | null>(null);

    const handleTouchStart = (e: React.TouchEvent) => {
        const touch = e.touches[0];
        setStartPoint({ x: touch.clientX, y: touch.clientY });
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        setStartPoint({ x: e.clientX, y: e.clientY });
    };

    const handleMove = (x: number, y: number) => {
        if (startPoint) {
            const diffX = x - startPoint.x;
            const diffY = y - startPoint.y;

            // Threshold for swipe
            if (Math.abs(diffX) > 50 && Math.abs(diffY) < 50) {
                setIsFlipped((prev) => !prev);
                setStartPoint(null); // Reset start point
            }
        }
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        const touch = e.touches[0];
        handleMove(touch.clientX, touch.clientY);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        handleMove(e.clientX, e.clientY);
    };

    const handleEnd = () => {
        setStartPoint(null);
    };

    useEffect(() => {
        document.addEventListener('mouseup', handleEnd);
        document.addEventListener('touchend', handleEnd);
        return () => {
            document.removeEventListener('mouseup', handleEnd);
            document.removeEventListener('touchend', handleEnd);
        };
    }, []);

    return (
        <div
            className={`relative w-full ${className} h-[275px] select-none ${styles.transformStylePreserve3d} bg-[#00000075] rounded-xl text-white transition-transform duration-700 ${isFlipped ? styles.rotateY180 : ''}`}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
        >
            {/* Front Side */}
            <div className={`absolute w-full h-full ${styles.background} rounded-lg shadow-xl flex justify-center items-center ${styles.backfaceHidden}`}>
                <h3 className="text-2xl font-bold">{title}</h3>
            </div>

            {/* Back Side */}
            <div className={`absolute w-full h-full rounded-lg shadow-lg flex justify-center text-center items-center ${styles.backfaceHidden} ${styles.rotateY180}`}>
                <h1 className='text-6xl font-bold absolute opacity-20 select-none'>LexiTON</h1>
                <p className="p-4 text-lg">{description}</p>
            </div>
        </div>
    );
}

export default FlipCard;
