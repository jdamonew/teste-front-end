import { PropsWithChildren } from "react";
import { ButtonProps } from "./Button.types";
import { ButtonStyles } from "./Button.styles";

export function Button({ children, ...props }: PropsWithChildren<ButtonProps>) {
  return <ButtonStyles {...props}>{children}</ButtonStyles>;
}