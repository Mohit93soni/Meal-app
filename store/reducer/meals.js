import {MEALS} from '../../Data/dummy-data';
import React from 'react'; 
import {TOGGLE_FAVORITES,SET_FILTERS} from '../actions/meals'
const initialState={
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: [],
};

const mealsReducer=(state=initialState,action)=>{
    switch (action.type) {
        case TOGGLE_FAVORITES:
            const exitingIndex= state.favoriteMeals.findIndex(meal=>meal.id===action.mealId);
            if(exitingIndex >=0){
                const updatedMeals= [...state.favoriteMeals];
                updatedMeals.splice(exitingIndex,1);
                return{...state,favoriteMeals:updatedMeals}
            }else{
                const meal = state.meals.find(meal=> meal.id===action.mealId);
                return{...state,favoriteMeals:state.favoriteMeals.concat(meal)};
            }
        case SET_FILTERS:
            const appliedFilters=action.filters;
            console.log('mealFilter',appliedFilters);
            const updatedFilteredMeals = state.meals.filter(meal=>{
                if(appliedFilters.glutenFree && !meal.isGlutenFree){
                    return false
                }
                if(appliedFilters.lactoseFree && !meal.isLactoseFree){
                    return false
                }
                if(appliedFilters.vegan && !meal.isVegan){
                    return false
                }
                if(appliedFilters.vegetarian && !meal.isVegetarian){
                    return false
                }
                return true;
            });
            return {...state,filteredMeals: updatedFilteredMeals}
        default:
            return state;
    }

}

export default mealsReducer;