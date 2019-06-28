/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

// Libs
// import React, {Component} from 'react';
import React from 'react';
import { Component } from 'react';

// Components
import AppNavigator from './app/AppNavigator';

type Props = {};

export default class App extends Component<Props> {
  render() {
    return (
        <AppNavigator />
    );
  }
}
