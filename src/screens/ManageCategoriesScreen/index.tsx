import React, {useEffect, useState, useRef, useLayoutEffect} from 'react';
import {View, Image, Text} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import DatePicker from 'react-native-date-picker';
import dayjs from 'dayjs';
import styles from './styles';
import {TouchableInput} from '../../components/TouchableInput';
import GeneralButton from '../../components/GeneralButton';
import InputField from '../../components/InputField';

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
        <InputField
          title="Title"
          placeholder="Enter Title"
          value={title}
          onChangeText={setTitle}
        />
        {taskDetail && (
          <TouchableInput
            title="Status"
            placeholder="Select Status"
            value={status ? status : 'Select Status'}
            onPress={() => setStatusRef?.current.show()}
          />
        )}
        <TouchableInput
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
        />
        <InputField
          title="Description"
          placeholder="Enter Description"
          multiline={true}
          textAlignVertical="top"
          textInputStyle={styles.textInputStyle}
          value={description}
          onChangeText={setDescription}
        />

        <GeneralButton
          text={taskDetail ? 'Edit Task' : 'Add Task'}
          style={[styles.btn]}
          textStyle={styles.btnText}
          // onPress={handleCreate}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        style={styles.subContainer}
        showsVerticalScrollIndicator={false}>
        {renderFields()}
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

export default ManageCategoriesScreen;
