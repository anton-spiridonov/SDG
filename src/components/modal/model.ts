import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

export type ModelSliceProps = {
  isOpen: boolean;
};

export const initialState: ModelSliceProps = {
  isOpen: false,
};

export const ModelSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModel: (state, { payload }: PayloadAction<boolean>) => {
      state.isOpen = payload;
    },
  },
});

export const { openModel } = ModelSlice.actions;

export const useOpenModal = () => useSelector((state: RootState) => state.modal.isOpen);
