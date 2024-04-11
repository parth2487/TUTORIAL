
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, SafeAreaView ,TextInput,TouchableOpacity} from 'react-native';
const RandomColor=()=>{
	const [random,setrandom]=useState("#ffffff")
	var color="#"
 var hash="1234567890ABCDEF"
	const generate=()=>{
		for(let i=0;i<6;i++)
		{
			color+=hash[Math.floor(Math.random()*16)]
		}
		setrandom(color)
	}
	return(
		<>

		<View style={[styles.container, {backgroundColor: random}] }>
		<TouchableOpacity onPress={generate}>
			<View style={styles.actionBtn}>
				<Text style={styles.actionBtnTxt}>Press Me</Text>
			</View>
		</TouchableOpacity>
		</View>
		</>

	)
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: "center",
    justifyContent: "center",
    width:"100%"
  },
  actionBtn: {
    borderRadius: 12,
    backgroundColor: "#6A1B4D",
    paddingVertical: 10,
    paddingHorizontal: 40
  },
  actionBtnTxt: {
    fontSize: 24,
    color: "#FFFFFF",
    textTransform: "uppercase"
  }
});

export default RandomColor