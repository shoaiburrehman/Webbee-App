import React, {useEffect, useState, useRef, useLayoutEffect} from 'react';
import {View, Image, Text, TouchableOpacity, Switch} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import DatePicker from 'react-native-date-picker';
import styles from './styles';
import {TouchableInput} from '../../components/TouchableInput';
import GeneralButton from '../../components/GeneralButton';
import InputField from '../../components/InputField';
import {icons} from '../../assets';
import {Colors} from '../../themes/Colors';

type Props = {
  navigation: any;
  route: any;
};

const DashboardScreen = (props: Props) => {
  const taskDetail = props?.route?.params?.taskDetail;
  const [title, setTitle] = useState(taskDetail?.title || '');
  const [description, setDescription] = useState(taskDetail?.description || '');
  const [status, setStatus] = useState(taskDetail?.status || '');
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [switchValue, setSwitchValue] = useState<boolean>(false);
  const [isDate, setIsDate] = useState(false);
  const generalModalRef = useRef<any>();
  const setStatusRef = useRef<any>();

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
        <View style={styles.flexRow}>
          <Text style={styles.categoryHead}>New Category</Text>
          <GeneralButton
            text={'Add New Item'}
            style={[styles.addNewItem]}
            textStyle={styles.addNewItemTxt}
            // onPress={handleCreate}
          />
        </View>

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
        extraHeight={70}
        extraScrollHeight={70}
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

export default DashboardScreen;
