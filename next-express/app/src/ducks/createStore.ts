import logger from "redux-logger";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { Store, combineReducers } from "redux";

import layoutSlice, { initialState as layoutState } from "./layout/slice";

const rootReducer = combineReducers({
  layout: layoutSlice.reducer,
});

const preloadedState = () => {
  return {
    layout: layoutState,
  };
};
export type StoreState = ReturnType<typeof preloadedState>;
export type ReduxState = Store<StoreState>;

const createStore = () => {
  const middlewareList = [...getDefaultMiddleware(), logger];
  return configureStore({
    reducer: rootReducer,
    middleware: middlewareList,
    devTools: process.env.NODE_ENV !== "production",
    preloadedState: preloadedState(),
  });
};

export default createStore;
