import styled, { css } from "styled-components";

export const Button = styled.button<{ disabled?: boolean }>`
  background-color: var(--sohoLights);
  color: var(--siphon);
  width: 100%;
  font-family: Gotham, helvetica, arial, sans-serif;
  border-radius: 1rem;
  font-size: 1.5rem;
  font-weight: 400;
  cursor: pointer;

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 50%;
      color: var(--ice);
      cursor: not-allowed;
    `}
`;
