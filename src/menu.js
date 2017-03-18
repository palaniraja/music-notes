
import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableHighlight
} from 'react-native';


import codePush from "react-native-code-push";


var appVer = "v0.2";
var buildVer = "2017.03.18";

// ♬♪♫🎶🎵🎼

export default class Menu extends Component {

static navigationOptions = {
    title: "Let's read Music ♪",
  };

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        {
          title: 'Note to play',
          rowId: 0
        }
        ,{
          title: 'Flash cards',
          rowId: 1
        } 
        // ,{
        //   title: 'Options',
        //   rowId: 2
        // } 
      ])
    };
  }


 componentDidMount(){
    var updateDialogOptions = {
          updateTitle: "Update",
          optionalUpdateMessage: "New version of the app is available. Install?",
          optionalIgnoreButtonLabel: "Later",
          optionalInstallButtonLabel: "Yes",
        };

          codePush.sync({ updateDialog: updateDialogOptions});
      }

_pressRow(rowId){
  console.log('rowId: ', rowId);

  const { navigate } = this.props.navigation;

  if(rowId == 0){
      navigate('Note', { data: '' });
  }
  else if(rowId == 1){
    navigate('Flashcard', { data: '' });
  }
  else if(rowId == 2){
    navigate('Options', { data: '' });
  }
}
  
  
  render() {

    return (

      <View style = {styles.container}>
      <ListView
          style = {styles.menuList}
          dataSource={this.state.dataSource}
          renderRow={(rowData) => {
            return (
              <TouchableHighlight onPress={() => {
                    this._pressRow(rowData.rowId);
                  }}>
              <View>
                <View style={styles.row}>
                  <Text style={styles.text}>
                    {rowData.title}
                  </Text>
                </View>
              </View>
            </TouchableHighlight>

              )
          }
        }
        />
        <Text style={styles.version}>{appVer} ({buildVer})</Text>
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

    menuList:{
      padding: 20,
    },
    
     row: {
      // flexDirection: 'row',
      justifyContent: 'center',
      padding: 10,
      backgroundColor: '#F6F6F6',
      margin: 4,
    },


    thumb: {
      width: 64,
      height: 64,
    },

    text: {
      flex: 1,
    },

    version:{
      fontSize: 10,
      color: 'gray',
      padding:6,
    }

});




