import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SignIn from '../screens/login/SignIn';
import SignUp from '../screens/login/SignUp';
import Icon from 'react-native-vector-icons/AntDesign'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native';
import { Popins } from '../components/popins';
import { useNavigation } from '@react-navigation/native';
const Stack = createStackNavigator();


const LoginNavigator: React.FC = () => {
    const config = {
        animation: 'timing',
        config: {
            stiffness: 1000,
            damping: 500,
            mass: 3,
            overshootClamping: true,
            restDisplacementThreshold: 0.01,
            restSpeedThreshold: 0.01,
        },
    };
    return (
        <Stack.Navigator initialRouteName='SignIn' screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name="SignIn" component={SignIn} options={{
                cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,

            }} />
            <Stack.Screen name="SignUp" component={SignUp} options={{
                cardStyleInterpolator: CardStyleInterpolators.forNoAnimation
            }} />
        </Stack.Navigator>
    )
}

export default LoginNavigator

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',

    },
    headerContainer: {
        backgroundColor: "white",
    },
    colorMain: {
        color: '#192e51'
    },
    text: {
        color: '#192e51',
    },
    textCenter: {
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    text400: {
        color: '#192e51',
        fontFamily: Popins[400],
        top: 1.8,
    },
    text500: {
        color: '#192e51',
        fontFamily: Popins[500],
        top: 2,
    },
    text700: {
        color: '#192e51',
        fontFamily: Popins[700],
        top: 2.1,
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    sizeContainerNomal: {
        borderRadius: 20,
        paddingHorizontal: 24,
        paddingVertical: 8,
        marginRight: 12
    },
})