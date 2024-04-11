import React from 'react'
import {useState} from 'react'
import {View,Text,Image,ImageBackground,ScrollView,Button,Pressable,Modal,StatusBar,ActivityIndicator,Alert } from 'react-native'
export default function Greet({name})
{

	return (

		<View>
			<Text>Hello  {name} </Text>
		</View>

		)

}