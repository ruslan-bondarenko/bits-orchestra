import { IReview } from '@/shared/types';
import {PayloadAction, createSlice} from '@reduxjs/toolkit';

export type HeaderStateType = {
  isMenuOpen: boolean;
};

const initialState: HeaderStateType = {
  isMenuOpen: false,
};


export const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    openMenu: (state) => {
      if (state.isAllProductsOpen) state.isAllProductsOpen = false;
      state.isMenuOpen = true;
    },
    toggleMenu: (state) => {
      if (state.isAllProductsOpen) state.isAllProductsOpen = false;
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
  },
});
export const headerAction = headerSlice.actions;

export default headerSlice.reducer;
