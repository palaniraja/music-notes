
import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableHighlight,
  Button,
  Image,
} from 'react-native';




export default class FlashCard extends Component {


  static navigationOptions = {
    title: "FlashCard",
  };


  constructor(props) {
    super(props);
    const ds = [
      { name: '', image: require('./assets/cheat.png')}, 
      { name: 'c4', image: require('./assets/c4.png')}, 
      { name: 'd4', image: require('./assets/d4.png')}, 
      { name: 'e4', image: require('./assets/e4.png')}, 
      { name: 'f4', image: require('./assets/f4.png')}, 
      { name: 'g4', image: require('./assets/g4.png')}, 
      { name: 'a4', image: require('./assets/a4.png')}, 
      { name: 'b4', image: require('./assets/b4.png')},
      { name: 'c5', image: require('./assets/c5.png')}, 
      { name: 'd5', image: require('./assets/d5.png')}, 
      { name: 'e5', image: require('./assets/e5.png')}, 
      { name: 'f5', image: require('./assets/f5.png')}, 
      { name: 'g5', image: require('./assets/g5.png')}, 
      { name: 'a5', image: require('./assets/a5.png')}, 
      { name: 'b5', image: require('./assets/b5.png')}
    ];
    this.state = {
      noteImages: ds,
      length: ds.length,
      timer: '',
      currentNote: ds[0],
      cheat: 0
    };
  }



  

  componentDidMount() {
    this.nextCard();
  }


  // componentWillUnmount(){
  //   console.log('timeout clear');
  //   clearTimeout(this.state.timer);
  // }

  randomIndex(){
    let idx = Math.floor(Math.random() * (this.state.length-1));
    return (idx + 1);
  }

  randomNoteImage(){
    return this.state.noteImages[this.randomIndex()];
  }

  nextCard(){
      

      var oldNote = this.state.currentNote;
      var newNote = this.randomNoteImage();

      if(oldNote == newNote){
        newNote = this.randomNoteImage();
      }


      this.setState({
        currentNote: newNote
      });

      // var delay = (60*1000/this.state.bpm);
      // console.log('delay: ', delay);
      // let s = setTimeout(() => {this.updateNote()}, delay);
      // this.setState({
      //   timer: s
      // });

  }

  cheat(){
    this.setState({
        cheat: !this.state.cheat
      }, function(){

        if(this.state.cheat){
          this.setState({
            currentNote: this.state.noteImages[0]
          });
        }
        
      });
    
  }

  
  render() {
    return (
      <View style = {styles.container}>
        <View style = {styles.container}>
        <TouchableHighlight onPress={() => {
                    this.nextCard();
                  }}>
          <Image style={styles.cardImage} source={this.state.currentNote.image} />
          </TouchableHighlight>
          <Text style={[styles.info, {'opacity': (this.state.cheat)?1:0}]}>{this.state.currentNote.name}</Text>
        </View>
        <View style={styles.statusbar}>
              <View style={styles.spacer} />
              <View style={styles.row}>
                  <Button title="Cheat" onPress={this.cheat.bind(this)} />
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

    cardImage:{
      width: 220,
      height: 298,
    },

    info:{
      fontSize: 14,
    },

    spacer:{
      flex: 1
    },

    row:{
      flexDirection: 'row',
    },

    statusbar:{
      flexDirection: 'row',
    },
    

});




