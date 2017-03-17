
import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableHighlight,
  Button
} from 'react-native';




export default class Note extends Component {


  static navigationOptions = {
    title: "Play Note ♪",
  };


  constructor(props) {
    super(props);
    const ds = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
    this.state = {
      notes: ds,
      length: ds.length,
      bpm: 60,
      ts: '4/4',
      currentNote: '',
      timer: ''
    };
  }



  

  componentDidMount() {
    this.updateNote();
  }


  componentWillUnmount(){
    console.log('timeout clear');
    clearTimeout(this.state.timer);
  }

  randomIndex(){
    return Math.floor(Math.random() * this.state.length);
  }

  randomNote(){
    return this.state.notes[this.randomIndex()];
  }

  updateNote(){
      

      var oldNote = this.state.currentNote;
      var newNote = this.randomNote();

      if(oldNote == newNote){
        newNote = this.randomNote();  //assuming this time it wont return the same :-)
      }


      this.setState({
        currentNote: newNote
      });

      var delay = (60*1000/this.state.bpm);
      console.log('delay: ', delay);
      let s = setTimeout(() => {this.updateNote()}, delay);
      this.setState({
        timer: s
      });

  }


decreaseBPM(){
  console.log(this.state.bpm);
  let newbpm = this.state.bpm-10;
  this.setState({
      bpm: newbpm
    });
}

increaseBPM(){
  console.log(this.state.bpm);
  let newbpm = this.state.bpm+10;
  this.setState({
      bpm: newbpm
    });
}

  
  render() {
    return (
      <View style = {styles.container}>
        <View style = {styles.container}><Text style={styles.note}>{this.state.currentNote}</Text></View>
        <View style={styles.statusbar}>
              <Text style={styles.info}>4/4</Text>
              <View style={styles.spacer} />
              <View style={styles.row}>
                  <Button title=" - " onPress={this.decreaseBPM.bind(this)} />
                  <Text style={styles.info}>{this.state.bpm} BPM</Text>
                  <Button title=" + " onPress={this.increaseBPM.bind(this)} />
              </View>
              </View>
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

    spacer:{
      flex: 1
    },

    row:{
      flexDirection: 'row',
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
      
    }

});




