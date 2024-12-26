import React from 'react';
import { Stroke } from '@/assets/svg';

const TableFooter = () => {
  return (
    <div className="flex h-[66px] w-full items-center gap-[11px] px-6">
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
  );
};

export default TableFooter;
