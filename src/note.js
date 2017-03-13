
import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableHighlight
} from 'react-native';




export default class Note extends Component {


  constructor(props) {
    super(props);
    const ds = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
    this.state = {
      notes: ds,
      length: ds.length,
      bpm: 120,
      ts: '4/4',
      currentNote: ''
    };
  }

  

  componentDidMount() {
    this.updateNote();
  }


updateNote(){
    let idx = Math.floor(Math.random() * this.state.length);
    this.setState({
      currentNote: this.state.notes[idx]
    });

    
    setTimeout(() => {this.updateNote()}, (60*1000/this.state.bpm));

}


_pressRow(rowId){
  console.log('rowId: ', rowId);
}
  
  
  render() {
    return (
      <View style = {styles.container}>
        <View style = {styles.container}><Text style={styles.note}>{this.state.currentNote}</Text></View>
        <View style={styles.statusbar}><Text style={styles.info}>4/4</Text><Text style={styles.info}>120 BPM</Text></View>
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

    note:{
      padding: 20,
      fontSize: 80,
    },

    statusbar:{
      flexDirection: 'row',
    },
    
    info:{
      padding: 4,
      margin: 4,
      backgroundColor: 'lightblue',
      justifyContent: 'space-around',
    }

});




