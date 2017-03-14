
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


let codePushOptions = { checkFrequency: codePush.CheckFrequency.ON_APP_RESUME };


// codePush.sync({installMode: InstallMode.ON_NEXT_RESUME});


var updateDialogOptions = {
        updateTitle: "You have an update",
        optionalUpdateMessage: "Update available. Install?",
        optionalIgnoreButtonLabel: "Nop",
        optionalInstallButtonLabel: "Yep",
    };

    codePush.sync({ updateDialog: updateDialogOptions});




const App = StackNavigator({
  Menu: { screen: MenuScreen },
  Note: { screen: NoteScreen },
});

AppRegistry.registerComponent('mnotes', () => codePush(codePushOptions)(App));