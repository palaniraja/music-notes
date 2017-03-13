
import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableHighlight
} from 'react-native';




export default class Menu extends Component {


  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        'Note to play', 'Flash cards'
      ])
    };
  }


_pressRow(rowId){
  console.log('rowId: ', rowId);
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
                this._pressRow('rowID');
                // highlightRow(sectionID, rowID);
              }}>
              <View>
                <View style={styles.row}>
                  <Text style={styles.text}>
                    {rowData}
                  </Text>
                </View>
              </View>
            </TouchableHighlight>

              )
          }
        }
        />
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

});




