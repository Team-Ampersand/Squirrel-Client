import React from 'react';
import { State } from '@/assets/svg';

const Env = ({ value: _ }: { value: string }) => {
  return (
    <div className="flex w-fit items-center gap-2 rounded-[39px] border-1 border-neutral-n20 px-3 py-1">
      <State />
      Dev
    </div>
  );
};

export default Env;
