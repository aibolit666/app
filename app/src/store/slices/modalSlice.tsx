import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  modal: '',
};

const slices = createSlice({
  name: 'token',
  initialState,
  reducers: {
    setModal(state: Record<string, unknown>, action: PayloadAction<string>) {
      state.modal = action.payload;
    },
  },
});

export const { setModal } = slices.actions;

export default slices.reducer;
