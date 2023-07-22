import {StyleSheet} from 'react-native';
import fonts from '../../Assets/fonts';
import {appShadow, colors} from '../../Utils/theme';
import {fontSizes, vh, vw} from '../../Utils/units';

const styles = StyleSheet.create({
  container: {
    marginVertical: vh * 1.5,
  },
  titleText: {
    fontSize: fontSizes.f14,
    // fontSize: vw * 4,
    marginLeft: vw * 4,
    color: colors.black,
    marginBottom: vh * 1,
  },
  textInputContainer: {
    marginTop: 2,
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: vw * 2,
    justifyContent: 'center',
    paddingHorizontal: vw * 4,
    backgroundColor: colors.white,
    ...appShadow
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
    fontSize: fontSizes.f12,
    color: colors.grayColor,
    fontWeight: fonts.Mont.Regular,
    marginTop: vw,
    // backgroundColor: 'red',
  },

  starStyle: {
    color: colors.lightRed,
  },
});

export default styles;