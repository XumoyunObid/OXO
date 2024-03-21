import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  count: 0,
};

const productReducer = createSlice({
  name: "product",
  initialState,
  reducers: {
    setCount: (state) => {
      const count = state.products.reduce(
        (accumulator, currentValue) => accumulator + currentValue.userCount,
        0
      );
      return { ...state, count: count };
    },
    addProduct: (state, action) => {
      const idf = state.products.find((item) => item.id === action.payload.id);
      if (!idf) {
        return {
          ...state,
          products: [...state.products, { ...action.payload, userCount: 1 }],
        };
      }
      return state;
    },
    removeProduct: (state, action) => {
      return {
        ...state,
        products: state.products.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    },
  },
});

export default productReducer.reducer;
export const { addProduct, removeProduct, setCount } = productReducer.actions;
