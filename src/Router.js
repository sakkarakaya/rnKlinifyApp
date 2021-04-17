import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Cities from '../src/pages/Cities';
import Restaurants from '../src/pages/Restaurants';
import Detail from '../src/pages/Detail';

const Stack = createStackNavigator();

const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Cities" component={Cities} />
                <Stack.Screen name="Restaurants" component={Restaurants} />
                <Stack.Screen name="Detail" component={Detail} />
            </Stack.Navigator>

        </NavigationContainer>
    )
}

export default Router
