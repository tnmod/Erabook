import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, selectCount } from '../redux/features/CounterSilce';

import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import SignIn from '../screens/loginScreen/SignIn';
import SignUp from '../screens/loginScreen/SignUp';
import Terms_Agreement from '../screens/loginScreen/Terms_Agreement';
import Icon from 'react-native-vector-icons/AntDesign'
import LoginNavigator from './LoginNavigator';
import LoginScreen from '../screens/loginScreen/LoginScreen';
import HomeScreen from '../screens/homeScreen/HomeScreen';
import BottomNavigator from './BottomNavigator';
const Stack = createStackNavigator();


const MainNagivator: React.FC = () => {

    return (
        <Stack.Navigator initialRouteName='LoginScreen'>
            <Stack.Screen name="LoginScreen" component={LoginScreen} options={{
                headerShown: false,
            }} />
            <Stack.Screen name='Terms' component={Terms_Agreement} options={
                {
                    title: '',
                    headerLeft: (props) => {
                        const navigation = useNavigation();
                        return (
                            <TouchableOpacity onPress={() => { navigation.goBack() }} style={{ marginHorizontal: 24 }}>
                                <Icon name="caretup" size={24} />
                            </TouchableOpacity>
                        )
                    },
                    cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
                }} />
            <Stack.Screen name='BottomNavigator' component={BottomNavigator} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}



export default MainNagivator

const styles = StyleSheet.create({

})