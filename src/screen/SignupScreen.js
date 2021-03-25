import React, { useState, useEffect, useContext } from 'react'
import { StyleSheet,  View } from 'react-native'
import {Button,Text,Input} from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import Spacer from '../components/spacer';
import PrimaryInput from '../components/PrimaryInput';
import PrimaryButton from '../components/PrimaryButton';
import {Context as AuthContext} from '../context/AuthContext';
function SignupScreen({navigation}){
    const {state,signup} = useContext(AuthContext);
    const [form, setform] = useState({
        email:"",
        password:"",
    });
    const onSubmitFrom=()=>{
        console.log("the form has been submitted",form);
        signup({email:form.email,password:form.password});
    }
    // useEffect(() => {
    //     console.log("The form data is:",form);
        
    // }, [form])
    useEffect(() => {
       console.log("effect runs in signup",state);
       
    }, [state])
    
   
    return (
        <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>

            <Spacer>
            <Text h3>Sign up Screen</Text>
            </Spacer>
            <PrimaryInput name="email"  label="Email"  value={form.name} onChangeText={(text)=> setform({...form,email:text})} placeholder="Enter the email" />
            <Spacer/>
            <PrimaryInput name="password"  label="Password" value={form.password} onChangeText={(text)=> setform({...form,password:text})} placeholder="Enter the password" secureTextEntry={true} />

            {/* <Input secureTextEntry label="Password"  placeholder="Enter the email" /> */}
            <Spacer/>
            {state.errorMessage?<Text style={styles.error}>{state.errorMessage}</Text>:null}
            <Spacer>
            <PrimaryButton btnText="Submit"onPress={onSubmitFrom} />
            </Spacer>
        </View>
</SafeAreaView>
    )
}

export default SignupScreen
const styles = StyleSheet.create({
    container: {
        borderWidth:1,
        borderColor:'tomato',
        flex:1, 
        justifyContent: 'center',
      },
      error:{
          fontSize:18,
          color:"tomato"
      }
 })