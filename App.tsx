/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import HomeScreen from './src/HomeScreen/HomeScreen';
import { Provider } from 'react-redux';
import { store } from './src/redux/store/store';

export default function App() {
  return (
    <Provider store={store}>
      <HomeScreen/>
    </Provider>
  );
}
