import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export type CategoryStateType = {
  categoriesName: string;
  titleField: string | null;
};

export type categoriesStateType = {
  categories: CategoryStateType[];
};

export const initialState: categoriesStateType = {
  categories: [],
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    addCategories: (state, action: PayloadAction<CategoryStateType>) => {
      state.categories = [...state.categories, action.payload];
    },
    updateCategories: (state, action: PayloadAction<CategoryStateType[]>) => {
      state.categories = action.payload;
    },
  },
});

export const {addCategories, updateCategories} = categoriesSlice.actions;

export default categoriesSlice.reducer;
