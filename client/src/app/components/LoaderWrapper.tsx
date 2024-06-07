'use client';

import { useState, useEffect } from 'react';
import Loader from './Loader/Loader';
import Header from './Header/Header';
import BottomPanel from './BottomPanel/BottomPanel';

const LoaderWrapper = ({
  children,
}: Readonly<{
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
      <main className="appear flex px-4">{children}</main>
      <BottomPanel />
    </>
  );
};

export default LoaderWrapper;
