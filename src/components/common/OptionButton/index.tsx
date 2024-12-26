import React, { ReactNode } from 'react';

const OptionButton = ({ Icon, Text }: { Icon: ReactNode; Text: string }) => {
  return (
    <button className="mobile1:flex hidden h-[39px] items-center gap-2 rounded-sm bg-neutral-n40 px-4 py-2 text-neutral-n20">
      {Icon}
      {Text}
    </button>
  );
};

export default OptionButton;
