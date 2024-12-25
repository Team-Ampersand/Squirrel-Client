'use client';

import React from 'react';
import FilterButton from './atoms/FilterButton';
import FilterHeader from './atoms/FilterHeader';
import FilterToggle from './atoms/FilterToggle';

const FilterWrapper = () => {
  return (
    <div className="flex flex-col gap-7 bg-background-card p-6">
      <FilterHeader text="필터" />
      <div>
        <p className="mb-2 text-body2 text-neutral-n30">카테고리</p>
        <div className="flex flex-col gap-5">
          <FilterToggle text="자습" />
          <FilterToggle text="안마의자" />
        </div>
      </div>
      <div>
        <p className="mb-2 text-body2 text-neutral-n30">상태</p>
        <div className="flex gap-2">
          <FilterButton text="CREATE" />
          <FilterButton text="DELETE" />
        </div>
      </div>
    </div>
  );
};

export default FilterWrapper;
