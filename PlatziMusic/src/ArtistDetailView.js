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

import ArtistBox from './ArtistBox';
import { getArtists } from './api-client'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class ArtistDetailView extends Component<Props> {

  render() {

    const artist = this.props.artist

    return (
      
      <View style={styles.container}>
      <ArtistBox artist={artist}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //flexDirection: 'row',
    //flexDirection: 'column',
    //justifyContent: 'space-around',
    //justifyContent: 'space-between',
    //justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: 'lightgray',
    paddingTop: 50,
    //flexWrap: 'wrap',
  },

});
