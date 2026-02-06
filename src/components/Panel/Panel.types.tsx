import type { DefaultTheme } from 'styled-components';

type ColorVariant = keyof DefaultTheme['colors'];

export interface PanelProps {
  variant: ColorVariant;
  direction?: 'left' | 'right';
  overlap?: number;
  fullWidth?: boolean;
}
