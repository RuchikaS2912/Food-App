import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Colors from '../constants/Colors';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../Components/HeaderButton'
import FiltersScreen from '../screens/FiltersScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import CategoriesScreen from '../screens/CategoriesScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavouriteMealScreen from '../screens/FavouriteMealScreen';
const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();
const FavStack = createStackNavigator();
const Drawer = createDrawerNavigator();
const FilStack = createStackNavigator();


const MealsNavigation = (props) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="CategoriesScreen"
                component={CategoriesScreen}
                options={{
                    title: "Meal Categories",
                    headerStyle: {
                        backgroundColor: Colors.primaryColor
                    },
                    headerTitleStyle:{
                        fontFamily:'open-sans-bold'
                    },
                    headerTintColor: 'white',
                    headerLeft:() => (
                        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                            <Item title='Menu' iconName='ios-menu' onPress={() => {props.navigation.toggleDrawer()}}/>
                        </HeaderButtons>
                    )
                }} />
            <Stack.Screen name="CategoryMealsScreen"
                component={CategoryMealsScreen}
                options={({ route }) => ({
                    title: route.params.title,
                    headerStyle: {
                        backgroundColor: Colors.primaryColor,
                    },
                    headerTitleStyle:{
                        fontFamily:'open-sans-bold'
                    },
                    headerTintColor: 'white'
                })
                } />
            <Stack.Screen name="MealDetailScreen"
                component={MealDetailScreen}
                options={({ route }) => ({
                    title: route.params.title,
                    headerStyle: {
                        backgroundColor: Colors.primaryColor,
                    },
                    headerTintColor: 'white',
                    headerTitleStyle:{
                        fontFamily:'open-sans-bold'
                    },
                    headerRight: () => (
                        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                            <Item
                                title='Favourite'
                                iconName={route.params.isFav ? 'ios-star' :'ios-star-outline'}
                                onPress={route.params.toggleFav} />
                        </HeaderButtons>
                    ),
                })} />
        </Stack.Navigator>
    )
}

const FavNavigation = (props) => {
    return (
        <FavStack.Navigator>
            <FavStack.Screen
                name="FavouriteMealScreen"
                component={FavouriteMealScreen}
                options={{
                    headerStyle: {
                        backgroundColor: '#1e90ff',
                    },
                    headerTitle: 'Your Favourites',
                    headerTitleStyle:{
                        fontFamily:'open-sans-bold'
                    },
                    headerTintColor: 'white'
                }} />
            <FavStack.Screen
                name="MealDetailScreen"
                component={MealDetailScreen}
                options={
                    ({ route }) => ({
                        title: route.params.title,
                        headerStyle: {
                            backgroundColor: '#1e90ff'
                        },
                        headerTitleStyle:{
                            fontFamily:'open-sans-bold',
                            color:'white'
                        },
                        headerRight: () => (
                            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                                <Item
                                    title='Favourite'
                                    iconName={route.params.isFav ? 'ios-star' :'ios-star-outline'}
                                    onPress={route.params.toggleFav} />
                            </HeaderButtons>
                        ),
                    })} />
        </FavStack.Navigator>
    );

}

const FilterStack = (props) => {
    return (
        <FilStack.Navigator
            screenOptions={{
                gestureEnabled:true,
                headerStyle:{
                    backgroundColor:Colors.primaryColor
                },
                headerTitleStyle:{
                    fontFamily:'open-sans-bold'
                },
                headerTitleStyle:{
                    color:'white'
                },
                headerLeft:() => (
                    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                        <Item title='Menu' iconName='ios-menu' onPress={() => props.navigation.toggleDrawer()}/>
                    </HeaderButtons>
                )
            }}
        >
            <FilStack.Screen
                name="FiltersScreen"
                component={FiltersScreen}
                options={{
                    headerTitle: 'Filter Meals',
                    headerTitleStyle:{
                        fontFamily:'open-sans-bold'
                    },                    
                    headerRight: () => (
                        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                            <Item title="Save" iconName='ios-save' onPress={props.params.save} />
                        </HeaderButtons>
                    )
                }} />
        </FilStack.Navigator>
    )
}

const MealsTabNavigator = (props) => {
    return (
        <Tab.Navigator
            shifting={true}>
            <Tab.Screen
                name="MealsNavigation"
                component={MealsNavigation}
                options={{
                    tabBarIcon: (tabInfo) => {
                        return (
                            <Ionicons
                                name="ios-restaurant"
                                size={25}
                                color='white' />
                        );
                    },
                    tabBarLabel: 'Main Menu',
                    tabBarColor: Colors.primaryColor
                }}
            />
            <Tab.Screen
                name="FavouriteMealScreen"
                component={FavNavigation}
                options={{
                    tabBarColor: Colors.accentColor,
                    tabBarIcon: (tabInfo) => {
                        return (
                            <Ionicons
                                name="ios-star"
                                size={25}
                                color='white' />
                        );
                    },
                    tabBarLabel: 'Favourites',
                    tabBarColor: '#1e90ff'
                }}
            />
        </Tab.Navigator>
    )
}

const MainNavigator = (props) => {
    return (
        <Drawer.Navigator
            drawerType='slide'
            hideStatusBar={false}
            drawerContentOptions={{
                activeTintColor: Colors.accentColor,
                labelStyle: {
                    fontFamily: 'open-sans-bold'
                }
            }}
        >
            <Drawer.Screen 
                name="MealsTabNavigator" 
                component={MealsTabNavigator}
                options={{
                    drawerLabel:"Meals",
                }}/>
            <Drawer.Screen 
                name="FiltersScreen"
                component={FilterStack} 
                options={{
                    drawerLabel:'Filters',
                }}/>
        </Drawer.Navigator>
    )
}


export default MainNavigator;

