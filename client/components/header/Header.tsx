import { useBasket } from "../../context/BasketContext";
import {
  Basket,
  BasketBadge,
  BasketImage,
  HeaderWrapper,
  LogoImage,
} from "./header.styled";
import Link from "next/link";

export const Header = () => {
  const { basketItems } = useBasket();
  const numBasketItems = basketItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );
  return (
    <HeaderWrapper>
      <Link href="/">
        <LogoImage
          src="/octopus-logo.svg"
          alt="The Octopus Energy logo"
          height={67}
          width={470}
        />
      </Link>

      <Basket>
        <BasketImage
          src="/basket.svg"
          alt="An icon of a shopping basket"
          height={911}
          width={492}
        />
        {numBasketItems > 0 && (
          <BasketBadge title="Basket items">{numBasketItems}</BasketBadge>
        )}
      </Basket>
    </HeaderWrapper>
  );
};
