import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import timerReducer from "./timer-reducer";

export const store = configureStore({
  reducer: {
    timer: timerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch; // Export a hook that can be reused to resolve types

export default store;
