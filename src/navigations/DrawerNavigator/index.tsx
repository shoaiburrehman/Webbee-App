import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerContent from '../../components/DrawerComponents/DrawerContent';
import HomeStack from '../HomeStack/HomeStack';
import navigationOptions from '../NavigationOptions';
import NavigationRoutes from '../NavigationRoutes';
import ManageCategoriesStack from '../ManageCategoriesStack/ManageCategoriesStack';
import ManageCategoriesScreen from '../../screens/ManageCategoriesScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigator = props => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: 'slide',

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
      <Drawer.Screen
        name={NavigationRoutes.HOME_STACK}
        component={HomeStack}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name={NavigationRoutes.MANAGE_CATEGORY}
        component={ManageCategoriesScreen}
        options={navigationOptions}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
