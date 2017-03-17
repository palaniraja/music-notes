
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
  Picker,
  Slider,
} from 'react-native';


const cheatImg = {name: "", image: require('./assets/cheat.png')};

export default class FlashCard extends Component {


  static navigationOptions = {
    title: "FlashCard",
  };


  constructor(props) {
    super(props);
    this.state = {
      noteImages: [cheatImg],
      length: 0,
      timer: '',
      currentNote: cheatImg,
      cheat: 0,
      level: 1
    };
  }



  

  componentDidMount() {
    this.changeLevel();
    // this.nextCard();
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


  changeLevel(){
    console.log('changeLevel');

/*

{ name: '', image: require('./assets/cheat.png')}

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
{ name: 'a5', image: require('./assets/c6.png')}, 
{ name: 'b5', image: require('./assets/b5.png')}
{ name: 'c6', image: require('./assets/c6.png')}

{ name: 'd4', image: require('./assets/d3.png')}, 
{ name: 'b3', image: require('./assets/b3.png')},
{ name: 'a3', image: require('./assets/a3.png')},
{ name: 'g3', image: require('./assets/g3.png')},
*/
    var notes = [];

    notes.push(cheatImg);

    let currentLevel = this.state.level;


    if(currentLevel <=1){

      notes.push({ name: 'c4', image: require('./assets/c4.png')}); 
      notes.push({ name: 'd4', image: require('./assets/d4.png')}); 
      notes.push({ name: 'e4', image: require('./assets/e4.png')}); 
      notes.push({ name: 'f4', image: require('./assets/f4.png')}); 
      notes.push({ name: 'g4', image: require('./assets/g4.png')}); 
      notes.push({ name: 'a4', image: require('./assets/a4.png')});
      // notes.concat([]);
    }

    if( (currentLevel > 1) && (currentLevel <=2)){
        notes.push({ name: 'b4', image: require('./assets/b4.png')});
        notes.push({ name: 'c5', image: require('./assets/c5.png')}); 
        notes.push({ name: 'd5', image: require('./assets/d5.png')}); 
        notes.push({ name: 'e5', image: require('./assets/e5.png')}); 
        notes.push({ name: 'f5', image: require('./assets/f5.png')});    
      }

    if((currentLevel > 2) && (currentLevel <=3)){
        notes.push({ name: 'g5', image: require('./assets/g5.png')});
        notes.push({ name: 'a5', image: require('./assets/c6.png')});
        notes.push({ name: 'b5', image: require('./assets/b5.png')});
        notes.push({ name: 'c6', image: require('./assets/c6.png')});
    }

    if((currentLevel > 2) && (currentLevel <=4)){
        notes.push({ name: 'd4', image: require('./assets/d4.png')});
        notes.push({ name: 'b3', image: require('./assets/b3.png')});
        notes.push({ name: 'a3', image: require('./assets/a3.png')});
        notes.push({ name: 'g3', image: require('./assets/g3.png')});
    }


    console.log(notes);

    this.setState({
      noteImages: notes,
      length: notes.length
    }, function(){
      this.nextCard();
    });


  }
  

  // <View>
  //       <Picker>
  //                 <Picker.Item label="Level 0" value="0" />
  //                 <Picker.Item label="Level 1" value="1" />
  //               </Picker>
  //               </View>


                  // selectedValue={this.state.level}
                  // onValueChange={(lang) => {
                  //   this.changeLevel.bind(this);
                  // }}

  render() {
    return (
      <View style = {styles.container}>
        <View style = {styles.container}>
        <TouchableHighlight 
                  underlayColor = "transparent"
                  activeOpacity = {0.7}
                  onPress={() => {
                    this.nextCard();
                  }}>
          <Image style={styles.cardImage} source={this.state.currentNote.image} />
          </TouchableHighlight>
          <Text style={[styles.info, {'opacity': (this.state.cheat)?1:0}]}>{this.state.currentNote.name}</Text>
        </View>
        <View style={styles.row}>
        <Slider style={styles.slider}
          minimumValue={1}
          maximumValue={4}
          step={1}
          onValueChange={(value) => {
            this.setState({level: value});
            this.changeLevel.bind(this);
          }
        } />
          <Text>Level {this.state.level} len: {this.state.length}</Text>
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
      width: 240,
      height: 390,
    },

    slider: {
      height: 10,
      margin: 10,
      width: 250,
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




