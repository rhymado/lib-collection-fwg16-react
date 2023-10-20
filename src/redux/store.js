import { configureStore } from "@reduxjs/toolkit";

import calcReducer from "./slices/calculator";

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

const store = configureStore({
  reducer: {
    calculator: calcReducer,
  },
});

export default store;
