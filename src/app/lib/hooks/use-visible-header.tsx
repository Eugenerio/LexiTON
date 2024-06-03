'use client';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const useVisibleHeader = (initialPath = '/') => {
  const pathname = usePathname();
  const [visible, setVisible] = useState(pathname === initialPath);

  const isGame = pathname === '/single-mode';

  useEffect(() => {
    setVisible(pathname === initialPath);
  }, [pathname, initialPath]);

  return { visible, isGame };
};

export default useVisibleHeader;
