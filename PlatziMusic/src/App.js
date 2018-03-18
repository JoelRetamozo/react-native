/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  //Button,
  //Alert
} from 'react-native';

import {Scene, Router} from 'react-native-router-flux';

import HomeView from './HomeView'
import ArtistDetailView from './ArtistDetailView'

type Props = {};
export default class App extends Component<Props> {

  render() {
    const isAndroid = Platform.OS === 'android'

    return <Router>
      <Scene key="root">
        <Scene key="home" component={HomeView} hideNavBar/>
        <Scene key="artistDetail" component={ArtistDetailView} hideNavBar={isAndroid}/>
      </Scene>
    </Router>
  }
}


