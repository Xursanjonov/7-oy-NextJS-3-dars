import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/counter/CounterSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      counter: counterSlice,
    },
  });
};
