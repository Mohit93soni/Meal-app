import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createDrawerNavigator} from 'react-navigation-drawer'
import {Platform} from 'react-native';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import Colors from '../constants/Color'
import React from 'react'
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import { Ionicons } from '@expo/vector-icons';
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen'
const defaultStackNavOption= {  
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
    },
    headerTintColor:
      Platform.OS === 'android' ? 'white' : Colors.primaryColor,
    headerTitle: 'A Screen'
  }
}

const MealsNavigator = createStackNavigator({
  Categories: {
    screen: CategoriesScreen,
    navigationOptions:{
      headerTitle:'Meals Categories',
    }
  },
  CategoryMeals:{
    screen: CategoryMealsScreen
  },
  MealDetail: MealDetailScreen
},
    {  defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS==='android'?Colors.primerycolor:''
      },
      headerTintColor:
        Platform.OS === 'android' ? 'white' : Colors.primerycolor,
      
    }
  }
);

  const FavNavigator= createStackNavigator({
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen
  },
    { defaultNavigationOptions: defaultStackNavOption}
  );
 
const tabScreenConfig =  {
  Meals: {
    screen: MealsNavigator,
     navigationOptions: {
       tabBarIcon: tabInfo => {
          return(
          <Ionicons name='ios-restaurant' 
          size={25} color={tabInfo.tintColor}/>)
       },
       tabBarColor:Colors.primerycolor,
       tabBarLabel:'Melas!!'
     }},
  Favorites: {
    screen: FavNavigator,
    navigationOptions: {
        tabBarLabel: 'Favorites!',
        tabBarIcon: tabInfo => {
          return (
            <Ionicons name="ios-star" 
            size={25} color={tabInfo.tintColor} />
          );
        },
        tabBarColor:Colors.accentColor
  }
  }
}

const MealsFaTabNavigator =
    Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(tabScreenConfig,{
      activeColor: 'white',
      shifting: true,
      barStyle:{
        backgroundColor: Colors.primerycolor
      }
    })
    : createBottomTabNavigator(tabScreenConfig ,{
  tabBarOptions:{
    labelStyle:{
      fontWeight:'bold'
    },
    activeTintColor:Colors.accentColor
  }
});

const FilterNavigator = createStackNavigator({
  Filters:FiltersScreen
},
{ defaultNavigationOptions: defaultStackNavOption}
);
const MainNavigator =createDrawerNavigator({
  MealFav:{
    screen:MealsFaTabNavigator,
    navigationOptions:{
      drawerLabel:'Meals'
    }
  },
  Filter: FilterNavigator
},
{
  contentOptions:{
    activeTintColor:Colors.accentColor
  }
});

export default createAppContainer(MainNavigator);
