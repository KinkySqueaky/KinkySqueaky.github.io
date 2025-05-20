import { configureStore } from "@reduxjs/toolkit";
import kinkListReducer from "../components/KinkList/slice";

export const store = configureStore({
  reducer: {
    kinklist: kinkListReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
