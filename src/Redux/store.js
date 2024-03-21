import { configureStore } from "@reduxjs/toolkit";
import { saveState } from "../Config/storage";
import { storageMiddleware } from "./middleware"; // Correctly import storageMiddleware
import productReducer from "./Reducers/products-reducer";

export const store = configureStore({
  reducer: {
    productReducer,
  },
  middleware: (defaultMiddleware) =>
    defaultMiddleware().prepend(storageMiddleware.middleware),
});

store.subscribe(() => {
  saveState("product", store.getState().productReducer);
});
