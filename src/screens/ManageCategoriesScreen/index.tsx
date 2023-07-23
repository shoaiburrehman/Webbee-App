import React, {useEffect, useState, useRef, useCallback} from 'react';
import {
  View,
  Image,
  Text,
  Platform,
  TouchableOpacity,
  FlatList,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';
import debounce from 'lodash.debounce';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import DatePicker from 'react-native-date-picker';
import {Picker} from '@react-native-picker/picker';
import {useDispatch} from 'react-redux';
import dayjs from 'dayjs';
import styles from './styles';
import {useTypedSelector} from '../../redux/useTypedSelected';
import TouchablePicker from '../../components/TouchablePicker';
import GeneralButton from '../../components/GeneralButton';
import InputField from '../../components/InputField';
import {Colors} from '../../themes/Colors';
import {icons} from '../../assets';
import {CategoryType} from '../../models/categories.model';
import {FieldTypes} from '../../constants/categoriesConstants';
import {
  addCategories,
  updateCategories,
} from '../../redux/reducers/categories.slice';
import {useFocusEffect, useIsFocused} from '@react-navigation/native';
import ModalViewWrapper from '../../modal/ModalWrapper';

type Props = {
  navigation: any;
  route: any;
};

const ManageCategoriesScreen = (props: Props) => {
  const taskDetail = props?.route?.params?.taskDetail;
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openTitleFieldModel, setTitleFieldModal] = useState<boolean>(false);
  const [titleFieldOptions, setTitleFieldOptions] = useState<object>();
  const [itemCategory, setItemCategory] = useState<CategoryType | null>(null);
  const [indexCategory, setIndexCategory] = useState<number | null>(null);
  const dispatch = useDispatch();
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [isDate, setIsDate] = useState(false);
  let formatDate = dayjs(date).format('DD-MM-YYYY');
  const options = [
    {
      label: 'Add New Field',
      value: null,
    },
    {
      label: 'Text',
      value: 'TEXT',
    },
    {
      label: 'Date',
      value: 'DATE',
    },
    {
      label: 'Checkbox',
      value: 'CHECKBOX',
    },
    {
      label: 'Number',
      value: 'NUMBER',
    },
  ];

  const categories = useTypedSelector(state => state.categories.categories);
  const [categoriesList, setCategoriesList] = useState(categories);

  useFocusEffect(
    useCallback(() => {
      return () => {
        dispatch(updateCategories(categoriesList));
      };
    }, [categoriesList]),
  );

  const renderEmptyComponent = () => {
    return (
      <View style={styles.emptyView}>
        <Text style={styles.emptyText}>No Categories Added</Text>
      </View>
    );
  };

  type renderPropType = {
    item: CategoryType;
    index: number;
  };

  const handleChange = (
    key: string,
    val: string | boolean,
    item: CategoryType,
  ) => {
    const categories = categoriesList.map((cat, index) => {
      if (cat.Id === item.Id) {
        cat = {
          ...cat,
          [key]: val,
        };
      }
      return cat;
    });
    setCategoriesList(categories);
  };

  const handleDeleteCategory = (item: CategoryType) => {
    let cateories = categoriesList.filter((cat, index) => cat.Id !== item?.Id);
    setCategoriesList(cateories);
  };

  const handleFieldsChange = (e: string, item: CategoryType, i: number) => {
    const category = categoriesList.map((cat, ind) => {
      if (item.Id == cat?.Id) {
        const options = cat.Fields.map((field, index) => {
          if (index == i) {
            field = {
              FieldType: field.FieldType,
              FieldName: e,
            };
          }
          return field;
        });
        cat = {
          ...cat,
          Fields: options,
        };
      }
      return cat;
    });
    setCategoriesList(category);
  };

  const handleAddField = (item: CategoryType, type: FieldTypes) => {
    const categories = categoriesList.map((cat, index) => {
      if (item.Id == cat.Id) {
        let field = {
          FieldName: '',
          FieldType: type,
        };
        cat = {
          ...cat,
          Fields: [...cat.Fields, field],
        };
      }
      return cat;
    });
    setCategoriesList(categories);
  };

  const onTitleFieldPress = (select: object) => {
    const category = categoriesList.map((item, i) => {
      if (item.Id == itemCategory?.Id) {
        item = {
          ...item,
          TitleField: select.value,
        };
      }
      return item;
    });
    setCategoriesList(category);
    setIndexCategory(null);
    setItemCategory(null);
    setTitleFieldModal(!openTitleFieldModel);
  };

  const onFieldTypePress = (select: object) => {
    const category = categoriesList.map((item, i) => {
      if (item.Id == itemCategory?.Id) {
        const options = item.Fields.map((field, index) => {
          if (index == indexCategory) {
            field = {
              FieldType: select.value,
              FieldName: '',
            };
          }
          return field;
        });
        return {...item, Fields: options};
      }
      return item;
    });
    setCategoriesList(category);
    setIndexCategory(null);
    setItemCategory(null);
    setOpenModal(!openModal);
  };

  const onFieldDelete = (item: CategoryType, i: number) => {
    const category = categoriesList.map((cat, i) => {
      if (item.Id == cat?.Id) {
        const options = item.Fields.filter((item, index) => index != i);
        return {...item, Fields: options};
      }
      return item;
    });
    setCategoriesList(category);
  };

  const handleOpenModal = (item: CategoryType) => {
    setItemCategory(item);
    let options = [];
    item.Fields.map((cat, index) => {
      let tempField = {
        label: cat.FieldName,
        value: cat.FieldName,
      };
      options.push(tempField);
    });
    setTitleFieldOptions(options);
    setTitleFieldModal(!openTitleFieldModel);
  };

  const renderFields = ({item, index}: renderPropType) => {
    return (
      <View key={index} style={styles.fieldsView}>
        <Text style={styles.categoryHead}>{item.CategoryName}</Text>
        <InputField
          title="Category Name"
          placeholder="Enter Category Name"
          value={item.CategoryName}
          onChangeText={e => handleChange('CategoryName', e, item)}
          textInputContainer={{width: '90%'}}
        />
        {/* <TouchableInput
          title="Deadline"
          placeholder="Select Deadline"
          value={
            taskDetail?.deadline && !isDate
              ? taskDetail?.deadline
              : formatDate
              ? formatDate
              : null
          }
          onPress={() => setOpen(true)}
        /> */}
        {item.Fields.map((field, i) => {
          return (
            <>
              <InputField
                title={field.FieldName !== '' ? field.FieldName : 'Field Name'}
                placeholder="Enter Field Name"
                value={field.FieldName}
                fieldType={field.FieldType}
                icon={true}
                onPress={() => onFieldDelete(item, i)}
                onFieldTypePress={() => {
                  setItemCategory(item);
                  setOpenModal(!openModal);
                  setIndexCategory(i);
                }}
                onChangeText={e => handleFieldsChange(e, item, i)}
              />
            </>
          );
        })}

        <ModalViewWrapper
          openModal={openModal}
          setOpenModal={setOpenModal}
          options={options}
          onItemSelect={select => onFieldTypePress(select)}
        />
        <GeneralButton
          text={`Title FIeld: ${item.TitleField}`}
          style={[styles.titleField]}
          textStyle={styles.btnText}
          onPress={() => handleOpenModal(item)}
        />
        <ModalViewWrapper
          openModal={openTitleFieldModel}
          setOpenModal={setTitleFieldModal}
          options={titleFieldOptions}
          onItemSelect={select => onTitleFieldPress(select)}
        />
        <View style={styles.flexRow}>
          <TouchablePicker
            options={options}
            mode={'dialog'}
            selectedValue={'Add New Field'}
            onValueChange={(itemValue, itemIndex) =>
              handleAddField(item, itemValue)
            }
            dropdownIconColor={Colors.PRIMARY_COLOR}
            style={styles.picker}
          />

          <TouchableOpacity
            style={[styles.flexRow, styles.touchable]}
            onPress={() => handleDeleteCategory(item)}>
            <Image
              source={icons.delete}
              style={styles.icon}
              resizeMode="contain"
            />
            <Text style={styles.removeText}>Remove</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const handleAddCategory = () => {
    let Category: CategoryType = {
      Id: categoriesList.length + 1,
      CategoryName: 'New Category',
      Fields: [
        {
          FieldName: '',
          FieldType: FieldTypes.TEXT,
        },
      ],
      TitleField: 'Unnamed Field',
    };
    setCategoriesList(prev => [...prev, Category]);
  };

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        style={styles.subContainer}
        enableOnAndroid={true}
        extraHeight={100}
        extraScrollHeight={100}
        showsVerticalScrollIndicator={false}>
        <FlatList
          data={categoriesList}
          keyExtractor={index => index?.toString()}
          ListEmptyComponent={renderEmptyComponent}
          renderItem={(item, index) => renderFields(item, index)}
        />
      </KeyboardAwareScrollView>
      <GeneralButton
        text={'Add Category'}
        style={[styles.btn]}
        textStyle={styles.btnText}
        onPress={handleAddCategory}
      />
      <DatePicker
        modal
        mode={'date'}
        open={open}
        date={date}
        minimumDate={new Date()}
        onConfirm={date => {
          setOpen(false);
          setIsDate(true);
          setDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </View>
  );
};

export default ManageCategoriesScreen;
