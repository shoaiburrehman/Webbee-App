import React, {useRef} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import NavigationRoutes from '../NavigationRoutes';
import navigationOptions from '../NavigationOptions';
import ManageCategoriesScreen from '../../screens/ManageCategoriesScreen';

const Stack = createStackNavigator();

const ManageCategoriesStack: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        animation: 'slide_from_right',
      }}>
      <Stack.Screen
        name={NavigationRoutes.MANAGE_CATEGORY}
        component={ManageCategoriesScreen}
        options={navigationOptions}
      />
    </Stack.Navigator>
  );
};

export default ManageCategoriesStack;
