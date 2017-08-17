/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Route from './src/Component/Route';
import store from './src/store/index';
import { Provider } from 'react-redux'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class PatientTracker extends Component {
  render() {
    return (
       <Provider store={store}>
          <Route/> 
       </Provider>
    );
  }
}
AppRegistry.registerComponent('PatientTracker', () => PatientTracker);
