import React from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import styles from './styles';
import {vw} from '../../themes/units';
import TextInputHOC from '../TextInputHOC';

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

    if (props.secureTextEntry) {
      width -= vw * 10;
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
      <View style={[styles.textInputContainer, props?.textInputContainer]}>
        <TextInputHOC
          {...props}
          ref={ref}
          style={[
            styles.textInput,
            {width: getInputWidth()},
            props?.textInputStyle,
          ]}
        />

        {props.icon && (
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={handleIconPress}>
            <Image
              source={props.icon}
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
