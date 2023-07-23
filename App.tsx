/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './src/redux/store';
import Navigations from './src/navigations/index';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <View style={styles.container}>
          <StatusBar
            translucent={true}
            backgroundColor="transparent"
            barStyle="light-content"
          />
          <Navigations />
        </View>
      </PersistGate>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
