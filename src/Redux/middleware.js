import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import { addProduct, removeProduct, setCount } from "./Reducers/products-reducer";

const storageMiddleware = createListenerMiddleware();

storageMiddleware.startListening({
  listener: (action) => {
    console.log("Action triggered:", action);
  },
  matcher: isAnyOf(addProduct, removeProduct),
  effect: (_, api) => {
    // api.dispatch(totalPrice());
    api.dispatch(setCount());
    // api.dispatch(setWishlistCount());
  },
});

export { storageMiddleware }; // Correctly export storageMiddleware
