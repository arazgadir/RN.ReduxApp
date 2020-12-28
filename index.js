/**
 * @format
 */
import {AppRegistry} from 'react-native';
import React from 'react';

import App from './App';
import {name as appName} from './app.json';
import { Provider } from 'react-redux';
import {myStore} from './redux/store';
const MyApp = () =>  (
  <Provider store = {myStore}>
    <App/>
  </Provider>
);




AppRegistry.registerComponent(appName, () => MyApp);
