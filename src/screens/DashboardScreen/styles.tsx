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
  itemContainer: {
    width: '88%',
  },
  emptyView: {
    height: vh * 82,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    ...Fonts.Regular(14),
  },
  emptyCatView: {
    height: vh * 15,
    width: vw * 82,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: vh,
    width: '100%',
  },
  categoryHead: {
    ...Fonts.Medium(20),
  },
  addCategories: {
    paddingHorizontal: vw * 5,
    height: vh * 5,
    borderRadius: vw * 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.PRIMARY_COLOR,
    marginTop: vh * 2,
  },
  addNewItem: {
    paddingHorizontal: vw * 5,
    height: vh * 5,
    borderRadius: vw * 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.PRIMARY_COLOR,
  },
  addNewItemTxt: {
    ...Fonts.Regular(14, Colors.WHITE),
    textAlign: 'center',
  },
  switchText: {
    marginLeft: vw * 2,
  },
  switchView: {
    marginVertical: vh,
  },
  touchable: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: vw,
    marginTop: vh,
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
