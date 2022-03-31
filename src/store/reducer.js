/* 
👉 Declare all aplication level states like
- baskets [contain shopping basket details of logged in user]
- user [to contain details of logged In user]
👉 A function which calculate total amount of the items in basket 
*/
export const initialState = {
  basket: [],
  user: null,
};

console.log(initialState);

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.payload],
      };
    default: {
      return state;
      // throw new Error(`Unhandled action type:${action.type}`);
    }
  }
};
