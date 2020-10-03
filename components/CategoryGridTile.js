import React from 'react'
import { TouchableOpacity,StyleSheet, Text, View,Platform,TouchableNativeFeedback } from 'react-native'

const CategoryGridTile = (props) => {
    let TouchableCmp=TouchableOpacity;
    if(Platform.OS==="android" && Platform.Version>=21){
        TouchableCmp=TouchableNativeFeedback;
    }
    return (
        <View style={styles.gridItem}>
        <TouchableCmp style={{flex:1}}
           onPress={props.onSelect}>
            <View style={{...styles.container,...{backgroundColor:props.color}}} >
              <Text style={styles.title} numberOfLines={2}>{props.title}</Text>
            </View>
            </TouchableCmp>
            </View>
    )
}

export default CategoryGridTile

const styles = StyleSheet.create({
    gridItem:{
        flex:1,
        margin:15,
        height:150,
        borderRadius:10,
        overflow:Platform.OS==='android' && Platform.Version>=21 ? 'hidden': 'visible',
        elevation:5,
      },
      container:{
          flex:1,
          borderRadius:10,
          shadowColor:'black',
          shadowOpacity:0.26,
          shadowOffset:{width:0,height:2},
          shadowRadius:10,          
          alignItems:'flex-end',
          justifyContent:'flex-end',
          padding:15
      },
      title:{
        fontSize:22,
        fontWeight:'bold',
        textAlign:'right',

      }
})
