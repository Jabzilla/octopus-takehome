import styled from "styled-components";
import { Button } from "../../styles/button.styled";

export const Layout = styled.div`
  grid-area: numToAddSelector;
  display: grid;
  place-items: center;
  margin-left: auto;
  width: fit-content;
  grid-template-columns: 1fr auto 1fr;
  grid-template-rows: 0.25fr auto;
  grid-template-areas:
    ". qty ."
    "minus num plus";
`;

export const QuantityText = styled.p`
  grid-area: qty;
  margin: 0;
`;

export const MinusButton = styled(Button)`
  grid-area: minus;
  height: 3rem;
  width: 3rem;
`;

export const PlusButton = styled(Button)`
  grid-area: plus;
  height: 3rem;
  width: 3rem;
`;

export const NumText = styled.p`
  grid-area: num;
  margin: 0;
  font-size: 2rem;
`;
