import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-elements';

function PrimaryButton({btnText,onPress}){
    return (
       <Button title={btnText} onPress={onPress} /> 
    )
}

export default PrimaryButton
const styles = StyleSheet.create({
    container: {
       
      },
 })
