import React from 'react';
import {useSelector} from 'react-redux'
import {HeaderButtons,Item} from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton'
import MealList from '../components/MealList'
import { View, Text,StyleSheet } from 'react-native';
import DefaultText from '../components/DefaultText'

const FavoritesScreen = props => {
  const FavMeals=useSelector(state=> state.meals.favoriteMeals);
  
  if(FavMeals.length===0 || !FavMeals){
    return <View style={styles.content}>
      <DefaultText>No Favorite Meals yet, Start Adding Some!! </DefaultText>
    </View>
  }

  return <MealList listData={FavMeals} navigation={props.navigation}/>
};

  const styles=StyleSheet.create({
    content:{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
    }
  });

FavoritesScreen.navigationOptions=(navData)=>{
  return{
    headerTitle:'My Favorites',
    headerLeft:()=><HeaderButtons HeaderButtonComponent={HeaderButton}>
    <Item title='fav' 
    iconName="ios-menu" 
    onPress={()=>{navData.navigation.toggleDrawer();}} />
  </HeaderButtons>
}}


export default FavoritesScreen;
