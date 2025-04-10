import { Dispatch, SetStateAction } from "react";
import { Button } from "../../styles/button.styled";
import {
  Layout,
  MinusButton,
  NumText,
  PlusButton,
  QuantityText,
} from "./productSelector.styled";

interface ProductSelectorProps {
  numProducts: number;
  setNumProducts: Dispatch<SetStateAction<number>>;
}

export const ProductSelector = ({
  numProducts,
  setNumProducts,
}: ProductSelectorProps) => {
  const handleMinusClick = () => {
    setNumProducts((numProducts) => numProducts - 1);
  };

  const handlePlusClick = () => {
    setNumProducts((numProducts) => numProducts + 1);
  };

  return (
    <Layout>
      <QuantityText>Qty</QuantityText>
      <MinusButton disabled={numProducts <= 1} onClick={handleMinusClick}>
        -
      </MinusButton>
      <NumText title="Current quantity">{numProducts}</NumText>
      <PlusButton onClick={handlePlusClick}>+</PlusButton>
    </Layout>
  );
};
