/* @flow */
'use strict';

import React, {Component, Text, View, TouchableOpacity, Image, ScrollView ,ListView ,TouchableHighlight,StyleSheet} from 'react-native';
import controlPanel from './styles/controlPanel';
import Button from './Button';
import {Actions} from 'react-native-router-flux';

export default class ControlPanel extends Component {
      constructor(props) {
        super(props);

    var ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 != r2
    });
    this.state = {
      ds:this.props.ds,
      dataSource:ds,
    }

    }
  componentDidMount(){
    this.setState({
      dataSource:this.state.dataSource.cloneWithRows(this.state.ds),
    })

  }
pressRow(rowData){
    console.log(rowData);
    return;
    var newDs = [];
    newDs = this.state.ds.slice();
    newDs[0].Selection = newDs[0] == "AwayTeam" ? "HomeTeam" : "AwayTeam";
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(newDs)
    })

}
  renderRow(rowData){
    return (
        /*
      <TouchableHighlight
        onPress={()=> this.pressRow(rowData)}
        underlayColor = '#ddd'>
        <View style ={styles.row}>
          <Text style={[{fontSize:18},styles.text]}>{rowData.AwayTeam} @ {rowData.HomeTeam} </Text>
          <View style={{flex:1}}>
            <Text style={styles.selectionText}>{rowData[rowData.Selection]}</Text>
          </View>
        </View>
      </TouchableHighlight>*/
                    <View style={{position: 'relative'}}>
                        <TouchableOpacity 
                            style={controlPanel.link}
                            underlayColor="#2D2D30"
                            onPress={Actions[rowData.action]}>
                            <View>
                                <Text style={controlPanel.linkText}>{rowData.title}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

    )
  }
    render() {
        return (
            <View style={controlPanel.sidebar}>
                <ScrollView>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow = {this.renderRow.bind(this)}
                />

                    <View style={controlPanel.close}>
                    </View>
                    <Button
                        onPress={this.props.closeDrawer}
                        text="Close" />
                </ScrollView>
            </View>
        );
    }
    
}
var styles = StyleSheet.create({
  row:{
    flex:1,
    flexDirection:'row',
    padding:18,
    borderBottomWidth: 1,
    borderColor: '#d7d7d7',
  },
  text:{

    color:'white',
  },
  selectionText:{
    fontSize:15,
    paddingTop:3,
    //color:'#b5b5b5',
    color:'red',
    textAlign:'right'
  },
}); 