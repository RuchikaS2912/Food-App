        // import React, { useState, useEffect, useCallback } from 'react';
        // import { View, Text, StyleSheet, Switch } from 'react-native';
        // import Colors from '../constants/Colors';
        // import {useDispatch}from 'react-redux';
        // import {setFilters} from '../store/actions/meals';

        // const FilterSwitch = props => {
        // return (
        //     <View style={styles.filterContainer}>
        //     <Text>{props.filterName}</Text>
        //     <Switch
        //         trackColor={{ true: Colors.primaryColor }}
        //         thumbColor={Colors.primaryColor}
        //         value={props.state}
        //         onValueChange={props.onChange}
        //     />
        //     </View>
        // )
        // }


        // const FiltersScreen = props => {
        // const [isGlutenFree, setIsGlutenFree] = useState(false);
        // const [isLactoseFree, setIsLactoseFree] = useState(false);
        // const [isVegan, setIsVegan] = useState(false);
        // const [isVegetarian, setIsVegetarian] = useState(false);

        // const dispatch = useDispatch();

        // const saveFilters = useCallback(() => {
        //     const appliedFilters = {
        //     glutenFree: isGlutenFree,
        //     lactoseFree: isLactoseFree,
        //     vegan: isVegan,
        //     vegetarian: isVegetarian
        //     };
        //     dispatch(setFilters(appliedFilters));
        // }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian,dispatch]);

        // useEffect(() => {
        //     props.navigation.setParams({save:saveFilters});
        // }, [saveFilters]);

        // return (
        //     <View style={styles.screen}>
        //     <Text style={styles.title}>Available Filters / Restrictions</Text>
        //     <FilterSwitch filterName='Gluten-free' state={isGlutenFree} onChange={(newValue) => setIsGlutenFree(newValue)} />
        //     <FilterSwitch filterName='Lactose-free' state={isLactoseFree} onChange={(newValue) => setIsLactoseFree(newValue)} />
        //     <FilterSwitch filterName='Vegan' state={isVegan} onChange={(newValue) => setIsVegan(newValue)} />
        //     <FilterSwitch filterName='Vegetarian' state={isVegetarian} onChange={(newValue) => setIsVegetarian(newValue)} />
        //     </View>
        // );
        // };

        // const styles = StyleSheet.create({
        // screen: {
        //     flex: 1,
        //     alignItems: 'center'
        // },
        // title: {
        //     fontFamily: 'open-sans-bold',
        //     fontSize: 22,
        //     margin: 20,
        //     textAlign: 'center'
        // },
        // filterContainer: {
        //     flexDirection: 'row',
        //     justifyContent: 'space-between',
        //     alignItems: 'center',
        //     width: '80%',
        //     marginVertical: 15
        // }
        // });

        // export default FiltersScreen;
        import React, { useState, useEffect, useCallback } from 'react';
        import { View, Text, StyleSheet, Switch } from 'react-native';
        import { useDispatch } from 'react-redux'
        
        import { setFilters } from '../store/actions/meals'
        import Colors from '../constants/Colors';
        
        const FilterSwitch = props => {
        return (
            <View style={styles.filterContainer}>
            <Text>{props.filterName}</Text>
            <Switch
                trackColor={{ true: Colors.primaryColor }}
                thumbColor={Colors.primaryColor}
                value={props.state}
                onValueChange={props.onChange}
            />
            </View>
        )
        }
        
        
        const FiltersScreen = props => { 
        const [isGlutenFree, setIsGlutenFree] = useState(false);
        const [isLactoseFree, setIsLactoseFree] = useState(false);
        const [isVegan, setIsVegan] = useState(false);
        const [isVegetarian, setIsVegetarian] = useState(false);
        
        const dispatch = useDispatch();
        
        const saveFilters = useCallback(() => {
            const appliedFilters = {
            glutenFree: isGlutenFree,
            lactoseFree: isLactoseFree,
            vegan: isVegan,
            Vegetarian: isVegetarian
            };
            dispatch(setFilters(appliedFilters));
        }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian, dispatch]);
        
        useEffect(() => {
            props.navigation.setParams({ save:saveFilters });
        }, [saveFilters])
        
        return (
            <View style={styles.screen}>
            <Text style={styles.title}>Available Filters / Restrictions</Text>
            <FilterSwitch filterName='Gluten-free' state={isGlutenFree} onChange={(newValue) => setIsGlutenFree(newValue)} />
            <FilterSwitch filterName='Lactose-free' state={isLactoseFree} onChange={(newValue) => setIsLactoseFree(newValue)} />
            <FilterSwitch filterName='Vegan' state={isVegan} onChange={(newValue) => setIsVegan(newValue)} />
            <FilterSwitch filterName='Vegetarian' state={isVegetarian} onChange={(newValue) => setIsVegetarian(newValue)} />
            </View>
        );
        };
        
        const styles = StyleSheet.create({
        screen: {
            flex: 1,
            alignItems: 'center'
        },
        title: {
            fontFamily: 'open-sans-bold',
            fontSize: 22,
            margin: 20,
            textAlign: 'center'
        },
        filterContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '80%',
            marginVertical: 15
        }
        });
        
        export default FiltersScreen;
        
        