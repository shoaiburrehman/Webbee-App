import React, {useState} from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import {styles} from './styles';
import {vw} from '../../themes/units';
import {icons} from '../../assets';

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
  fieldType?: string;
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
      <View style={[styles.flex, {width: props.icon ? '90%' : '100%'}]}>
        <TouchableOpacity
          style={[styles.textInputContainer, props?.textInputContainer]}
          activeOpacity={0.9}
          onPress={handleIconPress}>
          <Text
            style={[
              styles.textInput,
              {width: getInputWidth()},
              props?.textInputStyle,
            ]}>
            {props?.value ? props?.value : props?.placeholder}
          </Text>
          {props?.fieldType && (
            <TouchableOpacity style={styles.fieldTypeView} activeOpacity={0.8}>
              <Text style={styles.fieldType}>TEXT</Text>
            </TouchableOpacity>
          )}
        </TouchableOpacity>
        {props.icon && (
          <View style={styles.iconContainer}>
            <Image
              source={icons.delete}
              style={styles.icon}
              resizeMode="contain"
            />
          </View>
        )}
      </View>
    </View>
  );
};
