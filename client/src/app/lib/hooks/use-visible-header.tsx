'use client';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useMemo } from 'react';

const useVisibleHeader = (initialPath = '/') => {
  const pathname = usePathname();
  const [visible, setVisible] = useState(pathname === initialPath);

  const isGame = useMemo(() => {
    return pathname.startsWith('/single-mode');
  }, [pathname]);

  useEffect(() => {
    setVisible(pathname === initialPath);
  }, [pathname, initialPath]);

  return { visible, isGame };
};

export default useVisibleHeader;
