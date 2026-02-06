import { type ComponentType, type ReactNode } from "react";

export interface CardProps {
    // id: string | number;
    children: ReactNode;
}

export interface IconBaseProps {
    size?: number;
    color?: string;
}
export type IconComponent = ComponentType<IconBaseProps>;

export interface CardIconProps {
    icon: IconComponent;
    size?: number;
    color?: string;
}

export interface CardTitleProps {
    children: ReactNode;
}

export interface CardTextProps {
    children: ReactNode;
}


export interface CardComponent extends React.FC<CardProps> {
    Icon: React.FC<CardIconProps>;
    Title: React.FC<CardTitleProps>;
    Text: React.FC<CardTextProps>;
}

