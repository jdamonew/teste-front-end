import { PropsWithChildren } from "react";
import { ButtonProps } from "./Button.types";
import { ButtonStyles } from "./Button.styles";

export function Button({ children, onClick, ...props }: PropsWithChildren<ButtonProps>) {
  return <ButtonStyles onClick={onClick} {...props}>{children}</ButtonStyles>;
}