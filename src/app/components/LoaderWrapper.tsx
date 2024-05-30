'use client'

import { useState, useEffect } from 'react';
import Loader from '@/app/components/Loader/Loader';
import Header from '@/app/components/Header/Header';
import BottomPanel from '@/app/components/BottomPanel/BottomPanel';

const LoaderWrapper = ({ children }: Readonly<{
    children: React.ReactNode;
}>) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return <Loader />;
    }

    return (
        <>
            <Header />
            <main className="flex-1 px-4 appear">{children}</main>
            <BottomPanel />
        </>
    );
};

export default LoaderWrapper;
