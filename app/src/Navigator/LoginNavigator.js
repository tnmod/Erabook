import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import SignIn from '../screens/login/SignIn';
import SignUp from '../screens/login/SignUp';
import Icon from 'react-native-vector-icons/AntDesign'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator, TransitionSpecs, HeaderStyleInterpolators, CardStyleInterpolators } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native';
import { Popins } from '../components/popins';
import { useNavigation, useRoute } from '@react-navigation/native';
import CodeVerificator from '../screens/login/CodeVerification';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/rootState';
import { changeRouteName } from '../redux/features/navigatorSilce';
import { styled } from 'nativewind';
import SignUpStepNavigator from './SignUpStepNavigator';
import CompleteProfile from '../screens/login/Step/CompleteProfile';
const Stack = createStackNavigator();
const TextTw = styled(Text);
const ViewTw = styled(View);
const TouchableOpacityTw = styled(TouchableOpacity);

const LoginNavigator = () => {
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
        <View style={{ flex: 1 }}>
            <Stack.Navigator initialRouteName='LoginStack' screenOptions={{ headerShown: false }}>
                <Stack.Screen name="LoginStack" component={LoginStack} />
                <Stack.Screen name="SignupOTPStack" component={SignupOTPStack} options=
                    {{
                        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
                    }} />
            </Stack.Navigator>
        </View>

    )
}

const LoginStack = () => {
    return (
        <Stack.Navigator initialRouteName='LoginStack' screenOptions={{
            header: () => {
                const [checked, setChecked] = React.useState(false);
                const navigation = useNavigation();
                const dispatch = useDispatch();
                const routeName = useSelector((state) => state.navigator.routeName);

                useEffect(() => {
                    if (routeName == 'SignUp') {
                        setChecked(true);
                    } else {
                        setChecked(false);
                    }
                }, [routeName])
                return (
                    <View style={[styles.container]}>
                        <View style={[styles.headerContainer, { paddingHorizontal: 24, paddingTop: 24 }]}>
                            <View style={[styles.header, { justifyContent: 'space-between', marginBottom: 32 }]}>
                                <Icon name="arrowleft" style={styles.colorMain} size={26} />
                                <TouchableOpacity>
                                    <Text style={[styles.text400, { color: "#677C9C" }]}>Skip</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={[styles.header, { justifyContent: 'flex-start', marginBottom: 14 }]}>
                                <TouchableOpacity disabled={!checked} activeOpacity={0.3} onPress={() => {
                                    dispatch(changeRouteName('SignIn'));
                                    navigation.navigate('SignIn');
                                }} style={[styles.sizeContainerNomal, styles.center, checked ? { backgroundColor: 'white' } : { backgroundColor: '#192E51' }]}>
                                    <Text style={[styles.text400, checked ? { color: '#192E51' } : { color: 'white' }]}>Sign In</Text>
                                </TouchableOpacity>
                                <TouchableOpacity disabled={checked} activeOpacity={0.3} onPress={() => {
                                    dispatch(changeRouteName('SignUp'));
                                    navigation.navigate('SignUp');
                                }} style={[styles.sizeContainerNomal, styles.center, checked ? { backgroundColor: '#192E51' } : { backgroundColor: 'white' }]}>
                                    <Text style={[styles.text400, checked ? { color: 'white' } : { color: '#192E51' }]}>Sign Up</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                )
            }
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
const SignupOTPStack = () => {
    return (
        <Stack.Navigator initialRouteName='CodeVerification' screenOptions={{
            headerShown: true,
            title: '',
            headerLeft: (props) => {
                const navigation = useNavigation();
                return (
                    <TouchableOpacityTw onPress={() => { navigation.goBack() }} style={{ marginHorizontal: 24 }}>
                        <TextTw className='font-bold text-lg text-gray-600' >Hủy</TextTw>
                    </TouchableOpacityTw>
                )
            },
        }}>
            <Stack.Screen name='SignUpStepStack' component={SignUpStepStack} options={{}} />
            {/* <Stack.Screen name='CodeVerification' component={CodeVerificator} options={{}} />
            <Stack.Screen name='CompleteProfile' component={CompleteProfile} options={{
                cardStyleInterpolator: CardStyleInterpolators.forNoAnimation
            }} /> */}
        </Stack.Navigator>
    )
}

const SignUpStepStack = () => {
    const status = useSelector((state) => state.otpcode.status);
    return (
        <ViewTw className='flex-1'>
            {status ? (<CompleteProfile />) : (<CodeVerificator />)}
        </ViewTw>
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
    container: {
        flex: 0
    }
})