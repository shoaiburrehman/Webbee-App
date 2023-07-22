import React, {useState} from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import {styles} from './styles';
import {vw} from '../../themes/units';

type Props = {
  onPress: () => void;
  style?: object;
  title?: string;
  titleTextStyle?: object;
  notRequired?: boolean;
  textInputContainer?: object;
  textInputStyle?: object;
  value?: string;
  placeholder?: string;
  icon?: any;
};

export const TouchableInput = (props: Props) => {
  const handleIconPress = () => {
    if (props?.onPress) {
      props.onPress();
    }
  };

  const getInputWidth = () => {
    let width = vw * 72;
    return width;
  };

  return (
    <View style={[styles.container, props?.style]}>
      {props?.title && (
        <Text style={[styles.titleText, props.titleTextStyle]}>
          {props?.title}
        </Text>
      )}
      <TouchableOpacity
        style={[styles.textInputContainer, props?.textInputContainer]}
        onPress={handleIconPress}>
        <Text
          style={[
            styles.textInput,
            {width: getInputWidth()},
            props?.textInputStyle,
          ]}>
          {props?.value ? props?.value : props?.placeholder}
        </Text>

        {props.icon && (
          <View style={styles.iconContainer}>
            <Image
              source={props.icon}
              style={styles.icon}
              resizeMode="contain"
            />
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};
