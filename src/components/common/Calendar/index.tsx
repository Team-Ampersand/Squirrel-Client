'use client';

import { useState } from 'react';
import { ArrowLeft, ArrowRight } from '@/assets/icons';
import CalendarInput from './atoms/CalendarInput';

type DateString = string; // 'YYYY-MM-DD' 형식

const Calendar = () => {
  const [date, setDate] = useState<DateString>(() => formatDate(new Date()));

  function formatDate(date: Date): DateString {
    return date.toISOString().split('T')[0];
  }

  const incrementDate = () => {
    const nextDay = new Date(date);
    nextDay.setDate(nextDay.getDate() + 1);
    setDate(formatDate(nextDay));
  };

  const decrementDate = () => {
    const previousDay = new Date(date);
    previousDay.setDate(previousDay.getDate() - 1);
    setDate(formatDate(previousDay));
  };

  const handleChange = (type: 'year' | 'month' | 'day', value: number) => {
    const newDate = new Date(date);
    if (type === 'year') newDate.setFullYear(value);
    if (type === 'month') newDate.setMonth(value - 1);
    if (type === 'day') newDate.setDate(value);
    setDate(formatDate(newDate));
  };

  const [year, month, day] = date.split('-').map(Number);

  return (
    <div className="flex h-[132px] w-full flex-col items-center gap-[22px] rounded-lg bg-white p-4 shadow-md">
      <div className="flex w-full items-center justify-between">
        <h2 className="text-lg font-bold text-black">날짜</h2>
        <button
          onClick={() => setDate(formatDate(new Date()))}
          className="text-h5 text-neutral-n20"
        >
          초기화
        </button>
      </div>
      <div className="flex items-center gap-4">
        <button onClick={decrementDate}>
          <ArrowLeft />
        </button>
        <div className="flex items-center gap-1">
          <CalendarInput
            value={year}
            onChange={(e) => handleChange('year', Number(e.target.value))}
            width="w-16"
            placeholder="연도"
          />
          <span>년</span>
          <CalendarInput
            value={month}
            onChange={(e) => handleChange('month', Number(e.target.value))}
            width="w-10"
            placeholder="월"
          />
          <span>월</span>
          <CalendarInput
            value={day}
            onChange={(e) => handleChange('day', Number(e.target.value))}
            width="w-10"
            placeholder="일"
          />
          <span>일</span>
        </div>
        <button onClick={incrementDate}>
          <ArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Calendar;
