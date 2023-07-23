import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  categories: categoriesSlice,
});

import categoriesSlice, {
  addCategories,
  updateCategories,
} from './categories.slice';

export {addCategories, updateCategories};

export default rootReducer;
