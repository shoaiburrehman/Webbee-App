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
import NavigationRoutes from '../../navigations/NavigationRoutes';
import {
  _handleAddCategoryFunc,
  _handleAddDateFunc,
  _handleDeleteCategoryFunc,
  _handleFieldChange,
} from '../../Utils/categoryUtils';

type Props = {
  navigation: any;
  route: any;
};

const DashboardScreen = (props: Props) => {
  const dispatch = useDispatch();
  const catItem: CategoryType = props?.route.params?.item;
  const [date, setDate] = useState<Date>(new Date());
  const [open, setOpen] = useState<boolean>(false);
  const [itemCategory, setItemCategory] = useState<CategoryType | null>(null);
  const [indexField, setIndexField] = useState<number | null>(null);
  const [indexInput, setIndexPut] = useState<number | null>(null);
  const categories = useTypedSelector(state => state.categories.categories);
  const [categoriesList, setCategoriesList] =
    useState<CategoryType[]>(categories);
  const [CategoryItem, setCategoryItem] = useState<CategoryType>(catItem);

  useFocusEffect(
    useCallback(() => {
      if (categories) {
        setTimeout(() => setCategoriesList(categories), 1000);
      }
    }, [categories]),
  );

  useFocusEffect(
    useCallback(() => {
      setCategoryItem(catItem);
    }, [catItem]),
  );

  const navigateToCategories = () => {
    props?.navigation.navigate(NavigationRoutes.MANAGE_CATEGORY);
  };

  const renderEmptyComponent = (text: string) => {
    return (
      <View style={styles.emptyView}>
        <Text style={styles.emptyText}>{text}</Text>
        <GeneralButton
          text={'Add Categories'}
          style={[styles.addCategories]}
          textStyle={styles.addNewItemTxt}
          onPress={navigateToCategories}
        />
      </View>
    );
  };

  type renderPropType = {
    item: CategoryType;
    index: number;
  };

  const handleAddNewItem = (item: CategoryType) => {
    if (CategoryItem) {
      let category = item;
      category = _handleAddCategoryFunc(category);
      setCategoryItem(category);
    }
    const category = categoriesList.map(cat => {
      if (cat.Id === item.Id) {
        cat = _handleAddCategoryFunc(cat);
      }
      return cat;
    });
    setCategoriesList(category);
    dispatch(updateCategories(category));
  };

  const handleRemoveItem = (item: CategoryType, i: number) => {
    if (CategoryItem) {
      let category = item;
      category = _handleDeleteCategoryFunc(category, i);
      setCategoryItem(category);
    }

    const category = categoriesList.map((cat, ind) => {
      if (item.Id == cat?.Id) {
        cat = _handleDeleteCategoryFunc(cat, i);
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
    if (CategoryItem) {
      let category = itemCat;
      category = _handleFieldChange(category, e, indexField, i);
      setCategoryItem(category);
    }

    const category = categoriesList.map((cat, inde) => {
      if (itemCat.Id == cat?.Id) {
        cat = _handleFieldChange(cat, e, indexField, i);
      }
      return cat;
    });
    setCategoriesList(category);
    if (typeof e === 'boolean') {
      dispatch(updateCategories(category));
    }
  };

  const handleAddDate = (date: string) => {
    if (CategoryItem) {
      let category = CategoryItem;
      category = _handleAddDateFunc(category, indexField, indexInput, date);
      setCategoryItem(category);
    }

    const category = categoriesList.map((cat, inde) => {
      if (itemCategory?.Id == cat?.Id) {
        cat = _handleAddDateFunc(cat, indexField, indexInput, date);
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
      <View style={styles.fieldsView} key={index}>
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
                <View style={{marginBottom: vh * 2}} key={ind}>
                  {field?.item.map((input, i) => {
                    return (
                      <>
                        {input?.FieldType === FieldTypes.CHECKBOX ? (
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
                        ) : input?.FieldType === FieldTypes.DATE ? (
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
                    onPress={() => handleRemoveItem(item, ind)}>
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
        {CategoryItem ? (
          <View style={styles.itemContainer}>
            {renderFields({item: CategoryItem, index: 0})}
          </View>
        ) : (
          <FlatList
            data={categoriesList}
            keyExtractor={item => item.Id?.toString()}
            ListEmptyComponent={() =>
              renderEmptyComponent('No Categories Found on Dashboard')
            }
            renderItem={(item, index) => renderFields(item, index)}
          />
        )}
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
