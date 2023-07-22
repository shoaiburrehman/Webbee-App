import {StyleSheet} from 'react-native';
import {vh, vw} from '../../themes/units';
import {Fonts} from '../../themes';
import {Colors} from '../../themes/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  subContainer: {
    flex: 1,
  },
  btn: {
    marginVertical: vh * 4,
    width: vw * 80,
    height: vh * 8,
    borderRadius: vw * 2,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: colors.themeColor
  },
  btnText: {
    ...Fonts.Regular(14, Colors.WHITE),
    textAlign: 'center',
  },
  fieldsView: {
    marginHorizontal: vw * 7,
    marginVertical: 3 * vh,
  },
  textInputStyle: {
    height: vh * 17,
  },
});

export default styles;
