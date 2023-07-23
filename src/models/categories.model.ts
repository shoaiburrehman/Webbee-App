import {Dayjs} from 'dayjs';
import {FieldTypes} from '../constants/categoriesConstants';

export type CategoryType = {
  Id: number;
  CategoryName: string;
  Fields: [
    {
      FieldName: string;
      FieldType: FieldTypes;
      FieldValue: string | number | Date | boolean | null;
    },
  ];
  TitleField: string;
};

export type categories = {
  Categories: CategoryType[];
};
