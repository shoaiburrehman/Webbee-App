import {Dayjs} from 'dayjs';
import {FieldTypes} from '../constants/categoriesConstants';

export type CategoryType = {
  Id: number;
  CategoryName: string;
  Fields: [
    {
      FieldName: string;
      FieldType: FieldTypes;
    },
  ];
  TitleField: string;
};

export type categories = {
  Categories: CategoryType[];
};
