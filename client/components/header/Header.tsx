import Image from "next/image";
import { BasketImage, HeaderWrapper, LogoImage } from "./header.styled";
import Link from "next/link";

export const Header = () => {
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

      <BasketImage
        src="/basket.svg"
        alt="An icon of a shopping basket"
        height={911}
        width={492}
      />
    </HeaderWrapper>
  );
};
