import React from 'react';
import { Stroke } from '@/assets/svg';

const TableHeader = () => {
  return (
    <div className="flex h-[66px] items-center justify-between px-2">
      <p className="w-fit text-h5 text-neutral-n10">로그</p>
      <div className="flex h-[66px] items-center gap-[11px]">
        <div className="flex items-center gap-2">
          <p className="text-body2 text-primary-p10">CREATE</p>
          <p className="text-body2 text-neutral-n20">81명</p>
        </div>
        <Stroke />
        <div className="flex items-center gap-2">
          <p className="text-body2 text-system-error">DELETE</p>
          <p className="text-body2 text-neutral-n20">66명</p>
        </div>
      </div>
    </div>
  );
};

export default TableHeader;
