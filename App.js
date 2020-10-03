import React from 'react';
import { View, Text, Button } from 'react-native';
import MealsNavigator from './navigation/MealsNavigator';
import {enableScreens} from 'react-native-screens';
import {createStore,combineReducers} from 'redux';
import mealsReducer from './store/reducer/meals';
import {Provider} from 'react-redux'
enableScreens();
const rootReducer=combineReducers({
  meals : mealsReducer,
})
const store=createStore(rootReducer);
class App extends React.Component {
  render() {
    return <Provider store={store}>

            <MealsNavigator/>
            </Provider>
            }
}

export default App;