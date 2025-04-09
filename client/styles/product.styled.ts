import styled, { css } from "styled-components";
import { OctopusColour } from "../types/colour";
import Image from "next/image";

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
`;

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

export const ProductDetailsGrid = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 5fr 1fr 0.5fr 1fr 1fr;
  grid-template-areas:
    "productImage productImage"
    "productTitle productTitle"
    "productDetails productDetails"
    "productPrice numToAddSelector"
    "addToCart addToCart";
`;

export const ProductImage = styled(Image)`
  border-radius: 1rem;
  grid-area: productImage;
  height: fit-content;
  width: fit-content;
  max-height: 100%;
  max-width: 100%;
`;

export const ProductTitle = styled.h1`
  grid-area: productTitle;
  font-size: 2rem;
  font-weight: 500;
  margin: 0rem;
`;

export const ProductDetails = styled.p`
  grid-area: productDetails;
  opacity: 70%;
  margin: 0rem;
  font-size: 0.9rem;
`;

export const ProductPrice = styled.h1`
  grid-area: productPrice;
  font-size: 1.5rem;
  font-weight: 500;
  margin: 0rem;
`;

export const SpecificationsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
`;
