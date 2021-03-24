import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

function SignupScreen({navigation}){
    return (
        <View style={styles.container}>
            <Text>Singpu screen</Text>
            <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Signin')}
      />
        </View>
    )
}

export default SignupScreen
const styles = StyleSheet.create({
    container: {
        
      },
 })