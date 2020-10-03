import React,{useState,useEffect, useCallback} from 'react';
import { View, Text, StyleSheet, Switch,Platform } from 'react-native';
import {HeaderButtons,Item} from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton'
import Colors from '../constants/Color'
import {useDispatch} from 'react-redux'
import {setFilters} from '../store/actions/meals'

const FilterSwitch=props=>{
  return(
    <View style={styles.filterContainer}>
        <Text>{props.lable}</Text>
        <Switch value={props.state} 
         trackColor={{true:Colors.primerycolor}}
         thumbColor={Platform.OS==='android'? Colors.primerycolor : ''}
         onValueChange={props.onChange}/>
      </View>
  )
}

const FiltersScreen = props => {
  const {navigation} = props;
  const [isGluten, setisGluten] = useState(false);
  const [isLactose, setisLactose] = useState(false);
  const [isVegan, setisVegan] = useState(false);
  const [isVegetrian, setisVegetrian] = useState(false);
  const dispatch=useDispatch();

  const saveFilter= useCallback(()=>{
    const appliedFilters = {
      glutenFree: isGluten,
      lactoseFree: isLactose,
      vegan: isVegan,
      vegetarian: isVegetrian
    }
    //console.log('ss',appliedFilters);
    dispatch(setFilters(appliedFilters));
  },[isVegetrian,isGluten,isLactose,isVegan]);

  useEffect(()=>{
    navigation.setParams({save: saveFilter});
  },[saveFilter]);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filter / Restrictions</Text>
      <FilterSwitch 
        lable='Gluten-Free'
        state={isGluten} 
        onChange={newValue=>setisGluten(newValue)}/>
      <FilterSwitch 
        lable='Lactose-Free'
        state={isLactose} 
        onChange={newValue=>setisLactose(newValue)}/>
        <FilterSwitch 
        lable='Vegan'
        state={isVegan} 
        onChange={newValue=>setisVegan(newValue)}/>
        <FilterSwitch 
        lable='Vegetrian'
        state={isVegetrian} 
        onChange={newValue=>setisVegetrian(newValue)}/>
        
    </View>
  );
};

FiltersScreen.navigationOptions=(navData)=>{
  return{
    headerTitle:'Filter Meals',
    headerLeft:()=><HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item title='fav' 
      iconName="ios-menu" 
      onPress={()=>{navData.navigation.toggleDrawer();}} />
      </HeaderButtons>,
    headerRight:()=><HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item title='save' 
      iconName="ios-save" 
      onPress={navData.navigation.getParam('save')} />
      </HeaderButtons>,
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
      },
}}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center'
  },
  filterContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    width:'80%',
    marginVertical:10
  },
  title:{
      fontSize:22,
      margin:20,
      textAlign:'center'
  }
});

export default FiltersScreen;
