import React from "react";
import * as CardStyles from "./Card.styles";
import type {
    CardProps,
    CardIconProps,
    CardTitleProps,
    CardTextProps,
    CardComponent,
} from "./Card.types";

const Card: CardComponent = ({ children }: CardProps) => {
    return <CardStyles.Container>{children}</CardStyles.Container>;
};

const Icon: React.FC<CardIconProps> = ({ icon: Icon, color, size }) => {
    return (
        <CardStyles.Icon>
            <Icon size={size} color={color} />
        </CardStyles.Icon>
    );
};

const Title: React.FC<CardTitleProps> = ({ children }) => {
    return <CardStyles.Title>{children}</CardStyles.Title>;
};

const Text: React.FC<CardTextProps> = ({ children }) => {
    return <CardStyles.Text>{children}</CardStyles.Text>;
};


Card.Icon = Icon;
Card.Title = Title;
Card.Text = Text;

export {
    Card
};
