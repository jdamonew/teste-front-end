import { PanelStyle } from "./Panel.styles";
import { PanelProps } from "./Panel.types";

export const Panel = ({ children, ...props }: PanelProps) => {
  return <PanelStyle {...props}>{children}</PanelStyle >;
};
