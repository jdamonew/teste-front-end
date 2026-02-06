import type { ComponentType } from 'react';
import type { IconBaseProps } from '../Card/Card.types';

export type IconComponent = ComponentType<IconBaseProps>;

export interface IconButtonProps {
  icon: IconComponent;
  size?: number;
  color?: string;
  onClick?: () => void;
}
