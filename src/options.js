
import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableHighlight
} from 'react-native';


export default class Options extends Component {

static navigationOptions = {
    title: "Options",
  };

  constructor(props) {
    super(props);

    this.state = {
      bpm: 60,
      level: 1,
      levelCombined: false,
    }
    
  }


  
  
  render() {

    return (

      <View style = {styles.container}>
        <Text>Options screen</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

    },

   

});




