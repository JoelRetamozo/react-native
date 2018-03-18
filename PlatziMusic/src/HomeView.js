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

import ArtistList from './ArtistList';
import { getArtists } from './api-client'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class HomeView extends Component<Props> {

  state = {
    artists: []
  }

  componentDidMount(){
    getArtists()
      .then(data => this.setState({ artists: data }))
  }

  render() {

    const artists = this.state.artists
    /*const artist = {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCCBJiBtAc2yDhZpd7ukZIex68CMgRvQwhJzd4kenutq0hzCPt',
      name: 'David Bowie',
      likes: 200,
      comments: 140,
    }
    const artists = Array(100).fill(artist);
    */

    //const : no cambia valor
    
    /*const image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCCBJiBtAc2yDhZpd7ukZIex68CMgRvQwhJzd4kenutq0hzCPt'
    const name = 'David Bowie'
    const likes = 200
    const comments = 140*/
    //let : si se puede cambiar el valor de la variable

    return (
      
      <View style={styles.container}>
      <ArtistList artists={artists}/>
      </View>
      /*<ScrollView style={styles.container}>
      {
        Array(500).fill(artist).map(artist => {
          return <ArtistBox artist={artist}/>
        })
      }
      </ScrollView>*/
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
