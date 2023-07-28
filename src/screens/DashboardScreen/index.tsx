import React, {useState, useCallback} from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  Switch,
  FlatList,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import DatePicker from 'react-native-date-picker';
import styles from './styles';
import {TouchableInput} from '../../components/TouchableInput';
import GeneralButton from '../../components/GeneralButton';
import InputField from '../../components/InputField';
import {icons} from '../../assets';
import {Colors} from '../../themes/Colors';
import {useTypedSelector} from '../../redux/useTypedSelected';
import {useFocusEffect} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {updateCategories} from '../../redux/reducers/categories.slice';
import {CategoryFieldType, CategoryType} from '../../models/categories.model';
import {FieldTypes} from '../../constants/categoriesConstants';
import dayjs from 'dayjs';
import {vh} from '../../themes/units';

type Props = {
  navigation: any;
  route: any;
};

const DashboardScreen = (props: Props) => {
  const dispatch = useDispatch();
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [itemCategory, setItemCategory] = useState<CategoryType | null>(null);
  const [indexField, setIndexField] = useState<number | null>(null);
  const [indexInput, setIndexPut] = useState<number | null>(null);
  const categories = useTypedSelector(state => state.categories.categories);
  const [categoriesList, setCategoriesList] = useState(categories);

  useFocusEffect(
    useCallback(() => {
      if (categories?.length != 0) {
        console.warn('UPDATE CATEGORIESLIST');
        setTimeout(() => setCategoriesList(categories), 1000);
      }
    }, [categories]),
  );

  // useEffect(() => {
  //   if (categoriesList.length > 0) {
  //     console.warn('UPDATE CATEGORY: ', categoriesList[0].Data);
  //     dispatch(updateCategories(categoriesList));
  //   }
  // }, [categoriesList]);

  const renderEmptyComponent = (text: string) => {
    return (
      <View style={styles.emptyView}>
        <Text style={styles.emptyText}>{text}</Text>
      </View>
    );
  };

  type renderPropType = {
    item: CategoryType;
    index: number;
  };

  const handleAddNewItem = (item: CategoryType) => {
    // const category = [...categoriesList];
    const category = categoriesList.map(cat => {
      if (cat.Id === item.Id) {
        const data = []; // Initialize the data array inside the map for each category
        cat.Fields.forEach(field => {
          let temp = {
            FieldName: field.FieldName,
            FieldType: field.FieldType,
            FieldValue: field.FieldType == FieldTypes.CHECKBOX ? false : '',
          };
          data.push(temp);
        });

        // if (cat.Data.length > 0) {
        cat = {
          ...cat,
          Data: [
            ...cat.Data,
            {
              item: data,
            },
          ],
        };
        // } else {
        //   cat.Data = [{item: data}]; // Reassign the Data property with the new item array for the first time
        // }
      }
      return cat;
    });
    setCategoriesList(category);
    dispatch(updateCategories(category));
  };

  const handleRemoveItem = (
    item: CategoryType,
    field: CategoryFieldType,
    i: number,
  ) => {
    const category = categoriesList.map((cat, ind) => {
      if (item.Id == cat?.Id) {
        const options = cat.Data.filter((_, index) => index != i);
        cat = {
          ...cat,
          Data: options,
        };
      }
      return cat;
    });
    setCategoriesList(category);
    dispatch(updateCategories(category));
  };

  const handleFieldsChange = (
    e: string,
    itemCat: CategoryType,
    i: number,
    indexField: number,
  ) => {
    const category = categoriesList.map((cat, inde) => {
      if (itemCat.Id == cat?.Id) {
        const cateField = cat.Data.map((field, index) => {
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
        cat = {
          ...cat,
          Data: cateField,
        };
      }
      return cat;
    });
    setCategoriesList(category);
    if (typeof e === 'boolean') {
      dispatch(updateCategories(category));
    }
  };

  const handleAddDate = (date: string) => {
    const category = categoriesList.map((cat, inde) => {
      if (itemCategory?.Id == cat?.Id) {
        const cateField = cat.Data.map((field, index) => {
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
        cat = {
          ...cat,
          Data: cateField,
        };
      }
      return cat;
    });
    setCategoriesList(category);
    dispatch(updateCategories(category));
    setItemCategory(null);
    setIndexPut(null);
    setIndexField(null);
    setOpen(false);
  };

  const handleOpenDateModal = (
    item: CategoryType,
    inputIndex: number,
    fieldIndex: number,
  ) => {
    setItemCategory(item);
    setIndexPut(inputIndex);
    setIndexField(fieldIndex);
    setOpen(true);
  };

  const handleOnBlurInput = (val: number | string) => {
    if (val !== '') {
      dispatch(updateCategories(categoriesList));
    }
  };

  const renderFields = ({item, index}: renderPropType) => {
    return (
      <View style={styles.fieldsView}>
        <View style={styles.flexRow}>
          <Text style={styles.categoryHead}>{item.CategoryName}</Text>
          <GeneralButton
            text={'Add New Item'}
            style={[styles.addNewItem]}
            textStyle={styles.addNewItemTxt}
            onPress={() => handleAddNewItem(item)}
          />
        </View>
        {item.Data.length > 0 ? (
          <>
            {item.Data.map((field, ind) => {
              return (
                <View style={{marginBottom: vh * 2}}>
                  {field?.item.map((input, i) => {
                    return (
                      <>
                        {input.FieldType === FieldTypes.CHECKBOX ? (
                          <View style={[styles.touchable, styles.switchView]}>
                            <Switch
                              trackColor={Colors.PRIMARY_COLOR}
                              thumbColor={Colors.WHITE}
                              ios_backgroundColor={Colors.PLACE_HOLDER}
                              onValueChange={() =>
                                handleFieldsChange(
                                  !input.FieldValue,
                                  item,
                                  i,
                                  ind,
                                )
                              }
                              value={input.FieldValue}
                            />
                            <Text style={styles.switchText}>
                              {input.FieldName}
                            </Text>
                          </View>
                        ) : input.FieldType === FieldTypes.DATE ? (
                          <>
                            <TouchableInput
                              title={input.FieldName}
                              placeholder={`Select ${input.FieldName}`}
                              value={input.FieldValue}
                              onPress={() => handleOpenDateModal(item, i, ind)}
                            />
                          </>
                        ) : (
                          <InputField
                            title={input.FieldName}
                            placeholder={`Enter ${input.FieldName}`}
                            keyboardType={
                              input.FieldType === FieldTypes.NUMBER
                                ? 'numeric'
                                : 'default'
                            }
                            value={input.FieldValue}
                            onBlur={() => handleOnBlurInput(input.FieldValue)}
                            onChangeText={e =>
                              handleFieldsChange(e, item, i, ind)
                            }
                          />
                        )}
                      </>
                    );
                  })}
                  {/* {ind > 0 && ( */}
                  <TouchableOpacity
                    style={styles.touchable}
                    onPress={() => handleRemoveItem(item, field, ind)}>
                    <Image
                      source={icons.delete}
                      style={styles.icon}
                      resizeMode="contain"
                    />
                    <Text style={styles.removeText}>Remove</Text>
                  </TouchableOpacity>
                  {/* )} */}
                </View>
              );
            })}
          </>
        ) : (
          <View style={styles.emptyCatView}>
            <Text style={styles.emptyText}>
              No Item Found in {item.CategoryName}
            </Text>
          </View>
        )}
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
      </View>
    );
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
          ListEmptyComponent={() =>
            renderEmptyComponent('No Categories Found on Dashboard')
          }
          renderItem={(item, index) => renderFields(item, index)}
        />
      </KeyboardAwareScrollView>
      <DatePicker
        modal
        mode={'date'}
        open={open}
        date={date}
        onConfirm={date => {
          setOpen(false);
          handleAddDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </View>
  );
};

export default DashboardScreen;
