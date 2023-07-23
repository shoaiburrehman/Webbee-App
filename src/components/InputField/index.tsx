import React from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import styles from './styles';
import {vw} from '../../themes/units';
import TextInputHOC from '../TextInputHOC';
import {icons} from '../../assets';

interface Props {
  style: {};
  onPress?: () => void;
  secureTextEntry: boolean;
  notRequired: boolean;
  title: string;
  titleTextStyle: {};
  textInputContainer: {};
  textInputStyle: {};
  icon: any;
  fieldType: 'string';
  placeholder: string;
}

const InputField = React.forwardRef((props: Props, ref: Ref) => {
  const handleIconPress = () => {
    if (props?.onPress) {
      props?.onPress();
    }
  };

  const getInputWidth = () => {
    let width = vw * 72;

    if (props?.fieldType) {
      width -= vw * 20;
    }

    return width;
  };

  return (
    <View style={[styles.container, props?.style]}>
      {props?.title && (
        <Text style={[styles.titleText, props.titleTextStyle]}>
          {props?.title}
        </Text>
      )}
      <View
        style={[
          styles.flex,
          {width: props.icon ? '82%' : props?.fieldType ? '90%' : '100%'},
        ]}>
        <View style={[styles.textInputContainer, props?.textInputContainer]}>
          <TextInputHOC
            ref={ref}
            {...props}
            style={[
              styles.textInput,
              {width: getInputWidth()},
              props?.textInputStyle,
            ]}
          />
          {props?.fieldType && (
            <TouchableOpacity style={styles.fieldTypeView} activeOpacity={0.8}>
              <Text style={styles.fieldType}>TEXT</Text>
            </TouchableOpacity>
          )}
        </View>
        {props.icon && (
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={handleIconPress}
            activeOpacity={0.8}>
            <Image
              source={icons.delete}
              style={styles.icon}
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
});

export default InputField;
