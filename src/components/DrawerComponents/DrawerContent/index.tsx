import React from 'react';
import styles from './styles';
import DrawerButton from '../DrawerButton';
import {View} from 'react-native';
import {drawerRoutes} from '../../../navigations/NavigationOptions';

const routeOrders = [
  'HomeStack',
  'BookStack',
  'ServicesStack',
  'DumpRequestStack',
  'PaymentStack',
  'AboutStack',
  'TermsStack',
  'ContactStack',
  'ProfileStack',
  'ChatStack',
];

const DrawerContent = props => {
  const handleOnDrawerItemPress = routeName => {
    if (drawerRoutes[routeName]) {
      if (drawerRoutes[routeName].notRoute != true) {
        return props.navigation.navigate(routeName);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.routeContainer}>
        {routeOrders.map((item, index) => {
          return (
            <DrawerButton
              index={index}
              onPress={handleOnDrawerItemPress}
              routeName={item}
            />
          );
        })}
      </View>
    </View>
  );
};
export default DrawerContent;
