import { useQuery } from "@tanstack/react-query";
import { gql, request } from "graphql-request";

interface ProductQuery {
  Product: {
    id: string;
    name: string;
    power: string;
    description: string;
    price: number;
    quantity: number;
    brand: string;
    weight: number;
    height: number;
    width: number;
    length: number;
    model_code: string;
    colour: string;
    img_url: string;
  };
}

const allProductsWithIdQueryDocument = gql`
  query allProductsWithIdQuery($id: ID!) {
    Product(id: $id) {
      id
      name
      power
      description
      price
      quantity
      brand
      weight
      height
      width
      length
      model_code
      colour
      img_url
    }
  }
`;

export const useProductQuery = () => {
  return useQuery<ProductQuery>({
    queryKey: [],
    queryFn: async () => {
      const data: ProductQuery = await request(
        "http://localhost:3001/graphql",
        allProductsWithIdQueryDocument,
        { id: 1 }
      );
      return data;
    },
  });
};
