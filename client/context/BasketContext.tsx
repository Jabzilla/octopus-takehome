import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from "react";
import { BasketItem } from "../types/basket";

interface BasketContextType {
  basketItems: Array<BasketItem>;
  setBasketItems: Dispatch<SetStateAction<Array<BasketItem>>>;
}

export const BasketContext = createContext<BasketContextType | null>(null);

export const BasketProvider = ({ children }: { children: ReactNode }) => {
  const [basketItems, setBasketItems] = useState<Array<BasketItem>>([]);

  const memoizedBasket = useMemo(
    () => ({
      basketItems,
      setBasketItems,
    }),
    [basketItems, setBasketItems]
  );

  return (
    <BasketContext.Provider value={memoizedBasket}>
      {children}
    </BasketContext.Provider>
  );
};

export const useBasket = () => {
  const context = useContext(BasketContext);
  if (!context) {
    throw new Error("useBasket must be used within a BasketProvider");
  }
  return context;
};
