import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native'
import {connect} from 'react-redux';
import {styles} from './HeaderStyles'

class MainView extends Component {
  constructor(props){
    super(props);
  }
 
  componentDidMount = () => console.log(this.props.name);


  render() {
    return (

      
      <View >
           <ScrollView >
            
          {this.props.list.map(item => (
            
            <View>
              
                 <Text style = {styles.maintext}> Name: {item.name},  Surname: {item.surname},  Number: {item.number}</Text>
              
            </View>
            
            
          ))}
           
           </ScrollView>
          </View>
       
        
    )
  }
}

function mapStateToProps(state) {
  return{  list: state.list  };
}

 export default connect(mapStateToProps)(MainView);