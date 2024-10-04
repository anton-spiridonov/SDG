import { configureStore } from "@reduxjs/toolkit";
import { ModelSlice } from "../components/modal/model";

export const reducers = { modal: ModelSlice.reducer };

export const store = configureStore({
  reducer: reducers,
});
