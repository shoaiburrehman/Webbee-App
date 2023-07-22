import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigator from './MainStack';

const Navigation = () => {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
};

export default Navigation;
