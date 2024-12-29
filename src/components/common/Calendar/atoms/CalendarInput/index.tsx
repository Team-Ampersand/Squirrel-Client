import React from 'react';

interface Props {
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  width?: string;
  placeholder?: string;
}

const CalendarInput: React.FC<Props> = ({
  value,
  onChange,
  width = 'w-16',
  placeholder,
}) => {
  return (
    <input
      type="number"
      value={value}
      onChange={onChange}
      className={`${width} rounded-md bg-neutral-n50 py-2 text-center text-body1 text-neutral-n20 [appearance:textfield] [&::-webkit-inner-spin-button]:hidden [&::-webkit-outer-spin-button]:hidden`}
      placeholder={placeholder}
    />
  );
};

export default CalendarInput;
