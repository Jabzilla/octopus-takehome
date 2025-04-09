import { useQuery } from "@tanstack/react-query";
import { gql, request } from "graphql-request";

const allProductsWithVariablesQueryDocument = gql`
  query allProductsWithVariablesQuery($id: ID!) {
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
  return useQuery({
    queryKey: [],
    queryFn: async () =>
      request(
        "http://localhost:3001/graphql",
        allProductsWithVariablesQueryDocument,
        { id: 1 }
      ),
  });
};
