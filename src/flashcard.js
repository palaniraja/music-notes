
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
  Switch
} from 'react-native';


const cheatImg = {name: "", image: require('./assets/cheat.png')};

export default class FlashCard extends Component {


  static navigationOptions = {
    title: "Flashcards ♪",
  };


  constructor(props) {
    super(props);
    this.state = {
      noteImages: [cheatImg],
      length: 0,
      timer: '',
      currentNote: cheatImg,
      cheat: 0,
      level: 1,
      levelCombined: true
    };
  }



  

  componentDidMount() {
    this.changeLevel();
  }



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


  changeLevel(newval){
    console.log('changeLevel :', newval);
    var notes = [];

    notes.push(cheatImg);

    var currentLevel = this.state.level;
    let levelCombined = this.state.levelCombined;

    if(newval){
      currentLevel = newval;
      this.setState({
        level: currentLevel
      });
    }


    if((currentLevel >=1 && levelCombined) || (currentLevel == 1 && !levelCombined)){

      notes.push({ name: 'c4', image: require('./assets/c4.png')}); 
      notes.push({ name: 'd4', image: require('./assets/d4.png')}); 
      notes.push({ name: 'e4', image: require('./assets/e4.png')}); 
      notes.push({ name: 'f4', image: require('./assets/f4.png')}); 
      notes.push({ name: 'g4', image: require('./assets/g4.png')}); 
      notes.push({ name: 'a4', image: require('./assets/a4.png')});
    }

    if((currentLevel >=2 && levelCombined) || (currentLevel == 2 && !levelCombined)){
        notes.push({ name: 'b4', image: require('./assets/b4.png')});
        notes.push({ name: 'c5', image: require('./assets/c5.png')}); 
        notes.push({ name: 'd5', image: require('./assets/d5.png')}); 
        notes.push({ name: 'e5', image: require('./assets/e5.png')}); 
        notes.push({ name: 'f5', image: require('./assets/f5.png')});    
      }

    if((currentLevel >=3 && levelCombined) || (currentLevel == 3 && !levelCombined)){
        notes.push({ name: 'g5', image: require('./assets/g5.png')});
        notes.push({ name: 'a5', image: require('./assets/c6.png')});
        notes.push({ name: 'b5', image: require('./assets/b5.png')});
        notes.push({ name: 'c6', image: require('./assets/c6.png')});
    }

    if((currentLevel >=4 && levelCombined) || (currentLevel == 4 && !levelCombined)){
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
        <View style={[styles.row, styles.levelSlider]}>
          <Text>Level {this.state.level} ({this.state.length}♪)</Text>
          <Slider style={styles.slider}
            minimumValue={1}
            maximumValue={4}
            step={1}
            onValueChange={this.changeLevel.bind(this)} />
          </View>
        <View style={[styles.row, styles.levelSlider]}>
          <Text>Combine Levels: </Text>
              <Switch
                onValueChange={(value) => this.setState({levelCombined: value})}
                value={this.state.levelCombined} />
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
      marginLeft: 10,
      marginRight: 10,
      flex:1
    },

    info:{
      fontSize: 14,
    },

    spacer:{
      flex: 1
    },

    row:{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },


    levelSlider:{
      padding: 5,
    }
    

});




