import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  number: 0,
};

const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    add(prevState, { payload }) {
      return {
        ...prevState,
        number: prevState.number + payload,
      };
    },
    sub(prevState, { payload }) {
      return {
        ...prevState,
        number: prevState.number - payload,
      };
    },
    mul(prevState, { payload }) {
      return {
        ...prevState,
        number: prevState.number * payload,
      };
    },
    div(prevState, { payload }) {
      return {
        ...prevState,
        number: prevState.number / payload,
      };
    },
    set(prevState, { payload }) {
      return {
        ...prevState,
        number: payload,
      };
    },
    del(prevState) {
      return {
        ...prevState,
        number: 0,
      };
    },
  },
});

export const { add, del, div, mul, set, sub } = calculatorSlice.actions;
export default calculatorSlice.reducer;
