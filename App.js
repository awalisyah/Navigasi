import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Button} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { StackNavigator } from 'react-navigation';

import Login from './Components/Login';
import Judul from './Components/Judul';

const AppNavigator = createStackNavigator ({
  Login : Login,
  Judul : Judul,

});

export default class App extends Component<Props> {
  render() {
    return (
        <AppNavigator/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    //'#f87d42'
  }
});