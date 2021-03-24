import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

function SigninScreen({navigation}){
    return (
        <View style={styles.container}>
           <Text>Singin screen</Text>
            <Button
        title="Go to Details"
        onPress={() => navigation.navigate('DashBoard')}
      />
        </View>
    )
}

export default SigninScreen
const styles = StyleSheet.create({
    container: {
        
      },
 })