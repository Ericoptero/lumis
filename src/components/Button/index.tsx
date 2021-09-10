import { ButtonHTMLAttributes } from "react";

import { StyledButton } from './styles'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ children, ...rest }: ButtonProps) {
  return(
    <StyledButton type="button" {...rest}>{children}</StyledButton>
  );
}

