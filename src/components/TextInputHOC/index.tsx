import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

import {InputProps} from './types';
import {AppStyles, Colors} from '../../themes';

const TextInputHOC = (props: InputProps) => {
  const {style, placeholder, inputRef, ...rest} = props;

  return (
    <TextInput
      ref={inputRef}
      style={[styles.input, style]}
      selectionColor={Colors.Colors.PINK}
      {...(!!placeholder && {
        placeholderTextColor: Colors.Colors.STEEL,
        placeholder,
      })}
      {...rest}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    ...AppStyles.inputControl,
  },
});

export default TextInputHOC;
