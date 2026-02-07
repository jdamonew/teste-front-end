import { ReactNode } from 'react';
import type { DefaultTheme } from 'styled-components';

type ColorVariant = keyof DefaultTheme['colors'];

export interface PanelProps {
  children: ReactNode,
  variant: ColorVariant;
  direction?: 'left' | 'right';
  overlap?: number;
  fullWidth?: boolean;
}
