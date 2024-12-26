'use client';

import { usePathname } from 'next/navigation';
import React from 'react';
import { Calendar, Hamburger } from '@/assets/icons';
import OptionButton from '../OptionButton';

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
      <div className="flex space-x-4">
        <OptionButton Icon={<Hamburger />} Text="음악신청" />
        <OptionButton Icon={<Calendar />} Text="달력" />
      </div>
    </div>
  );
};

export default Title;
