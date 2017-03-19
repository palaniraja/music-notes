
import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native';

import {
  StackNavigator,
} from 'react-navigation';





import MenuScreen from './src/menu';
import NoteScreen from './src/note';
import FlashCardScreen from './src/flashcard';
import OptionsScreen from './src/options';


var navOptions = {
    header: {
            style: {
                backgroundColor: '#0294cb', 
            },
            titleStyle:{
                color: 'white',
            },
            tintColor: 'white',
    }
  };


const App = StackNavigator({
  Menu: { screen: MenuScreen },
  Note: { screen: NoteScreen },
  Flashcard: { screen: FlashCardScreen },
  Options: { screen: OptionsScreen },
}, {navigationOptions: navOptions});

AppRegistry.registerComponent('mnotes', () => App);
