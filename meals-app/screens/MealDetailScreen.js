import React,{useEffect,useCallback} from 'react'
import { StyleSheet, Image,Text, View } from 'react-native'
import {MEALS} from '../data/dummy-data'
import { ScrollView } from 'react-native-gesture-handler';
import DefaultText from '../Components/DefaultText';
import {useSelector,useDispatch} from 'react-redux';
import {toggleFavourite} from '../store/actions/meals'
const ListItem = props =>{
    return(
        <View style={styles.listItem}>
            <DefaultText>{props.children}</DefaultText>
        </View>
    )
}

const MealDetailScreen = (props) => {
    const availableMeals=useSelector(state=>state.meals.meals)
    const { mealId } = props.route.params;
    const currentMealIsFavourite = useSelector(state => state.meals.favouriteMeals.some(meal => meal.id === mealId));
    const selectedMeal = availableMeals.find(meal => meal.id === mealId);

    const dispatch = useDispatch();

    const toggleFavouriteHandler = useCallback(() => {
        dispatch(toggleFavourite(mealId));
        },[dispatch,mealId]);
    
        useEffect(() => {
        props.navigation.setParams({toggleFav: toggleFavouriteHandler})
        },[toggleFavouriteHandler]);
    
        useEffect(() => {
        props.navigation.setParams({
            isFav : currentMealIsFavourite
        });
        },[currentMealIsFavourite]);
    return (
        <ScrollView>
            <Image source={{uri:selectedMeal.imageUrl}} style={styles.image}/>
            <View style={styles.details}>
                <DefaultText>{selectedMeal.duration} MINS</DefaultText>
                <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
                <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
            </View>
            <Text style={styles.title}>Ingrediants</Text>
                {selectedMeal.ingredients.map(ingredient=><ListItem key={ingredient}>{ingredient}</ListItem>)}
            <Text style={styles.title}>Steps</Text>
                {selectedMeal.steps.map(step=><ListItem key={step}>{step}</ListItem>)}
        </ScrollView>
    )
}

export default MealDetailScreen

const styles = StyleSheet.create({
    image:{
        width:'100%',
        height:200
    },
    details:{
        flexDirection:'row',
        padding:15,
        justifyContent:'space-around'
    },
    title:{
        fontFamily:'open-sans-bold',
        textAlign:'center',
        fontSize:22
    },
    listItem:{
        marginVertical:10,
        marginHorizontal:20,
        borderColor:'#ccc',
        borderWidth:1,
        padding:10,
    }
})
