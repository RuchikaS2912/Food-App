import React from 'react';
import {MEALS} from '../data/dummy-data';
import {View,Text,StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import MealList from '../Components/MealList';
const FavouriteMealsScreen = (props) => {
    const favMeals=useSelector(state=>state.meals.favouriteMeals)

    if (favMeals.length ===0 ||!favMeals){
        return(
            <View style={styles.warning}>
                <Text>No favourite meals found.Start adding some!!!</Text>
            </View>
        )
    }
    return (
        <MealList listData={favMeals} navigation={props.navigation}/>
    )
}

export default FavouriteMealsScreen

const styles=StyleSheet.create({
    warning:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    }
})