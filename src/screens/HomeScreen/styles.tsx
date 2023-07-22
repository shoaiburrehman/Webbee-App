import {
  StyleSheet,
} from 'react-native';
import { colors } from '../../Utils/theme';
import { fontSizes, vh, vw } from '../../Utils/units';

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
      fontSize: fontSizes.f14,
      textAlign: "center",
      color: colors.white,
  },
  fieldsView:{
    marginHorizontal: vw * 7,
    marginVertical: 3 * vh
  },
  textInputStyle: {
    height: vh * 17,
  },
});

export default styles;
