import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { CardStyleInterpolators, TransitionPresets, TransitionSpecs, createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen/SplashScreen';
import MainNavigator from './MainNavigator';
const Stack = createStackNavigator();


const AppNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
            <Stack.Screen name="MainNavigator" component={MainNavigator} options={{
            }} />
        </Stack.Navigator>
    )
}

export default AppNavigator

const styles = StyleSheet.create({})