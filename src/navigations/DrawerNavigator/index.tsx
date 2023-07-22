import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerContent from '../../components/DrawerComponents/DrawerContent';
import HomeStack from '../HomeStack/HomeStack';
import navigationOptions from '../NavigationOptions';
import NavigationRoutes from '../NavigationRoutes';

const Drawer = createDrawerNavigator();

const DrawerNavigator = props => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: 'slide',
        headerShown: false,
        drawerStyle: {
          backgroundColor: 'transparent',
          width: '60%',
        },
        overlayColor: 'transparent',
        sceneContainerStyle: {
          backgroundColor: 'transparent',
        },
      }}
      drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name={NavigationRoutes.HOME_STACK} component={HomeStack} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
