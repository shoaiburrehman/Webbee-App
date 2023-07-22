import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import DrawerNavigator from '../DrawerNavigator';
import NavigationRoutes from '../NavigationRoutes';

const RootStack = createStackNavigator();

const MainNavigator = () => {
  return (
    <RootStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={NavigationRoutes.DRAWER_STACK}>
      <RootStack.Screen
        name={NavigationRoutes.DRAWER_STACK}
        component={DrawerNavigator}
        options={{headerShown: false}}
      />
    </RootStack.Navigator>
  );
};

export default MainNavigator;
