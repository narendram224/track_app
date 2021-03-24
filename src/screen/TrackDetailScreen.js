import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

function TrackDetailScreen({navigation}){
    return (
        <View style={styles.container}>
             <Text>Track Detail screen</Text>
            <Button
        title="Go to Details"
        onPress={() => navigation.navigate('TrackCreate')}
      />
        </View>
    )
}

export default TrackDetailScreen
const styles = StyleSheet.create({
    container: {
        
      },
 })