import {useDrawerProgress} from '@react-navigation/drawer';
import React from 'react';
import {StyleSheet, TouchableOpacity, Image, Text} from 'react-native';
import {drawerRoutes} from '../../../navigations/NavigationOptions';
import {vh, vw} from '../../../themes/units';
import {Colors} from '../../../themes/Colors';

const DrawerButton = props => {
  const routeConfigs = drawerRoutes[props.routeName];
  return (
    <TouchableOpacity
      onPress={() => props.onPress(props.routeName)}
      style={styles.container}>
      <Text style={styles.label}>{routeConfigs.label}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 3 * vh,
  },
  icon: {
    tintColor: 'white',
    height: 2.2 * vh,
    width: 2.2 * vh,
    resizeMode: 'contain',
    marginHorizontal: 4 * vw,
  },
  label: {
    fontSize: 2 * vh,
    color: Colors.WHITE,
    marginLeft: 3.5 * vw,
  },

  drawerButtonIconStyle: {
    resizeMode: 'contain',
    height: 4 * vh,
    width: 4 * vw,
  },
});
export default DrawerButton;
