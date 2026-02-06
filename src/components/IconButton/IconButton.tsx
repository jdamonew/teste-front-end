// import styled from "styled-components";

import type { IconButtonProps } from "./IconButton.types";
import * as IconStyles from './IconButton.styles'

export const IconButton: React.FC<IconButtonProps> = ({ icon: Icon, onClick, color, size = 30 }) => {
    return (
        <IconStyles.IconButton onClick={onClick}>
            <Icon size={size} color={color} />
        </IconStyles.IconButton>
    );
};