import React, { ReactNode } from 'react';

interface IconButtonProps {
  children: ReactNode;
}

const IconButton: React.FC<IconButtonProps> = ({ children }) => {
  return <button className="rounded-sm bg-neutral-n50 p-2">{children}</button>;
};

export default IconButton;
