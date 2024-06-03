import React from 'react';

interface Props {
  className?: string;
}

function Check({ className }: Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className={className}>
      <g stroke="#1C274C" strokeLinecap="round" strokeWidth="1.5">
        <path strokeLinejoin="round" d="M8.5 12.5l2 2 5-5"></path>
        <path d="M7 3.338A9.954 9.954 0 0112 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></path>
      </g>
    </svg>
  );
}

export default Check;
