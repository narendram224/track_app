import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

function TrackListScreen(){
    return (
        <View style={styles.container}>
             <Text>Track List screen</Text>
            <Button
        title="Go to Details"
        onPress={() => navigation.navigate('TrackCreate')}
      />
        </View>
    )
}

export default TrackListScreen
const styles = StyleSheet.create({
    container: {
        
      },
 })