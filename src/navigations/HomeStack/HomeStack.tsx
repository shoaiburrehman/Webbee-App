import React, {useRef} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../../screens/HomeScreen';
import NavigationRoutes from '../NavigationRoutes';
import navigationOptions from '../NavigationOptions';

const Stack = createStackNavigator();

const HomeStack: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        animation: 'slide_from_right',
      }}
      initialRouteName={NavigationRoutes.HOME_STACK}>
      <Stack.Screen
        name={NavigationRoutes.HOME}
        component={Home}
        options={navigationOptions}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
