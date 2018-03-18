/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  ListView,
  TouchableOpacity,
  //Button,
  //Alert
} from 'react-native';

import ArtistBox from './ArtistBox';
import  { Actions } from 'react-native-router-flux'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class ArtistList extends Component<Props> {

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds
    }
    
  }

  componentDidMount() {
    this.updateDataSource(this.props.artists)
  }

  componentWillReceiveProps(newProps){
    if(newProps.artists !== this.props.artists){
      this.updateDataSource(newProps.artists)
    }
  }

  updateDataSource = (data) => {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(data)
    })
  }

  handlePress(artist) {
    Actions.artistDetail({ artist: artist})
  }

  render() {

    //const : no cambia valor
    
    /*const image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCCBJiBtAc2yDhZpd7ukZIex68CMgRvQwhJzd4kenutq0hzCPt'
    const name = 'David Bowie'
    const likes = 200
    const comments = 140*/
    //let : si se puede cambiar el valor de la variable

    return (
      
      <ListView
      enableEmptySections={true}
        dataSource={this.state.dataSource}
        renderRow={(artist) => {
          return (
            <TouchableOpacity 
              onPress={() => this.handlePress(artist)}>
              <ArtistBox artist={artist}/> 
            </TouchableOpacity>
            )
          }}
      />
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
