import React from "react";
import styled, { css } from "styled-components";

type AsButtonProps = {
  as?: "button";
};
type AsAnchorProps = {
  as?: "a";
  href: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
};
type ButtonProps = {
  variant?: "primary" | "secondary";
  label: string;
  disabled?: boolean;
  onClick?: () => void;
} & (AsButtonProps | AsAnchorProps);

type StyledButtonProps = {
  variant?: "primary" | "secondary";
};
const StyledButton = styled.button<StyledButtonProps>(
  ({ variant }) => css`
    color: #fff;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 6px;
    font-size: 1.15rem;
    &:hover {
      cursor: pointer;
    }

    ${(() => {
      switch (variant) {
        case "primary":
          return css`
            background-color: #e74079;
            color: #fff;
            &:hover {
              background-color: #dc3f73;
            }
          `;
        case "secondary":
          return css`
            background-color: #fff;
            color: #e74079;
            border: 1px solid #e74079;
            &:hover {
              background-color: #f9f9f9;
            }
          `;
        default:
          return null;
      }
    })()}
  `
);

const Button = ({
  as = "button",
  variant = "primary",
  label,
  disabled,
  onClick,
  ...props
}: ButtonProps) => {
  const { href, target } = { ...props };

  return (
    <StyledButton
      as={as}
      variant={variant}
      href={href}
      target={target}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </StyledButton>
  );
};

export default Button;
