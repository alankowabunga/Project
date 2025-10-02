// @ts-ignore
// @ts-nocheck
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
import { createContext, useReducer } from "react";
import { faker } from "@faker-js/faker";
import { cartReducer, filterReducer } from "./Reducer";

export const CartContext = createContext([]);

export const Context = ({ children }) => {
  const product = [...Array(20)].map(() => ({
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.urlLoremFlickr({ category: "product" }),
    inStock: faker.helpers.arrayElement([0, 1, 3, 5]),
    fastDelivery: faker.datatype.boolean(),
    rating: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
  }));

  // useReducer 的 initial value
  const initialValue = {
    products: product,
    cart: []
  };
  const [state, dispatch] = useReducer(cartReducer, initialValue);

  // filter reducer
  const [filterState, filterDispatch] = useReducer(filterReducer, {
    byStock: false,
    byDelivery: false,
    byRating: 0,
    searchQuery: ""
  })

  return (
    <CartContext.Provider value={{ state, dispatch, filterState, filterDispatch }}>{children}</CartContext.Provider>
  );
};
