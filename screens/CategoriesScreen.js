import React from 'react';
import { View, Text, StyleSheet, Button, FlatList,TouchableOpacity, Platform } from 'react-native';
import {HeaderButtons,Item} from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton'
import {CATEGORIES} from '../Data/dummy-data'
import Colors from '../constants/Color'
import CategoryGridTile from '../components/CategoryGridTile';
const CategoriesScreen = props => {
  const renderGridItem=(itemData)=>{
    return( 
            <CategoryGridTile title={itemData.item.title}
              color={itemData.item.color}
              onSelect={()=>{props.navigation.navigate({routeName:'CategoryMeals',
           params:{
             categoryId:itemData.item.id
           }
           })}}
            />
          )
    }
    
  return (
   <FlatList numColumns={2} 
   keyExtractor={(item,index)=>item.id}
   data={CATEGORIES} renderItem={renderGridItem}/>
  );
};


CategoriesScreen.navigationOptions=(navigationData)=>{
  return{
     headerRight:()=>
     <HeaderButtons HeaderButtonComponent={HeaderButton}>
     <Item title='fav' 
     iconName="ios-cart" 
     onPress={()=>{console.log('mark as favorite')}} />
   </HeaderButtons>,

   headerLeft:()=><HeaderButtons HeaderButtonComponent={HeaderButton}>
   <Item title='fav' 
   iconName="ios-menu" 
   onPress={()=>{navigationData.navigation.toggleDrawer();}} />
 </HeaderButtons>
   }
  }
  

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CategoriesScreen;
