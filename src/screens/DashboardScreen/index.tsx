import React, {
  useEffect,
  useState,
  useRef,
  useLayoutEffect,
  useCallback,
} from 'react';
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
import {CategoryType} from '../../models/categories.model';

type Props = {
  navigation: any;
  route: any;
};

const DashboardScreen = (props: Props) => {
  const taskDetail = props?.route?.params?.taskDetail;
  const dispatch = useDispatch();
  const [title, setTitle] = useState(taskDetail?.title || '');
  const [description, setDescription] = useState(taskDetail?.description || '');
  const [status, setStatus] = useState(taskDetail?.status || '');
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [switchValue, setSwitchValue] = useState<boolean>(false);
  const [isDate, setIsDate] = useState(false);

  const categories = useTypedSelector(state => state.categories.categories);
  const [categoriesList, setCategoriesList] = useState(categories);

  useFocusEffect(
    useCallback(() => {
      if (categories?.length != 0) {
        setCategoriesList(categories);
      }
    }, [categories]),
  );

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
    const category = [...categoriesList];
    category.forEach(cat => {
      const data = []; // Initialize the data array inside the forEach loop for each category

      cat.Fields.forEach(field => {
        let temp = {
          FieldName: field.FieldName,
          FieldType: field.FieldType,
          FieldValue: '',
        };
        data.push(temp);
      });

      cat.Data = [{item: data}]; // Reassign the Data property with the new item array
      console.log('cat: ', cat);
      return cat;
    });

    console.log(category);
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
                <>
                  <InputField
                    title="Title"
                    placeholder="Enter Title"
                    value={title}
                    onChangeText={setTitle}
                  />
                  <View style={[styles.touchable, styles.switchView]}>
                    <Switch
                      trackColor={Colors.PRIMARY_COLOR}
                      thumbColor={Colors.WHITE}
                      ios_backgroundColor={Colors.PLACE_HOLDER}
                      onValueChange={() => setSwitchValue(!switchValue)}
                      value={switchValue}
                    />
                    <Text style={styles.switchText}>Does it work</Text>
                  </View>
                  <TouchableOpacity
                    style={styles.touchable}
                    // onPress={handleIconPress}
                  >
                    <Image
                      source={icons.delete}
                      style={styles.icon}
                      resizeMode="contain"
                    />
                    <Text style={styles.removeText}>Remove</Text>
                  </TouchableOpacity>
                </>
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

  console.log('categoriesList: ', categoriesList);
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

export default DashboardScreen;
