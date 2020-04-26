import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert
} from 'react-native';

export default class AddResource extends Component {

    state = {
      resName: '',
      resType   : '',
      resCount: '',
    }
  

  onClickListener = (viewId) => {
    Alert.alert("Sucess !! \u2611", "Resources added ");
  }

  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.header}>
              You can Help
        </Text>
        <Text style={{fontSize: 24,color: 'black',marginLeft:15,}}>Here's How </Text>
      <Text style={styles.text}>
            Add anything you have and be a <Text style={{fontSize: 24,color: '#16a085'}}>saathi</Text> to those in  need....
        </Text>  
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Enter Resource Name"
              keyboardType="resType-address"
              underlineColorAndroid='transparent'
              onChangeText={(resName) => this.setState({resName})}/>
        </View>

        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Enter Resource Type"
              underlineColorAndroid='transparent'
              onChangeText={(resType) => this.setState({resType})}/>
        </View>
        
        <View style={styles.inputContainer}>

          <TextInput style={styles.inputs}
              placeholder="Enter Resource Quantity"
              underlineColorAndroid='transparent'
              onChangeText={(resCount) => this.setState({resCount})}/>
        </View>
        <View style={styles.inputContainer}>

          <TextInput style={styles.inputs}
              placeholder="Enter Description"
              underlineColorAndroid='transparent'
              onChangeText={(resCount) => this.setState({resCount})}/>
        </View>

        <TouchableHighlight style={[styles.buttonContainer, styles.addButton]} onPress={() => this.onClickListener('add')}>
          <Text style={styles.addText}>Add</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fffff',
  },
  text:{
    fontStyle:'Roboto',
    fontSize:20,
    marginLeft:20,
    marginBottom:20,
    marginTop:5,
  },
  inputContainer: {
      borderBottomColor: '#16a085',
      backgroundColor: '#ffff',
      borderTopColor:'#16a085',
      borderBottomWidth: 2,
      borderTopWidth:1,
      borderLeftWidth:1,
      borderRightWidth:1,
      borderColor:"#16a085",
      borderStyle:'solid',
      width:250,
      height:45,
      marginLeft:50,
      marginTop:10,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center',
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    marginLeft:55,
    borderRadius:30,
  },
  header:{
    fontStyle:'Roboto',
    fontSize:30,
    textAlign:'center',
    backgroundColor: "#16a085",
    borderRadius:20,
    padding:10,
    paddingStart:50,
    paddingEnd:50,
    resizeMode:'contain',
    marginBottom:10,
    marginHorizontal:20,
    marginTop:5,
    },
  addButton: {
    backgroundColor: "#16a085",
  },
  addText: {
    color: 'white',
  }
});
 