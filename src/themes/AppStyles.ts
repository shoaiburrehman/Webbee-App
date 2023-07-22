import Fonts from './Fonts';
import {Colors} from './Colors';
import {Platform} from 'react-native';
import {vh} from './units';

const appMainContainer = {
  backgroundColor: Colors.WHITE_TWO,
  flexGrow: 1,
};

const centerAlign = {
  justifyContent: 'center',
  alignItems: 'center',
};

const inputControl = {
  flex: 1,
  ...(Platform.OS === 'ios' && {height: vh * 10}),
  ...Fonts.Medium(16, Colors.CHARCOAL_GREY),
};

export {appMainContainer, inputControl, centerAlign};
