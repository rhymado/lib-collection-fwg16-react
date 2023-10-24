import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  PERSIST,
  FLUSH,
  REHYDRATE,
  PAUSE,
  REGISTER,
  PURGE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import calcReducer from "./slices/calculator";
import userReducer from "./slices/user";

// const initialState = {
//   number: 0,
// };

// const reducerFunc = (prevState = initialState, action) => {
//   /**
//    * kalkulator (ADD, SUB, MUL, DIV, SET)
//    * action: {
//    *  type: (ADD, SUB, MUL, DIV, SET)
//    *  data: berisikan data relevan
//    * }
//    */
//   // berdasarkan action yang diterima
//   // akan mengembalikan state yang berbeda juga
//   switch (action.type) {
//     case "ADD":
//       return {
//         ...prevState,
//         number: prevState.number + action.data,
//       };
//     case "SUB":
//       return {
//         ...prevState,
//         number: prevState.number - action.data,
//       };
//     case "MUL":
//       return {
//         ...prevState,
//         number: prevState.number * action.data,
//       };
//     case "DIV":
//       return {
//         ...prevState,
//         number: prevState.number / action.data,
//       };
//     case "SET":
//       return {
//         ...prevState,
//         number: action.data,
//       };
//     case "DEL":
//       return {
//         ...prevState,
//         number: 0,
//       };
//     default:
//       return prevState;
//   }
// };

const persistConfig = {
  key: "lib",
  storage,
  // bisa ditambah blacklist atau whitelist
  whitelist: ["calculator"],
};

const userPersistConfig = {
  key: "user-lib",
  storage,
  whitelist: ["isUserAvailable", "userInfo"],
};

const combinedReducer = combineReducers({
  calculator: calcReducer,
  user: persistReducer(userPersistConfig, userReducer),
});

const persistedReducer = persistReducer(persistConfig, combinedReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [PERSIST, FLUSH, REHYDRATE, PAUSE, REGISTER, PURGE],
      },
    }),
});

export const persistedStore = persistStore(store);
