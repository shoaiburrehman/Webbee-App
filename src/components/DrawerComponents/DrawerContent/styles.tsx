import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/theme';
import {vh, vw} from '../../../utils/units';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: colors.white,
  },
  routeContainer: {
    marginTop: 3 * vh,
    marginLeft: vw * 10,
  },
  name: {
    fontSize: 2.3 * vh,
    color: colors.defaultHeaderColor,
    marginLeft: 5 * vw,
    width: vw * 30,
  },
  profileView: {
    height: vh * 6,
    width: vh * 6,
    borderRadius: (vh * 6) / 2,
    overflow: 'hidden',
  },
  profileImage: {
    height: '100%',
    width: '100%',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: vh * 9,
    marginBottom: 2 * vh,
    marginLeft: 8 * vw,
  },

  drawerButtonIconStyle: {
    resizeMode: 'contain',
    height: 4 * vh,
    width: 4 * vw,
  },

  label: {
    fontSize: 2 * vh,
    color: colors.defaultPlaceHolder,
    marginLeft: 2 * vw,
  },

  logoutButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 3 * vh,
  },
});
export default styles;
