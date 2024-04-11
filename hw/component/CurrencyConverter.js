import React, { useState } from 'react';
import {
  FlatList,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';


export const  Currency = [
    {
      name: 'DOLLAR',
      value: 0.012271428,
      flag: '🇺🇸',
      symbol: '$',
    },
    {
      name: 'EURO',
      value: 0.01125809,
      flag: '🇪🇺',
      symbol: '€',
    },
    {
      name: 'POUND',
      value: 0.0099194378,
      flag: '🇬🇧',
      symbol: '£',
    },
    {
      name: 'RUBEL',
      value: 0.85040469,
      flag: '🇷🇺',
      symbol: '₽',
    },
    {
      name: 'AUS DOLLAR',
      value: 0.01732574,
      flag: '🇦🇺',
      symbol: 'A$',
    },
    {
      name: 'CAN DOLLAR',
      value: 0.016457908,
      flag: '🇨🇦',
      symbol: 'C$',
    },
    {
      name: 'YEN',
      value: 1.5909089,
      flag: '🇯🇵',
      symbol: '¥',
    },
    {
      name: 'DINAR',
      value: 0.0037446993,
      flag: '🇰🇼',
      symbol: 'KD',
    },
    {
      name: 'BITCOIN',
      value: 0.000000543544886,
      flag: '🎰',
      symbol: '₿',
    },
  ];



//Constants

//Component
import CurrencyButton from './CurrencyButton.js';



const CurrencyConverter = () => {
	  const [inputValue, setInputValue] = useState('')
  const [resultValue, setResultValue] = useState('')
  const [targetCurrency, setTargetCurrency] = useState('')

 const buttonPressed = (targetValue) => {
    if (!inputValue) {
      console.log("invalid input")
    }  
     const inputAmount = parseFloat(inputValue)
    if (!isNaN(inputAmount)) {
      const convertedValue = inputAmount * targetValue.value
      const result = `${targetValue.symbol} ${convertedValue.toFixed(2)  }`
      setResultValue(result)
      setTargetCurrency(targetValue.name)
    } else {
      console.log("invalid nuber you are entering")
    }
  }


   return(
   	<>
   		   <>
      <StatusBar/>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.rupeesContainer}>
            <Text style={styles.rupee}>₹</Text>
            <TextInput
            maxLength={14}
            value={inputValue}//only for iOS
            onChangeText={setInputValue}
            keyboardType='number-pad'
            placeholder='Enter amount in Rupees'
            />
          </View>
          {resultValue && (
            <Text style={styles.resultTxt} >
              {resultValue}
            </Text>
          )}
        </View>
        <View style={styles.bottomContainer}>
          <FlatList
          numColumns={3}
          data={Currency}
          keyExtractor={item => item.name}
          renderItem={({item}) => (
            <Pressable
            style={[
              styles.button, 
              targetCurrency === item.name && styles.selected
            ]}
            onPress={() => buttonPressed(item)}
            >
              <View style={styles.buttonContainer}>
            <Text style={styles.flag}>{item.flag}</Text>
            <Text style={styles.country}>{item.name}</Text>
        </View>

         
            
            </Pressable>
          )}
          />
        </View>
      </View>
      
    </>
    </>
   	)
}


export default CurrencyConverter;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fefefe',
    width:"100%"
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  resultTxt: {
    fontSize: 32,
    color: '#000000',
    fontWeight: '800',
  },
  rupee: {
    marginRight: 8,

    fontSize: 22,
    color: '#000000',
    fontWeight: '800',
  },
  rupeesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputAmountField: {
    height: 40,
    width: 200,
    padding: 8,
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
  },
  bottomContainer: {
    flex: 3,
  },
  button: {
    flex: 1,

    margin: 12,
    height: 60,

    borderRadius: 12,
    backgroundColor: '#fff',
    elevation: 2,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  selected: {
    backgroundColor: '#ffeaa7',
  },
  buttonContainer : {
        alignItems: 'center'
    },
    flag: {
        fontSize: 28,
        color: "#FFFFFF",
        marginBottom: 4
    },
    country: {
        fontSize: 14,
        color: "#2d3436",
    
    }
});