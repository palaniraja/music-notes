
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



import MenuScreen from './src/menu'
import NoteScreen from './src/note'


// let codePushOptions = { checkFrequency: codePush.CheckFrequency.ON_APP_RESUME };










export default class HomeScreen extends Component {

  static navigationOptions = {
    title: "♬♪♫🎶🎵🎼",
  };
  

 componentDidMount() {

  // codePush.sync({installMode: 0});

   var updateDialogOptions = {
        updateTitle: "Update",
        optionalUpdateMessage: "New version of the app is available. Install?",
        optionalIgnoreButtonLabel: "Later",
        optionalInstallButtonLabel: "Yes",
    };

    codePush.sync({ updateDialog: updateDialogOptions});
 }

  render() {
    return (
      <View>
        <Text></Text>
        <Text> Release 18 - Test in 4.4</Text>
      </View>
    );
  }
}


const App = StackNavigator({
  Menu: { screen: MenuScreen },
  Note: { screen: NoteScreen },
});

// AppRegistry.registerComponent('mnotes', () => codePush(codePushOptions)(App));
AppRegistry.registerComponent('mnotes', () => HomeScreen);