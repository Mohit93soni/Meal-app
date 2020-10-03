import React from 'react';
import { View, Text, Button,StyleSheet } from 'react-native';

class MobileScreen extends React.Component {
  render() {
    return (
        <View>
            <Text>MobileScreen</Text>
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

export default MobileScreen;