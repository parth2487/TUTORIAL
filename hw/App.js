import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button,Image,ScrollView,Pressable,Alert,ActivityIndicator } from 'react-native';
const logoImg=require("./assets/adaptive-icon.png")
import Box from "./component/Box.js"
import Dark from "./component/Dark.js"
import React, { useState } from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

import Password from './component/Password.js'
import TicTacToe from './component/TicTacToe.js'
import TabNavigation from './component/TabNavigation.js'
import RollDice from './component/RollDice.js'
import RandomColor from './component/RandomColor.js'
import Card_two_button from './component/Card_two_button.js';
import CurrencyConverter from './component/CurrencyConverter.js'
export default function App() {

    const [contacts, setContacts] = useState([
    { id: 1, name: 'John Doe', phone: '123-456-7890' },
    { id: 2, name: 'Jane Smith', phone: '456-789-0123' },
    // Add more contacts as needed
  ]);

const handlePressContact = (contact) => {
    // Handle contact press
    console.log('Contact pressed:', contact);
  };


  return (
   
<NavigationContainer>
  <Stack.Navigator initialRouteName="Roll">
      <Stack.Screen name="Tic" component={TicTacToe} options={
        {title:"Wellcome to TicTacToe",
        headerStyle:{
          backgroundColor:"#6a51ae"
        },
        headerTintColor:"#fff",
        headerTitleStyle:{fontWeight:"bold"},
        headerRight:()=>{
            <Pressable onPress={()=> alert("Menu button is pressed")}>
              <Text style={{color:"#fff",fontSize:16}}>Menu</Text>
            </Pressable>
          
        },
        contentStyle:{
        backgroundColor:"#e8e4f3"
      },
      }


      }/>
      <Stack.Screen name="Roll" component={TabNavigation} options={
        {title:"Wellcome to TabNavigation",
        headerStyle:{
          backgroundColor:"#6a51ae"
        }}

      }/>
     
    </Stack.Navigator>
</NavigationContainer>
  );


}

const styles = StyleSheet.create({
  container: {
    flex:1,
    
alignItems:"baseline",

    marginTop:64,
    borderWidth:6,
    borderColor:"red"
  },
  lighblue:{
    backgroundColor:"blue",
    width:100,
    padding:32,
    height:100,
    paddingHorizontal:10,
    paddingVertical:20,
    marginVertical:10,
    borderWidth:2,
    borderColor:"purple",
    
  },
  lightgreen:{
    backgroundColor:"green",
    width:100,
    height:100,
    padding:10,
    shadowColor:"blue",
    elevation:10
  }

});
