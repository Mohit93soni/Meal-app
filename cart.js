import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const cart = () => {
    return (
        <View style={styles.screen}>
            <Text>cart</Text>
        </View>
    )
}

export default cart

const styles = StyleSheet.create({
    screen: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
  });
  