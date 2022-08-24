import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Categories from './pages/Categories';
import Meals from './pages/Meals';
import Detail from './pages/Detail'
const Stack = createStackNavigator();

const Router = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='CategoriesPage' component={Categories} options={{
                    title: 'Categories',
                    headerStyle: {backgroundColor: 'brown'},
                    headerTitleStyle: {color: 'white'},
                    headerTintColor: 'white'
                }}/>
                <Stack.Screen name='MealsPage' component={Meals} options={{
                    
                    title: 'Meals',
                    headerStyle: {backgroundColor: 'brown'},
                    headerTitleStyle: {color: 'white'},
                    headerTintColor: 'white',
                }}/>
                <Stack.Screen name='DetailPage' component={Detail} options={{
                    title: 'Detail',
                    headerStyle: {backgroundColor: 'brown'},
                    headerTitleStyle: {color: 'white'},
                    headerTintColor: 'white'
                }}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Router;