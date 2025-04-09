import { useProductQuery } from "../hooks/useProductQuery";

export default function Product() {
  const { data } = useProductQuery();

  console.log(data);

  return (
    <div>
      <p>Header bar</p>
      <section>
        <p>Product image</p>
        <p>Product name</p>
        <p>product.power // packet of product.quantity</p>
        <div>
          <p>product.price</p>
          <p>num product selector</p>
        </div>
        <p>Add to cart button</p>
      </section>
      <section>
        <h2>Description</h2>
        <p>Product description</p>
      </section>
      <section>
        <h2>Specifications</h2>
        <div>
          <p>Brand</p>
          <p>product.brand</p>
          <p>Item weight (g)</p>
          <p>product.weight</p>
          <p>Dimensions (cm)</p>
          {/*TODO: clarify if below is width x length or length x width
           */}
          <p>product.height x product.width x product.length</p>
          <p>Item Model number</p>
          <p>product.model</p>
          <p>Colour</p>
          <p>product.colour</p>
        </div>
      </section>
      <section>
        <p>
          Octopus Energy Ltd is a company registered in England and Wales.
          Registered number: 09263424. Registered office: 33 Holborn, London,
          EC1N 2HT. Trading office: 20-24 Broadwick Street, London, W1F 8HT
        </p>
      </section>
      Product page
    </div>
  );
}
