import { InputHTMLAttributes } from "react";

import { StyledInput } from './styles'

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function Input({ ...rest }: InputProps) {
  return(
    <StyledInput  {...rest} />
  );
}
