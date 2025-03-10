import React from 'react';

const CheckedBox = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23 12C23 16.3923 22.228 19.0427 20.6353 20.6353C19.0427 22.228 16.3923 23 12 23C7.6077 23 4.95735 22.228 3.36468 20.6353C1.77202 19.0427 1 16.3923 1 12C1 7.6077 1.77202 4.95735 3.36468 3.36468C4.95735 1.77202 7.6077 1 12 1C16.3923 1 19.0427 1.77202 20.6353 3.36468C22.228 4.95735 23 7.6077 23 12Z"
        fill="#6F7AEC"
        stroke="#6F7AEC"
        strokeWidth="2"
      />
      <path
        d="M8 12L11 15L16 9"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CheckedBox;
