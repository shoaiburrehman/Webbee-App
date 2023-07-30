import dayjs from 'dayjs';
import {FieldTypes} from '../constants/categoriesConstants';
import {CategoryFieldType, CategoryType} from '../models/categories.model';

export const _handleAddCategoryFunc = (category: CategoryType) => {
  const data: CategoryFieldType[] = [];
  category.Fields.forEach(field => {
    let temp = {
      FieldName: field.FieldName,
      FieldType: field.FieldType,
      FieldValue: field.FieldType == FieldTypes.CHECKBOX ? false : '',
    };
    data.push(temp);
  });

  category = {
    ...category,
    Data: [
      ...category.Data,
      {
        item: data,
      },
    ],
  };

  return category;
};

export const _handleDeleteCategoryFunc = (
  category: CategoryType,
  ind: number,
) => {
  const options = category.Data.filter((_, index) => index != ind);
  category = {
    ...category,
    Data: options,
  };

  return category;
};

export const _handleFieldChange = (
  category: CategoryType,
  e: string,
  indexField: number,
  i: number,
) => {
  const cateField = category.Data.map((field, index) => {
    if (index == indexField) {
      const options = field?.item.map((inp, ind) => {
        if (ind == i) {
          inp = {
            ...inp,
            FieldValue: e,
          };
        }
        return inp;
      });
      field = {
        ...field,
        item: options,
      };
    }
    return field;
  });
  category = {
    ...category,
    Data: cateField,
  };

  return category;
};

export const _handleAddDateFunc = (
  category: CategoryType,
  indexField: number | null,
  indexInput: number | null,
  date: string,
) => {
  const cateField = category.Data.map((field, index) => {
    if (index == indexField) {
      const options = field?.item.map((inp, ind) => {
        if (ind == indexInput) {
          inp = {
            ...inp,
            FieldValue: dayjs(date).format('DD-MM-YYYY'),
          };
        }
        return inp;
      });
      field = {
        ...field,
        item: options,
      };
    }
    return field;
  });
  category = {
    ...category,
    Data: cateField,
  };

  return category;
};
