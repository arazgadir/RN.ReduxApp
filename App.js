import React, {Component} from 'react';
import {ScrollView, View} from 'react-native';
import Header from './components/Header';
import MainView from './components/MainView';

export default class App extends Component {
 render() {
    return (
           <View>
               <Header/>
               <ScrollView>
                  <MainView/>
               </ScrollView>
             </View>
           );

}

} 
