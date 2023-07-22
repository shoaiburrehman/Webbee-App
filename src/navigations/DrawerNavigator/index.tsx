import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerContent from '../../components/DrawerComponents/DrawerContent';
import NotificationStack from '../NotificationStack';

const Drawer = createDrawerNavigator();

const DrawerNavigator = props => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: 'slide',
        headerShown: false,
        drawerStyle: {
          backgroundColor: 'transparent',
          width: '55%',
        },
        overlayColor: 'transparent',
        sceneContainerStyle: {
          backgroundColor: 'transparent',
        },
      }}
      drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="NotificationStack" component={NotificationStack} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
