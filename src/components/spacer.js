import React from 'react'
import { StyleSheet,  View } from 'react-native'

function Spacer({children}){
    return (
        <View style={styles.container}>
          {children}
        </View>
    )
}

export default  Spacer;
const styles = StyleSheet.create({
    container: {
       margin:15
      },
 })
