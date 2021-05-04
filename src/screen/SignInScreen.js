import React, { useContext, useState } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Spacer from '../components/spacer'
import PrimaryInput from '../components/PrimaryInput';
import {Context as AuthContext} from '../context/AuthContext';
import PrimaryButton from '../components/PrimaryButton';


function SigninScreen({navigation}){
    const {state,signup} = useContext(AuthContext);
    const [form, setform] = useState({
        email:"",
        password:"",
    });
    const onSubmitFrom=()=>{

        console.log("the form has been submitted",form);
        signup({email:form.email,password:form.password});
    }
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
            <NavLink label="Already have an account? SignUp" routeName="Signin" />
            {state.errorMessage?<Text style={styles.error}>{state.errorMessage}</Text>:null}
            <Spacer>
            <PrimaryButton btnText="Submit"onPress={onSubmitFrom} />
            </Spacer>
        </View>
</SafeAreaView>
    )
}

export default SigninScreen
const styles = StyleSheet.create({
    container: {
        borderWidth:1,
        borderColor:'tomato',
        flex:1, 
        justifyContent: 'center',
      },
      error:{
          fontSize:18,
          marginLeft:10,
          color:"tomato"
      }
 })