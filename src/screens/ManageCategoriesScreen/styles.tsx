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
    marginVertical: vh * 2,
    width: vw * 90,
    height: vh * 6,
    borderRadius: vw * 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.PRIMARY_COLOR,
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
