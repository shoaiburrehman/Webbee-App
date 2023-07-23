import {StyleSheet} from 'react-native';
import {vh, vw} from '../../themes/units';
import {Fonts} from '../../themes';
import {APP_SHADOW, Colors} from '../../themes/Colors';

const styles = StyleSheet.create({
  container: {
    marginVertical: vh * 1.5,
  },
  titleText: {
    ...Fonts.Regular(14, Colors.BLACK),
    // fontSize: vw * 4,
    marginLeft: vw * 4,
    marginBottom: vh * 1,
  },
  flex: {
    flexDirection: 'row',
  },
  textInputContainer: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: vw * 2,
    justifyContent: 'center',
    paddingHorizontal: vw * 4,
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
    paddingHorizontal: vw,
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
    // backgroundColor: 'red',
  },
  pickerContainer: {
    alignItems: 'flex-end',
    alignSelf: 'flex-end',
    borderColor: 'transparent',
    width: vw * 40,
  },
  picker: {
    width: '100%',
    color: Colors.PRIMARY_COLOR,
  },
});

export default styles;
