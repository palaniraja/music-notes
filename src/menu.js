
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
var buildVer = "2017.03.20(36)";

// ♬♪♫🎶🎵🎼

export default class Menu extends Component {

static navigationOptions = {
    title: "Let's read Music ♪",
    header: {
            style: {
                backgroundColor: '#0294cb', 
            },
            titleStyle:{
                color: 'white',
            }
    }
  };

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        {
          rowId: 0,
          title: 'Note to play',
          desc: 'Random note to play for finger practise',
        }
        ,{
          rowId: 1,
          title: 'Flash cards',
          desc: 'Level based flash card',
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
              <View style={styles.item}>
                
                  <Text style={styles.title}>
                    {rowData.title}
                  </Text>
                  <Text style={styles.description}>
                    {rowData.desc}
                  </Text>
                
              </View>
            </TouchableHighlight>

              )
          }
        }
        />
        <View style={styles.footer}>
          <Text style={styles.version}>{appVer} ({buildVer})</Text>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    menuList:{
      padding: 5,
      backgroundColor: 'white',
      flex:1,
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
      // flex: 1,
    },

    title: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#444',
    },

    description: {
      fontSize: 13,
      color: '#999',
    },


    version:{
      fontSize: 10,
      color: 'gray',
      padding:6,
    },


    item: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#ddd',
  },

  footer:{
    backgroundColor: 'white',
    alignItems: 'center',
  }

});




