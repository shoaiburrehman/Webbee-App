import {StyleSheet} from 'react-native';
import {vh, vw} from '../../../themes/units';
import {APP_PRIMARY_COLOR, Colors} from '../../../themes/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.PRIMARY_COLOR,
  },
  routeContainer: {
    marginTop: 8 * vh,
    marginLeft: vw * 10,
  },
  name: {
    fontSize: 2.3 * vh,
    color: APP_PRIMARY_COLOR,
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
    color: Colors.PLACE_HOLDER,
    marginLeft: 2 * vw,
  },

  logoutButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 3 * vh,
  },
});
export default styles;
