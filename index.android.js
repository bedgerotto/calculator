import React, { Component } from 'react';
import {AppRegistry, View} from 'react-native';

import App from './src/App';

const Calculator = (props) => <App/>

AppRegistry.registerComponent('Calculator', () => Calculator);
