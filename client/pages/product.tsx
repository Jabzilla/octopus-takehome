import Image from "next/image";
import { Header } from "../components/header/Header";
import { useProductQuery } from "../hooks/useProductQuery";
import {
  AddToCartButton,
  FooterText,
  Layout,
  ProductDetails,
  ProductDetailsGrid,
  ProductImage,
  ProductPrice,
  ProductTitle,
  Section,
  SpecificationsGrid,
} from "../styles/product.styled";
import { formatPence } from "../utils/money";
import { ProductSelector } from "../components/productSelector/ProductSelector";
import { useState } from "react";

export default function Product() {
  const { data } = useProductQuery();
  const [numProducts, setNumProducts] = useState(1);

  console.log(data);

  if (data) {
    return (
      <Layout>
        <Header />
        <Section $backgroundColour="siphon">
          <ProductDetailsGrid>
            <ProductImage
              src={data.Product.img_url}
              alt={`Image of ${data.Product.name}`}
              height={720}
              width={720}
            />
            <ProductTitle>{data.Product.name}</ProductTitle>
            <ProductDetails>
              {data.Product.power} // Packet of {data.Product.quantity}
            </ProductDetails>

            <ProductPrice>{formatPence(data.Product.price)}</ProductPrice>
            <ProductSelector
              numProducts={numProducts}
              setNumProducts={setNumProducts}
            />
            <AddToCartButton>Add to cart </AddToCartButton>
          </ProductDetailsGrid>
        </Section>
        <Section $backgroundColour="hemocyanin">
          <h2>Description</h2>
          <p>{data.Product.description}</p>
        </Section>
        <Section $backgroundColour="siphon">
          <h2>Specifications</h2>
          <SpecificationsGrid>
            <p>Brand</p>
            <p>{data.Product.brand}</p>
            <p>Item weight (g)</p>
            <p>{data.Product.weight}</p>
            <p>Dimensions (cm)</p>
            {/*TODO: clarify if below is width x length or length x width
             */}
            <p>
              {data.Product.height} x {data.Product.width} x{" "}
              {data.Product.length}
            </p>
            <p>Item Model number</p>
            <p>{data.Product.model_code}</p>
            <p>Colour</p>
            <p>{data.Product.colour}</p>
          </SpecificationsGrid>
        </Section>
        <Section $backgroundColour="hemocyanin">
          <FooterText>
            Octopus Energy Ltd is a company registered in England and Wales.
            Registered number: 09263424. Registered office: 33 Holborn, London,
            EC1N 2HT. Trading office: 20-24 Broadwick Street, London, W1F 8HT
          </FooterText>
        </Section>
      </Layout>
    );
  } else {
    return <p>Loading...</p>;
  }
}
