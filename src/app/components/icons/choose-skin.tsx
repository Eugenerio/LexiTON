import React from 'react';

interface Props {
  className?: string;
}

function Icon({ className }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="#fff"
      version="1.1"
      viewBox="0 0 480 480"
      xmlSpace="preserve"
      className={className}
    >
      <g>
        <path d="M472 0H8C3.584 0 0 3.576 0 8v128c0 4.424 3.584 8 8 8h80v296c0 22.056 17.944 40 40 40h224c22.056 0 40-17.944 40-40V144h80c4.416 0 8-3.576 8-8V8c0-4.424-3.584-8-8-8zM295.36 16c-3.904 27.088-27.208 48-55.36 48s-51.456-20.912-55.36-48h110.72zM464 128h-80c-4.416 0-8 3.576-8 8v304c0 13.232-10.768 24-24 24H128c-13.232 0-24-10.768-24-24V136c0-4.424-3.584-8-8-8H16V16h152.472c4 35.944 34.536 64 71.528 64s67.536-28.056 71.528-64H464v112z"></path>
        <path d="M301.656 186.344l-56-56a7.991 7.991 0 00-11.312 0l-56 56A8 8 0 00184 200h16v80c0 4.424 3.584 8 8 8h64c4.416 0 8-3.576 8-8v-80h16a8 8 0 005.656-13.656zM272 184c-4.416 0-8 3.576-8 8v80h-48v-80c0-4.424-3.584-8-8-8h-4.688L240 147.312 276.688 184H272z"></path>
        <path d="M232 336H248V352H232z"></path>
        <path d="M264 336H280V352H264z"></path>
        <path d="M200 336H216V352H200z"></path>
        <path d="M232 368H248V384H232z"></path>
        <path d="M264 368H280V384H264z"></path>
        <path d="M296 368H312V384H296z"></path>
        <path d="M200 368H216V384H200z"></path>
        <path d="M168 368H184V384H168z"></path>
        <path d="M232 304H248V320H232z"></path>
      </g>
    </svg>
  );
}

export default Icon;
