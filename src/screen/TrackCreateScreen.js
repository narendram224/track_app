import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

function TrackCreateScreen(){
    return (
        <View style={styles.container}>
            <Text>Track Create screen</Text>
            <Button
        title="Go to Details"
        onPress={() => navigation.navigate('TrackDetail')}
      />
        </View>
    )
}

export default TrackCreateScreen
const styles = StyleSheet.create({
    container: {
        
      },
 })