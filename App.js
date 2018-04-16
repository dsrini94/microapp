/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import Navigation from './src/config/routes.js';

export default class App extends Component<Props> {

  render() {
    return (
      <Navigation />
    );
  }
}
