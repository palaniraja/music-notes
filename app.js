
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

import codePush from "react-native-code-push";



import MenuScreen from './src/menu';
import NoteScreen from './src/note';
import FlashCardScreen from './src/flashcard';



const App = StackNavigator({
  Menu: { screen: MenuScreen },
  Note: { screen: NoteScreen },
  Flashcard: { screen: FlashCardScreen },
});

AppRegistry.registerComponent('mnotes', () => codePush(App));
