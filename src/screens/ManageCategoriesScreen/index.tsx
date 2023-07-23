import React, {useEffect, useState, useRef, useLayoutEffect} from 'react';
import {View, Image, Text, Platform, TouchableOpacity} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import DatePicker from 'react-native-date-picker';
import {Picker} from '@react-native-picker/picker';
import dayjs from 'dayjs';
import styles from './styles';
import TouchablePicker from '../../components/TouchablePicker';
import GeneralButton from '../../components/GeneralButton';
import InputField from '../../components/InputField';
import {Colors} from '../../themes/Colors';
import {icons} from '../../assets';

type Props = {
  navigation: any;
  route: any;
};

const ManageCategoriesScreen = (props: Props) => {
  const taskDetail = props?.route?.params?.taskDetail;
  const [title, setTitle] = useState(taskDetail?.title || '');
  const [description, setDescription] = useState(taskDetail?.description || '');
  const [status, setStatus] = useState(taskDetail?.status || '');
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [isDate, setIsDate] = useState(false);
  const generalModalRef = useRef<any>();
  const setStatusRef = useRef<any>();
  let formatDate = dayjs(date).format('DD-MM-YYYY');
  const options = [
    {
      label: 'Add New Field',
      value: null,
    },
    {
      label: 'Text',
      value: 'Text',
    },
    {
      label: 'String',
      value: 'String',
    },
    {
      label: 'Checkbox',
      value: 'Checkbox',
    },
    {
      label: 'Number',
      value: 'Number',
    },
  ];
  const [selectedLanguage, setSelectedLanguage] = useState('Add New Field');

  const handleOnAccept = () => {
    if (taskDetail) {
      props.navigation.goBack();
    } else {
      setTitle('');
      setDescription('');
      props?.navigation.navigate('HomeNavigator');
    }
  };

  const renderFields = () => {
    return (
      <View style={styles.fieldsView}>
        <Text style={styles.categoryHead}>New Category</Text>
        <InputField
          title="Category Name"
          placeholder="Enter Category Name"
          value={title}
          textInputContainer={{width: '90%'}}
          onChangeText={setTitle}
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
        <InputField
          title="Field"
          placeholder="Enter Field"
          value={description}
          fieldType={'string'}
          icon={true}
          onChangeText={setDescription}
        />
        <GeneralButton
          text={'Title FIeld'}
          style={[styles.titleField]}
          textStyle={styles.btnText}
          // onPress={handleCreate}
        />
        <View style={styles.flexRow}>
          <TouchablePicker
            options={options}
            mode={'dialog'}
            selectedValue={'Add New Field'}
            onValueChange={(itemValue, itemIndex) => console.log(itemValue)}
            dropdownIconColor={Colors.PRIMARY_COLOR}
            style={styles.picker}
          />

          <TouchableOpacity
            style={[styles.flexRow, styles.touchable]}
            // onPress={handleIconPress}
          >
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

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        style={styles.subContainer}
        enableOnAndroid={true}
        extraHeight={100}
        extraScrollHeight={100}
        showsVerticalScrollIndicator={false}>
        {renderFields()}
      </KeyboardAwareScrollView>
      <GeneralButton
        text={'Add Category'}
        style={[styles.btn]}
        textStyle={styles.btnText}
        // onPress={handleCreate}
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
