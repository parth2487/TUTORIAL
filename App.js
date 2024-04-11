import React from 'react'
import {useState} from 'react'
import Greet from "./Components/Greet.js"
import Style from "./Components/StyleApi.js"
import {View,Text,Image,ImageBackground,ScrollView,Button,Pressable,Modal,StatusBar,ActivityIndicator,Alert } from 'react-native'
const logoImg=require("./assets/adaptive-icon.png")

export default function App()
{
   const [model,setmode]=useState(false)
  return <View style={{flex:1,backgroundColor:"plum",padding:60}}> 
 <View style={{width:200,height:200,backgroundColor:"blue",padding:60}}>
      <Text style={{fontSize:20,color:"red"}}>Parth</Text>
       <Image source={{uri:"https://picsum.photos/200/300/?blur"}} style={{width:100,height:100}}/>
    </View>
     <View style={{width:200,height:200,backgroundColor:"green"}}>
       {/*<Text style={{fontSize:20,color:"red"}}>Parth</Text>*/}
       {/* <Image source={logoImg} style={{width:100,height:100}}/>

     </View>
      <View style={{width:200,height:200,backgroundColor:"black"}}>
     
         <ImageBackground source={logoImg} style={{flex:1}}>
            <Text>
         <Text style={{fontSize:20,color:"red"}}>Parth</Text>Ranipa

         </Text>
         </ImageBackground>
      </View>*/}




{/*<ScrollView>

<Image source={logoImg} style={{width:300,height:300}}/>
<Text style={{fontSize:20,color:"red"}}>“Health” in terms of definitions for humans means a state of the body that is totally free from any illness or injury. Being healthy should be a part of our lifestyle as a whole. Good health and a happy mind are priceless possessions that one can have. If one is healthy, he or she can always work on getting wealth, however, wealth without good health is useless.

Going on a daily walk, pursuing a hobby, staying fit, eating well can be various ways to maintain your health. It is necessary to live a healthy life to prevent chronic diseases and short-term illnesses. It is also important to feel good about yourself and take care of your health for enhanced self-esteem and self-image. Good health brings us joy, happiness and gratefulness. Adopting a healthy lifestyle by doing what is right for your body hence becomes really important for us at a young age.</Text>
    <Image source={logoImg} style={{width:300,height:300}}/>
</ScrollView>*/}
{/*<Pressable onPress={()=>console.log("uduifsud")}>
<Image source={logoImg} style={{width:300,height:300}}/>
</Pressable>*/}

<Button title="press" onPress={()=>setmode(true)}  />

{/*--------------------------------------------------------------------*/}

{/*<Modal
 visible={model}
 {/*animationType="slide"  none->bydefault  ,fade*/}
 {/*onRequestClose={()=>setmode(false)}*/}
 {/*presentationStyle="formSheet"   fullScreen->bydefault   ,   pageSheet*/}
{/*>*/}
{/*<Text>Hello world</Text>
  <Button title="press" onPress={()=>setmode(false)} />*/}

{/*</Modal>*/}

{/*---------------------------------------------------------------------*/}
{/*<ActivityIndicator/> 

<ActivityIndicator size="large" color="green" animating={true}/>*/}

{/*<StatusBar backgroundColor="green" barStyle="dark-content" hidden/>*/}

{/*--------------------------------------------------------------------------------*/}

{/*<Button title="press" onPress={Alert.alert("yesss.......!!!!!")}  />
*/}

{/*<Button title="press  2" onPress={Alert.alert("yesss.......!!!!!","Good bye")}  />

<Button title="press  3" onPress={Alert.alert("yesss.......!!!!!","Good bye",[
  {
    text:"Cancel",
    onPress:()=>console.log("cancel")
  },{
    text:"Ok",
    onPress:()=>console.log("Ok is pressed")
  }
])}  />*/}

<Greet name="parth"/>

<Greet name="Ranipa"/>

<Style/>
 </View>
}