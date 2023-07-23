import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {CategoryType} from '../../models/categories.model';

export type categoriesStateType = {
  categories: CategoryType[];
};

export const initialState: categoriesStateType = {
  categories: [],
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    addCategories: (state, action: PayloadAction<CategoryType>) => {
      state.categories = [...state.categories, action.payload];
    },
    updateCategories: (state, action: PayloadAction<CategoryType[]>) => {
      state.categories = action.payload;
    },
  },
});

export const {addCategories, updateCategories} = categoriesSlice.actions;

export default categoriesSlice.reducer;
