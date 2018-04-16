/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import Navigation from './src/config/routes';
// import Opportunities from './src/views/Opportunities.js';

export default class App extends Component<Props> {
  render() {
    return <Navigation />;
  }
}
