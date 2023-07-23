import {APP_PRIMARY_TEXT} from './Colors';
import {TextStyle} from 'react-native';
import {vw} from './units';
export default class Fonts {
  static FontFamily = {
    default: 'Ubuntu',
  };

  static Type = {
    Bold: 'Bold',
    BoldItalic: 'BoldItalic',
    Italic: 'Italic',
    Light: 'Light',
    LightItalic: 'LightItalic',
    Medium: 'Medium',
    Regular: 'Regular',
  };

  static Size = {
    xxxSmall: 11,
    xxSmall: 13,
    xSmall: 14,
    small: 15,
    normal: 16,
    medium: 19,
    large: 21,
    xLarge: 23,
    xxLarge: 28,
    xxxLarge: 31,
    huge: 34,
    xhuge: 37,
    xxhuge: 40,
    xxxhuge: 43,
  };

  static font = (
    type: string = Fonts.Type.Regular,
    size: number = Fonts.Size.normal,
    color: string = APP_PRIMARY_TEXT,
  ): TextStyle => {
    return {
      fontFamily: Fonts.FontFamily.default + '-' + type,
      fontSize: size,
      color,
    };
  };

  // Fonts;
  static Regular = (
    size: number = Fonts.Size.normal,
    color = APP_PRIMARY_TEXT,
  ) => {
    return Fonts.font(Fonts.Type.Regular, size, color);
  };
  static Bold = (
    size: number = Fonts.Size.normal,
    color = APP_PRIMARY_TEXT,
  ) => {
    return Fonts.font(Fonts.Type.Bold, size, color);
  };
  static m = (size: number = Fonts.Size.normal, color = APP_PRIMARY_TEXT) => {
    return Fonts.font(Fonts.Type.Medium, size, color);
  };
  static Light = (
    size: number = Fonts.Size.normal,
    color = APP_PRIMARY_TEXT,
  ) => {
    return Fonts.font(Fonts.Type.Light, size, color);
  };

  static Medium = (
    size: number = Fonts.Size.normal,
    color = APP_PRIMARY_TEXT,
  ) => {
    return Fonts.font(Fonts.Type.Medium, size, color);
  };
}
