import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import DrawerNavigator from '../DrawerNavigator';

const RootStack = createStackNavigator();

const MainNavigator = () => {
  return (
    <RootStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={'DrawerNavigator'}>
      <RootStack.Screen
        name="DrawerNavigator"
        component={DrawerNavigator}
        options={{headerShown: false}}
      />
    </RootStack.Navigator>
  );
};

export default MainNavigator;
