import React,{useState} from 'react';
import { View, Text, StyleSheet, Image, ScrollView, SafeAreaView ,TextInput,TouchableOpacity} from 'react-native';
import * as Yup from 'yup'
import {Formik} from 'formik'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
const PasswordSchema=Yup.object().shape({
	passwordLength: Yup.number()
	.min(4,"minimum shoud be 4")
	.max(16,"maximum should be 16")
	.required('Length is required')
})

const Password = () => {
	const [password,setPassword]=useState('')
	const [isPassGenerated,setIsPassGenerated]=useState(false)
	const [lowerCase,setLowerCase]=useState(true)
	const [upperCase,setupperCase]=useState(false)
	const [numbers,useNumbers]=useState(false)
	const [symbols,useSymbols]=useState(false)


	const generatePasswordString=(passwordLength)=>{
			let characterList=''
			const upperCaseChar="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
		    const lowerCaseChar="abcdefghijklmnopqrstuvwxyz"
		    const digitChar="0123456789"
		    const specialChar="!@#$%^^&*()"
		    if(upperCase)
		    {
		    	characterList+=upperCaseChar;
		    }
		     if(lowerCase)
		    {
		    	characterList+=lowerCaseChar;
		    }	
		    if(numbers)
		    {
		    	characterList+=digitChar;
		    }
		    if(symbols)
		    {
		    	characterList+=specialChar;
		    }		    

		    const passwordResult=createPassword(characterList,passwordLength)
		    setPassword(passwordResult)
		     setIsPassGenerated(true)
	}

	const createPassword=(character,passwordLength)=>{
		let result=""
		for (let i=0;i<passwordLength;i++)
		{
			const ch=Math.round(Math.random()*character.length);
			result+=character[ch];
		}
		return result;
	}
	const resetPasswordState=()=>{
			setPassword('')
			setIsPassGenerated(false)
setLowerCase(true)
setupperCase(false)
useNumbers(false)
useSymbols(false)
	}

return(
<ScrollView keyboardShouldPersistTaps="handled">
<SafeAreaView style={styles.appContainer}>
	<View style={styles.formContainer}>
		<Text style={styles.title}>Password Generator</Text>
		<Formik

       initialValues={{  passwordLength: '' }}
       	validationSchema={PasswordSchema}
       onSubmit={values=>{generatePasswordString(+values.passwordLength)}}

     >

       {({

         values,

         errors,

         touched,

         isValid,
         handleChange,

         handleSubmit,

         handleReset,

        

       }) => (
       	<>
       	<View style={styles.inputWrapper}>
       		 <View style={styles.inputColumn}>
       		 <Text style={styles.heading}>Password Length</Text> 
       		 {touched.passwordLength && errors.passwordLength && (
<Text style={styles.errorText}> {errors.passwordLength}</Text>
       		 	)}
       		 	 

       		 </View>
       		 <TextInput style={styles.inputStyle} value={values.passwordLength} onChangeText={handleChange('passwordLength')} placeholder=" Ex .8 " keyboardType="numeric"/> 
       		 
       	</View>
       	 <View style={styles.inputWrapper}>
          <Text style={styles.heading}>Include lowercase</Text>
          <BouncyCheckbox
          disableBuiltInState
          isChecked={lowerCase}
          onPress={() => setLowerCase(!lowerCase)}
          fillColor="#29AB87"
          />
         </View>
         <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include Uppercase letters</Text>
                  <BouncyCheckbox
                    disableBuiltInState
                    isChecked={upperCase}
                    onPress={() => setupperCase(!upperCase)}
                    fillColor="#FED85D"
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include Numbers</Text>
                  <BouncyCheckbox
                    disableBuiltInState
                    isChecked={numbers}
                    onPress={() => useNumbers(!numbers)}
                    fillColor="#C9A0DC"
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include Symbols</Text>
                  <BouncyCheckbox
                    disableBuiltInState
                    isChecked={symbols}
                    onPress={() => useSymbols(!symbols)}
                    fillColor="#FC80A5"
                  />
                </View>
     
<View style={styles.formActions}>

<TouchableOpacity  disabled={!isValid} style={styles.primaryBtn} onPress={handleSubmit}>
	<Text style={styles.primaryBtnTxt}>Generate Password</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.secondaryBtn} onPress={()=>{
	handleReset();
	resetPasswordState();
}}>
	<Text style={styles.secondaryBtnTxt}>Reset</Text>
</TouchableOpacity>

 </View>          
      	</>

       )}

     </Formik>
	</View>
	{isPassGenerated ? (
          <View style={[styles.card, styles.cardElevated]}>
            <Text style={styles.subTitle}>Result:</Text>
            <Text style={styles.description}>Long Press to copy</Text>
            <Text selectable={true} style={styles.generatedPassword}>{password}</Text>
          </View>
        ) : null}
</SafeAreaView>
</ScrollView>
	)


}

export default Password

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  formContainer: {
    margin: 8,
    padding: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    marginBottom: 15,
  },
  subTitle: {
    fontSize: 26,
    fontWeight: '600',
    marginBottom: 2,
  },
  description: {
    color: '#758283',
    marginBottom: 8,
  },
  heading: {
    fontSize: 15,
  },
  inputWrapper: {
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  inputColumn: {
    flexDirection: 'column',
  },
  inputStyle: {
    padding: 8,
    width: '60%',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#16213e',
  },
  errorText: {
    fontSize: 12,
    color: '#ff0d10',
  },
  formActions: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  primaryBtn: {
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: '#5DA3FA',
  },
  primaryBtnTxt: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
  },
  secondaryBtn: {
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: '#CAD5E2',
  },
  secondaryBtnTxt: {
    textAlign: 'center',
  },
  card: {
    padding: 12,
    borderRadius: 6,
    marginHorizontal: 12,
  },
  cardElevated: {
    backgroundColor: '#ffffff',
    elevation: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  generatedPassword: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 12,
    color:'#000'
  },
});