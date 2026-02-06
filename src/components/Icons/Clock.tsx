import type { IconProps } from './Icons.types';

export const Clock = ({ size = 38, color = '#2BBE41' }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.75 7.9502V18.7502H29.55"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M18.75 36.75C28.6914 36.75 36.75 28.6914 36.75 18.75C36.75 8.8086 28.6914 0.75 18.75 0.75C8.8086 0.75 0.75 8.8086 0.75 18.75C0.75 28.6914 8.8086 36.75 18.75 36.75Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
