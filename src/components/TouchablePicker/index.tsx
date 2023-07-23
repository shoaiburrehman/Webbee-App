import React from 'react';
import {StyleSheet, TextInput, View, ViewStyle} from 'react-native';
import {Picker, PickerProps} from '@react-native-picker/picker';
import {Colors} from '../../themes/Colors';
import {vh, vw} from '../../themes/units';

type PickerTypes = PickerProps & {
  options: {
    label: string;
    value: string | null;
  }[];
  container: ViewStyle;
};

const TouchablePicker = (props: PickerTypes) => {
  const {style, placeholder, ...rest} = props;

  return (
    <View style={[styles.container, props?.container]}>
      <Picker
        mode={props?.mode}
        selectedValue={props?.selectedValue}
        onValueChange={(itemValue, itemIndex) =>
          props?.onValueChange(itemValue, itemIndex)
        }
        dropdownIconColor={props?.dropdownIconColor}
        style={styles.picker}>
        {props?.options?.map((item, index) => (
          <Picker.Item label={item.label} value={item.value} />
        ))}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: vw * 50,
    marginVertical: vh,
    height: vh * 6,
    borderRadius: vw * 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Colors.PRIMARY_COLOR,
    borderWidth: 1,
  },
  picker: {
    width: '100%',
    paddingLeft: 10,
    borderWidth: 5,
    borderRadius: 10,
    color: Colors.PRIMARY_COLOR,
  },
});

export default TouchablePicker;
