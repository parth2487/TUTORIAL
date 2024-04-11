import React from 'react'
import {useState} from 'react'
import {View,Text,Image,ImageBackground,ScrollView,Button,Pressable,Modal,StatusBar,ActivityIndicator,Alert,StyleSheet } from 'react-native'
export default function StyleApi()
{
	return(

			<View style={style.container}>
			<Text>Hello  </Text>
		</View>
		)
}
const style=StyleSheet.create({
	container:{width:200,height:200,backgroundColor:"red"}
}
	)