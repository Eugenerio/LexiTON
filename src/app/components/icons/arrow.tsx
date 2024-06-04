interface Props {
  className?: string;
  color?: string;
}

function Arrow({ className, color = '#fff' }: Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className={className}>
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M9 5l5.15 5a2.739 2.739 0 010 4L9 19"
      ></path>
    </svg>
  );
}

export default Arrow;
