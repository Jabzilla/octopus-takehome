import styled, { css } from "styled-components";
import { OctopusColour } from "../types/colour";

const octoColourBackgrounds = (colour: OctopusColour) => {
  return {
    hemocyanin: css`
      background: var(--hemocyanin);
    `,
    ice: css`
      background: var(--ice);
    `,
    plum: css`
      background: var(--plum);
    `,
    purpleHaze: css`
      background: var(--purpleHaze);
    `,
    siphon: css`
      background: var(--siphon);
    `,
    sohoLights: css`
      background: var(--sohoLights);
    `,
  }[colour];
};

export const Section = styled.section<{ $backgroundColour: OctopusColour }>`
  padding: 1rem;
  ${({ $backgroundColour }) => octoColourBackgrounds($backgroundColour)};
`;

export const FooterText = styled.p`
  font-size: 0.8rem;
  opacity: 70%;
`;
