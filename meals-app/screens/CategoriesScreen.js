import * as React from 'react'
import { StyleSheet, Text, View ,FlatList,Button, TouchableOpacity} from 'react-native'
import {CATEGORIES} from '../data/dummy-data';
import CategoryGridTile from '../Components/CategoryGridTile';


const CategoriesScreen = props => {
    console.log(props)
    const renderGridItem=(itemData)=>{
        return (
            <CategoryGridTile 
                title={itemData.item.title} 
                color={itemData.item.color}
                onSelect={()=>{
                props.navigation.navigate('CategoryMealsScreen',{
                    categoryId:itemData.item.id,
                    title:itemData.item.title
                })}}/>
        );
        }

    return (
        <FlatList
        data={CATEGORIES}
        renderItem={renderGridItem}
        numColumns={2}
        />
    )
    
}

export default CategoriesScreen


const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    
})
