import React,{useEffect,useCallback} from 'react';
import { View, Text, StyleSheet ,Button, ScrollView,Image} from 'react-native';
import HeaderButton from '../components/HeaderButton'
import DefaultText from '../components/DefaultText'
import {HeaderButtons,Item} from 'react-navigation-header-buttons'
import {useSelector,useDispatch} from 'react-redux'
import {toggleFavorites} from '../store/actions/meals'
const ListItem=props=>{
  return(
    <View style={styles.listItem}>
      <DefaultText>{props.children}</DefaultText>
    </View>
  )
}

const MealDetailScreen = props => {
  const mealId= props.navigation.getParam('mealId');
  const availableMeals=useSelector(state=> state.meals.meals);
  const selectedMeal=availableMeals.find(meal=> meal.id === mealId);
  const currentMealIsfavorite=useSelector(state=> state.meals.favoriteMeals.some(meal=>meal.id===mealId))
  const dispatch =useDispatch();
  console.log('curr----',currentMealIsfavorite);
  
  const toggleFavorteHandler = useCallback( ()=>{
    dispatch(toggleFavorites(mealId));
  },[dispatch,mealId]);

  useEffect(()=>{
    //props.navigation.setParams({mealTitle:selectedMeal.title});
    props.navigation.setParams({toggleFav: toggleFavorteHandler});
  },[toggleFavorteHandler]);
  
  useEffect(()=>{
    props.navigation.setParams({isFav:currentMealIsfavorite});
  },[currentMealIsfavorite])
  return (
    <ScrollView>
    <Image source={{uri:selectedMeal.imageUrl}} style={styles.image}/>
    <View style={styles.details}>
        <DefaultText>{selectedMeal.duration}m</DefaultText>
        <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
        <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
    </View>
    <Text style={styles.title}>Ingredients</Text>
    {selectedMeal.ingredients.map(ingredient=>(
      <ListItem key={ingredient}>{ingredient}</ListItem>
      ))}
    <Text style={styles.title}>Step</Text>
    {selectedMeal.steps.map(step=>(
      <ListItem key={step}>{step}</ListItem>
      ))}
    <View>
      <Button title='Back' 
      onPress={()=>props.navigation.goBack()} />
       <Button title='Back to Home' 
      onPress={()=>props.navigation.popToTop()} />
    </View>
    </ScrollView>
  );
};

MealDetailScreen.navigationOptions=(navigationData)=>{
//const mealId=navigationData.navigation.getParam('mealId');
const toggleFavorite = navigationData.navigation.getParam('toggleFav');
const mealTitle = navigationData.navigation.getParam('mealTitle')
//const selectedMeal=MEALS.find(meal=> meal.id === mealId);
const isFavortie = navigationData.navigation.getParam('isFav');
return{
   headerTitle: mealTitle,
   headerRight:()=>
   <HeaderButtons HeaderButtonComponent={HeaderButton}>
   <Item title='fav' 
   iconName={isFavortie? 'ios-star': 'ios-star-outline'} 
   onPress={toggleFavorite} />
 </HeaderButtons>
 
 }
}

const styles = StyleSheet.create({
  details:{
    flexDirection:'row',
    padding:15,
    justifyContent:'space-around'
  },
  image:{
    width:'100%',
    height:200
  },
  title:{
    fontSize:22,
    textAlign:'center'
  },
  listItem:{
    marginVertical:10,
    marginHorizontal:20,
    borderColor:'#ccc',
    borderWidth:1,
    padding:10
  }
});

export default MealDetailScreen;
