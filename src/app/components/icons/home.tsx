import React from 'react';

interface Props {
  className?: string;
}

function Home({ className }: Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className={className}>
      <g stroke="#1C274C" strokeLinecap="round" strokeWidth="1.5">
        <path d="M9 16c.85.63 1.885 1 3 1s2.15-.37 3-1"></path>
        <path d="M22 12.204v1.521c0 3.9 0 5.851-1.172 7.063C19.657 22 17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.212C2 19.576 2 17.626 2 13.725v-1.521c0-2.289 0-3.433.52-4.381.518-.949 1.467-1.537 3.364-2.715l2-1.241C9.889 2.622 10.892 2 12 2c1.108 0 2.11.622 4.116 1.867l2 1.241c1.897 1.178 2.846 1.766 3.365 2.715"></path>
      </g>
    </svg>
  );
}

export default Home;
