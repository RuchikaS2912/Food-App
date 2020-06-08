import React from 'react'
import { StyleSheet,View} from 'react-native';
import MealList from '../Components/MealList';
import {useSelector} from 'react-redux';
import DefaultText from '../Components/DefaultText';

const CategoryMealsScreen = (props) => {
    const catId=props.route.params.categoryId;
    const availableMeals=useSelector(state=>state.meals.filteredMeals);
    const displayedMeals=availableMeals.filter(meal=>meal.categoryIds.indexOf(catId)>=0);

    if(displayedMeals.length ===0){
        <View style={StyleSheet.content}>
            <DefaultText>
                No meals found, check your filters...
            </DefaultText>
        </View>
    }
    return (
        <MealList listData={displayedMeals} navigation={props.navigation}/>
    );
};

export default CategoryMealsScreen

const styles=StyleSheet.create({
    content:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})