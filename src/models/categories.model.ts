import {FieldTypes} from '../constants/categoriesConstants';

export type CategoryFieldType = {
  FieldName: string;
  FieldType: FieldTypes;
  FieldValue: string | number | Date | boolean | null;
};

export type CategoryType = {
  Id: number;
  CategoryName: string;
  Fields: CategoryFieldType[];
  TitleField: string;
  Data: [
    {
      item: CategoryFieldType[];
    }?,
  ];
};

export type categories = {
  Categories: CategoryType[];
};
