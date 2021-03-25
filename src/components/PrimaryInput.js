import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Input } from 'react-native-elements'

function PrimaryInput({name,secure=false,label="" ,placeholder,value,onChangeText}){
    return (
        <Input 
        name={name}
        secureTextEntry={secure}
        label={label}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        autoCapitalize="none"
        autoCorrect={false}
        />
    )
}

export default PrimaryInput
const styles = StyleSheet.create({
   
 })
