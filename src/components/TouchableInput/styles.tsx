import {StyleSheet} from 'react-native';
import {Fonts} from '../../themes';
import {APP_SHADOW, Colors} from '../../themes/Colors';
import {vh, vw} from '../../themes/units';

export const styles = StyleSheet.create({
  container: {
    marginVertical: vh * 1.5,
  },
  titleText: {
    ...Fonts.Regular(14, Colors.BLACK),
    marginLeft: vw * 4,
    marginBottom: vh * 1,
  },
  flex: {
    flexDirection: 'row',
  },
  textInputContainer: {
    width: '100%',
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
    marginTop: vh,
    width: vw * 20,
    marginLeft: vw * 4,
  },
  icon: {
    height: vh * 4,
    width: vw * 4,
    tintColor: Colors.PRIMARY_COLOR,
  },
  fieldTypeView: {
    marginTop: vh * 2,
    width: vw * 12,
    alignItems: 'center',
    alignSelf: 'flex-start',
    justifyContent: 'center',
  },
  fieldType: {
    ...Fonts.Regular(Fonts.Size.small, Colors.PRIMARY_COLOR),
  },
  textInput: {
    ...Fonts.Regular(12, Colors.PLACE_HOLDER),
    marginTop: vw,
  },
});
