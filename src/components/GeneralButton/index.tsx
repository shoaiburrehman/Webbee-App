import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

type Props = {
  style: {};
  onPress?: () => void;
  textStyle: {};
  text: string;
};

const GeneralButton: React.FC<Props> = (props: Props) => {
  return (
    <TouchableOpacity
      style={props.style}
      onPress={props.onPress}
      activeOpacity={0.8}>
      <Text style={props.textStyle}>{props.text}</Text>
    </TouchableOpacity>
  );
};

export default GeneralButton;
