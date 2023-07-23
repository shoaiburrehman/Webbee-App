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
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleField: {
    marginVertical: vh * 2,
    width: vw * 85,
    height: vh * 6,
    borderRadius: vw * 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.PRIMARY_COLOR,
  },
  btn: {
    marginHorizontal: vw * 5,
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
  addNewField: {
    marginVertical: vh,
    paddingHorizontal: vw * 5,
    height: vh * 6,
    borderRadius: vw * 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Colors.PRIMARY_COLOR,
    borderWidth: 1,
  },
  addNewFieldTxt: {
    ...Fonts.Regular(14, Colors.PRIMARY_COLOR),
    textAlign: 'center',
  },
  touchable: {
    marginLeft: vw * 4,
  },
  icon: {
    height: vh * 4,
    width: vw * 4,
    tintColor: Colors.PRIMARY_COLOR,
  },
  removeText: {
    marginLeft: vw * 2,
    ...Fonts.Regular(14, Colors.PRIMARY_COLOR),
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
