
import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableHighlight
} from 'react-native';



var appVer = "v0.1";
var buildVer = "2017.03.17";

// ♬♪♫🎶🎵🎼

export default class Menu extends Component {

static navigationOptions = {
    title: "♬♪",
  };

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        {
          title: 'Note to play',
          rowId: 0
        },
        {
          title: 'Flash cards',
          rowId: 1
        } 
      ])
    };
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




