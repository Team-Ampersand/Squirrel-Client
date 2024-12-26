'use client';

import { usePathname } from 'next/navigation';
import React from 'react';

const Title = () => {
  const pathname = usePathname();

  const getTitle = () => {
    switch (pathname) {
      case '/':
        return '예약';
      case '/music':
        return '음악';
    }
  };

  return (
    <div className="mb-[23px] flex w-full justify-between">
      <p className="text-h2 text-black">{getTitle()}</p>
    </div>
  );
};

export default Title;
