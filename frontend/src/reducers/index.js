import { combineReducers } from "redux";

const initialState = {
  cartItems: [],
  orderItems: [],
};

const cartItemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item._id === action.payload._id
      );

      if (existingItemIndex !== -1) {
        // If the item already exists in the cart, update its quantity
        const updatedCartItems = state.cartItems.map((item, index) =>
          index === existingItemIndex
            ? {
                ...item,
                quantity: item.quantity + 1,
                totalPrice: item.price * (item.quantity + 1),
              }
            : item
        );

        return {
          ...state,
          cartItems: updatedCartItems,
        };
      } else {
        return { ...state, cartItems: [...state.cartItems, action.payload] };
      }
    case "DELETE":
      console.log(action);
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item._id !== action.payload
        ),
      };
    case "MODIFY":
      console.log(action);
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item._id === action.payload.productId
            ? {
                ...item,
                quantity: action.payload.newQuantity,
                totalPrice: item.price * action.payload.newQuantity,
              }
            : item
        ),
      };
    default:
      return state;
  }
};

const orderItemsReducer = (state = initialState, action) => {
  switch(action.type){
    case "ADD":
      return { ...state, orderItems: [...state.orderItems, action.payload] };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cartItems: cartItemsReducer,
  orderItems: orderItemsReducer
});

export default rootReducer;
