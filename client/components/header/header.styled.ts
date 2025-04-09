import Image from "next/image";
import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 4rem;
  padding: 1rem;
  overflow: hidden;
  align-items: center;
  width: 100vw;
  overflow-x: hidden;
  box-sizing: border-box;
`;

export const LogoImage = styled(Image)`
  height: 3rem;
  width: fit-content;
  max-width: 50vw;
`;

export const BasketImage = styled(Image)`
  width: fit-content;
  height: 3rem;

  @media (max-width: 768px) {
    width: fit-content;
    height: 3rem;
  }
`;
