import React,{useState} from 'react';
import { View,FlatList, Text,Pressable, StyleSheet, Image, ScrollView,StatusBar, SafeAreaView ,TextInput,TouchableOpacity} from 'react-native';




const TicTacToe=()=>{
	const [winner, setWinner] = useState('')
	const [time, setTime] = useState('O')
	const [currency, setCurrency] = useState([
    { sign: "---", key: 1 },
    { sign: '---', key: 2 },
    { sign: '---', key: 3 },
    { sign: '---', key: 4 },
    { sign: '---', key: 5 },
    { sign: '---', key: 6 },
    { sign: '---', key: 7 },
    { sign: '---', key: 8 },
    { sign: '---', key: 9 },
  ]);
	
function ResetItems()
{
	 let  updatedCurrency = currency.map(item => {
     
        return { ...item, sign: "---" }; // Update the sign for the pressed button
     
    });
	  setCurrency(updatedCurrency);
	 setTime('O')
}

  function checkWinner(){
    
    if(currency[0].sign == currency[1].sign && currency[0].sign==currency[2].sign && currency[1].sign==currency[2].sign)
    {
    	setWinner(`Winner is ${currency[0].sign}`)
    }else{
    	setWinner('')
    }

 if(currency[3].sign == currency[4].sign && currency[3].sign==currency[5].sign && currency[5].sign==currency[4].sign)
    {
    	setWinner(`Winner is ${currency[3].sign}`)
    }else{
    	setWinner('')
    }
     if(currency[6].sign == currency[7].sign && currency[6].sign==currency[8].sign && currency[7].sign==currency[8].sign)
    {
    	setWinner(`Winner is ${currency[7].sign}`)
    }else{
    	setWinner('')
    }

    //like wise tese all test cases
  }


	function buttonPressed(key)
	{   
		
  if(time=='O'){
  let  updatedCurrency = currency.map(item => {
      if (item.key === key) {
        return { ...item, sign: "O" }; // Update the sign for the pressed button
      } else {
        return item;
      }
    });
  setTime('X')
    setCurrency(updatedCurrency);
  }
if(time=='X'){
  let  updatedCurrency = currency.map(item => {
      if (item.key === key) {
        return { ...item, sign: "X" }; // Update the sign for the pressed button
      } else {
        return item;
      }
    });
  setTime('O')
    setCurrency(updatedCurrency);
  }



	}
return(
  	<>
      <StatusBar/>
      <View style={styles.container}>
        
        <View style={styles.bottomContainer}>
          <FlatList
          numColumns={3}
          data={currency}
          
          renderItem={({item}) => (
            <Pressable
            style={[
              styles.button, 
       
            ]}
            onPress={() => buttonPressed(item.key)}
            >
              <View style={styles.buttonContainer}>
            <Text style={styles.flag}>{item.sign}</Text>
          
        </View>

         
            
            </Pressable>
          )}
          />
        </View>
        <Text>{winner}</Text>
         <Pressable
            style={[
              styles.button, 
            
            ]}
            onPress={() => ResetItems()}
            >
            <Text>Reset</Text>
             </Pressable>
           <Pressable
            style={[
              styles.button, 
            
            ]}
            onPress={() => checkWinner()}
            >
            <Text>checkWinner</Text>
             </Pressable>
      </View>
      
          
    </>
	)
}

export default TicTacToe



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
        color: "black",
        marginBottom: 4,

    },
    country: {
        fontSize: 14,
        color: "#2d3436",
    
    }
});