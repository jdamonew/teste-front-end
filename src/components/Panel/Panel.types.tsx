import type { DefaultTheme } from 'styled-components';

type ColorVariant = keyof DefaultTheme['colors'];

export interface PanelProps {
    variant: ColorVariant,
    align?: 'left' | 'right' | 'center',
    direction?: 'left' | 'right',
    overlap?: number
}