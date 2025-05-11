// @ts-ignore
// @ts-nocheck
// eslint-disable-next-line @typescript-eslint/ban-ts-comment


/* state 定義的初始值:
const initialValue = {
  products: product,
  cart: [],
}
*/
export const cartReducer = (state: any, action: { type: any; }) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
    case "REMOVE_FROM_CART":
      return { ...state, cart: state.cart.filter((c: { id: any; }) => c.id !== action.payload.id) };
    case "CHANGE_CART_QTY":
      return {
        ...state,
        cart: state.cart.filter((c) => c.id === action.payload.id ? (c.qty = action.payload.qty) : (c.qty))
      }

    default:
      return state;
  }
}

export const filterReducer = (state: any, action: { type: any; }) => {
  switch (action.type) {

    case "SORT_BY_PRICE":
      return { ...state, sort: action.payload };
    case "SORT_BY_STOCKING":
      return { ...state, byStock: !state.byStock };
    case "SORT_BY_DELIVERY":
      return { ...state, byDelivery: !state.byDelivery };
    case "SORT_BY_RATING":
      return { ...state, byRating: action.payload };
    case "SORT_BY_SEARCH":
      return { ...state, searchQuery: action.payload };
    case "CLEAR_ALL_FILTER":
      return {
        byStock: false,
        byDelivery: false,
        byRating: 0,
        searchQuery: ""
      }

    default:
      return state;
  }
}
