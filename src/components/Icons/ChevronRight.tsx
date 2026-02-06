import type { IconProps } from './Icons.types';

export const ChevronRight = ({ size = 40, color = 'black' }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        transform="translate(-7, -6)"
        d="M15.0325 12.9675L23.0475 21L15.0325 29.0325L17.5 31.5L28 21L17.5 10.5L15.0325 12.9675Z"
        fill={color}
      />
    </svg>
  );
};
