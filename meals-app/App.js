import React,{useState} from 'react';
import { StyleSheet} from 'react-native';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';
import MealsNavigation from './navigation/MealsNavigation';
import {NavigationContainer} from '@react-navigation/native';
import {createStore,combineReducers} from 'redux';
import mealsReducer from './store/reducers/meals';
import { Provider } from 'react-redux';


const rootReducer=combineReducers({
  meals:mealsReducer
})

const store=createStore(rootReducer);

const getFonts=()=>{
  return(
    Font.loadAsync({
      'open-sans':require('./assets/fonts/OpenSans-Regular.ttf'),
      'open-sans-bold':require('./assets/fonts/OpenSans-Bold.ttf')
    })
  );
}

export default function App() {
  const [fontLoaded, setfontLoaded] = useState(false)
  if(!fontLoaded){
    return <AppLoading startAsync={getFonts} onFinish={()=>setfontLoaded(true)}/>
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <MealsNavigation/>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
