import React from 'react';
import { View, Text, Button,StyleSheet } from 'react-native';

class TvScreen extends React.Component {
  render() {
    return (
        <View style={Styles.container}>
            <Text>TvScreen</Text>
        </View>
       
    )
      
  }
}

const Styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
});

export default TvScreen;