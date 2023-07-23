import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  categories: categoriesSlice,
});

import categoriesSlice, {setCategoriesData} from './categories.slice';

export {setCategoriesData};

export default rootReducer;
