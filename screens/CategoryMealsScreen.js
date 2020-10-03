import React from 'react';
import { StyleSheet, Platform,FlatList, View, Text } from 'react-native';
import {useSelector} from 'react-redux'
import { CATEGORIES} from '../Data/dummy-data';

import MealList from '../components/MealList';
import DefaultText from '../components/DefaultText';

const CategoryMealScreen = props => {

  const catId = props.navigation.getParam('categoryId');
  const availableMeals=useSelector(state=> state.meals.filteredMeals);
  const displayedMeals=availableMeals.filter(meal=>meal.categoryIds.indexOf(catId)>=0);
  if(displayedMeals.length===0){
    return <View style={styles.content}>
      <DefaultText>No meals found, maybe check your filter</DefaultText>
    </View>
  }
  return <MealList listData={displayedMeals} navigation={props.navigation}/>
};

CategoryMealScreen.navigationOptions = navigationData => {
  const catId = navigationData.navigation.getParam('categoryId');

  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

  return {
    headerTitle: selectedCategory.title
  };
};

const styles = StyleSheet.create({
  content:{
    justifyContent:'center',
    alignItems:'center',
    flex:1
  }
});

export default CategoryMealScreen;
