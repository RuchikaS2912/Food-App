import React from 'react'
import { StyleSheet, Text, View ,FlatList} from 'react-native'
import MealItem from '../Components/MealItem';
import {useSelector} from 'react-redux';


const MealList = (props) => {

    const favouriteMeals = useSelector(state => state.meals.favouriteMeals)


    const renderMealsItem=itemData=>{
        const isFavourite = favouriteMeals.some(meal => meal.id === itemData.item.id);
        return(
            <MealItem 
            title={itemData.item.title} 
            duration={itemData.item.duration} 
            complexity={itemData.item.complexity}
            affordability={itemData.item.affordability}
            image={itemData.item.imageUrl}
            onSelectMeal={()=>{
                props.navigation.navigate('MealDetailScreen',{
                    mealId:itemData.item.id,
                    title:itemData.item.title,
                    isFav: isFavourite
                })
            }}/>
        
        );
    }
    return (
        <View style={styles.list}>
            <FlatList
            data={props.listData}
            renderItem={renderMealsItem}
            style={{width:'100%'}}
            />
        </View>
    )
}

export default MealList

const styles = StyleSheet.create({
    list:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding:15
    }
})
