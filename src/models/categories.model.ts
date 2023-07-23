import {FieldTypes} from '../constants/categoriesConstants';

export type fieldInfoType = {
  fieldType: FieldTypes;
  fieldName: string;
};

export type CategoryType = {
  Id: string;
  CategoryName: string;
  FieldInfo: fieldInfoType;
  titleField: string;
};

export type categories = {
  Categories: CategoryType[];
};
