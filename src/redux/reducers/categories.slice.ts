import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export type CategoriesStateType = {
  categoriesName: string;
};

export const initialState: CategoriesStateType = {
  categoriesName: '',
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setCategoriesData: (state, action: PayloadAction<string>) => {
      state.categoriesName = action.payload;
    },
  },
});

export const {setCategoriesData} = categoriesSlice.actions;

export default categoriesSlice.reducer;
