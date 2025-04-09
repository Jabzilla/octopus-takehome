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

export const Basket = styled.div`
  display: flex;
  flex-direction: row;
  width: fit-content;
  height: 3rem;
`;

export const BasketBadge = styled.p`
  position: relative;
  background-color: red;
  border-radius: 50%;
  padding: 0.2rem;
  top: 1rem;
  left: -1rem;
  height: 1rem;
`;

export const BasketImage = styled(Image)`
  width: fit-content;
  height: 3rem;
`;
