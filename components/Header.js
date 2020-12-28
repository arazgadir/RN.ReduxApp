import React, {Component} from 'react';
import { TextInput, TouchableOpacity, View, Text } from 'react-native';
import {connect}  from  'react-redux'
import {adding, clear} from '../redux/action'
import {styles} from './HeaderStyles'



 class Header extends Component {
  constructor(props)  {
  super(props);
  }

  render() {
   return (

    <View style = {{backgroundColor: 'black'}}>

      <View  style={styles.nameStyle}>
         <Text style={styles.text} > Name: </Text>
          <TextInput 
             onChangeText={(text) => (this.name = text)}
              style={styles.textinput}
             placeholder = {'write name here'}
             placeholderTextColor="#666">
          </TextInput>
          
      </View>


      <View style={styles.nameStyle}>
          <Text style={styles.text} > Surname: </Text>
          <TextInput 
             onChangeText={(text) => (this.surname = text)}
             style={styles.textinput}
             placeholder = {'write surname here'}
             placeholderTextColor="#666">
          </TextInput>
      </View>


      <View style={styles.nameStyle}>
      <Text style={styles.text} > Number: </Text>
        <TextInput
            onChangeText={(text) => (this.number = text)}
            style={styles.textinput}
            placeholder={'write number here'}
            placeholderTextColor="#666">
        </TextInput>
         </View>


         <View style={styles.nameStyle}>
        <TouchableOpacity  style = {styles.click} onPress={() => this.props.add(this.name, this.surname, this.number)}>
           <Text>ADD TO LIST</Text>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.clear} onPress={() => this.props.clear()}>
           <Text>CLEAR</Text>
        </TouchableOpacity>
        </View>

    </View>


   )
    
  }

 }


function mapDispatchToProps(dispatch) {
  return {
    add: (name, surname, number) => dispatch(adding(name, surname, number)),
    
    clear: () => dispatch(clear()),
    dispatch,
  };
}
export default connect(null, mapDispatchToProps)(Header);
