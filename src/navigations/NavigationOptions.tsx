import React from 'react';
import {Image, TouchableOpacity, Text, View} from 'react-native';
import styles from './styles';
import {icons} from '../assets/index';
import {vh, vw} from '../themes/units';
import {Colors} from '../themes/Colors';

const navigationOptions = navProps => {
  return {
    headerTitle: () => getTitle(navProps),
    headerLeft: () => renderHeaderLeft(navProps),
    headerBackVisible: false,
    headerTitleAlign: 'center',
    headerLeftContainerStyle: {paddingLeft: 4 * vw},
    headerRightContainerStyle: {paddingRight: 4 * vw},
    headerStyle: getHeaderStyle(navProps),
  };
};

const getHeaderStyle = props => {
  return {
    shadowColor: 'transparent',
    backgroundColor: Colors.PLACE_HOLDER,
    height: 15 * vh,
    maxHeight: 20 * vh,
    borderBottomLeftRadius: 8 * vw,
    borderBottomRightRadius: 8 * vw,
  };
};

const getTitle = props => {
  return (
    <View style={styles.logoView}>
      <Text style={styles.titleTextStyle}>{props?.route?.name}</Text>
    </View>
  );
};

export const drawerRoutes = {
  HomeStack: {
    label: 'Home',
  },
};

const renderHeaderLeft = props => {
  if (props?.route?.name == 'Home') {
    return (
      <TouchableOpacity
        onPress={() => props?.navigation.toggleDrawer()}
        style={styles.textButton}>
        <Image source={icons.drawer} style={styles.searchIconStyle} />
      </TouchableOpacity>
    );
  }
};

export default navigationOptions;
