import {StyleSheet} from 'react-native';
import {Fonts} from '../../themes';
import {APP_SHADOW, Colors} from '../../themes/Colors';
import {vh, vw} from '../../themes/units';

export const styles = StyleSheet.create({
  container: {
    marginVertical: vh * 1.5,
  },
  titleText: {
    ...Fonts.Regular(12, Colors.WHITE),
    marginLeft: vw * 4,
    marginBottom: vh * 1,
  },
  textInputContainer: {
    marginTop: 2,
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: vw * 2,
    justifyContent: 'center',
    paddingHorizontal: vw * 4,
    height: vh * 7,
    backgroundColor: Colors.WHITE,
    ...APP_SHADOW,
  },

  iconContainer: {
    height: vh * 5,
    width: vw * 5,
    marginLeft: vw * 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    height: vh * 4,
    width: vw * 4,
  },
  textInput: {
    ...Fonts.Regular(12, Colors.PLACE_HOLDER),
    marginTop: vw,
  },
});
