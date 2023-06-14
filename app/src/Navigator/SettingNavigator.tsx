import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CardStyleInterpolators, TransitionSpecs, createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import PaymentMenthodsScreen from '../screens/setting/PaymentMenthodsScreen';
import Icon from 'react-native-vector-icons/AntDesign'
import { styled } from 'nativewind';
import PersonalInfo from '../screens/setting/PersonalInfo';
import ChangePassword from '../screens/setting/ChangePassword';

const Stack = createStackNavigator();
const TextTw = styled(Text);
const ViewTw = styled(View);
const TouchableOpacityTw = styled(TouchableOpacity);
const ImageTw = styled(Image);
const ScrollviewTw = styled(ScrollView);


const SettingNavigator: React.FC = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='PaymentMenthods' component={PaymentMenthodsScreen} options={
                {
                    header: ((props) => {
                        const navigation = useNavigation();
                        return (
                            <ViewTw className='flex-row h-14 items-center bg-white' >
                                <TouchableOpacityTw className='ml-4 mr-3 grow-0' onPress={() => { navigation.goBack() }} >
                                    <Icon name="arrowleft" size={24} color={'black'} />
                                </TouchableOpacityTw>
                                <TextTw className='grow text-lg font-bold text-black'>Payment Menthods</TextTw>
                                <TouchableOpacityTw className='mr-4 grow-0 w-6 h-6 justify-center items-center border rounded-3xl'>
                                    <ImageTw className='w-6 h-6' source={require('../assets/icon/System/more-horizontal.png')} />
                                </TouchableOpacityTw>
                            </ViewTw>
                        )
                    }),
                    transitionSpec: {
                        open: { animation: 'timing', config: { duration: 300 } },
                        close: { animation: 'timing', config: { duration: 300 } },
                    },
                    cardStyleInterpolator: CardStyleInterpolators.forRevealFromBottomAndroid,
                }} />
            <Stack.Screen name='PersonalInfo' component={PersonalInfo} options={
                {
                    header: ((props) => {
                        const navigation = useNavigation();
                        return (
                            <ViewTw className='flex-row h-14 items-center bg-white' >
                                <TouchableOpacityTw className='ml-4 mr-3 grow-0' onPress={() => { navigation.goBack() }} >
                                    <Icon name="arrowleft" size={24} color={'black'} />
                                </TouchableOpacityTw>
                                <TextTw className='grow text-lg font-bold text-black'>Personal Info</TextTw>
                                <ImageTw className='w-8 h-8 mx-4' source={require('../assets/icon/Design/edit.png')} />
                            </ViewTw>
                        )
                    }),
                    transitionSpec: {
                        open: { animation: 'timing', config: { duration: 300 } },
                        close: { animation: 'timing', config: { duration: 300 } },
                    },
                    cardStyleInterpolator: CardStyleInterpolators.forRevealFromBottomAndroid,
                }} />
                <Stack.Screen name='ChangePassword' component={ChangePassword} options={
                {
                    header: ((props) => {
                        const navigation = useNavigation();
                        return (
                            <ViewTw className='flex-row h-14 items-center bg-white' >
                                <TouchableOpacityTw className='ml-4 mr-3 grow-0' onPress={() => { navigation.goBack() }} >
                                    <Icon name="arrowleft" size={24} color={'black'} />
                                </TouchableOpacityTw>
                                <TextTw className='grow text-lg font-bold text-black'>Personal Info</TextTw>
                                <ImageTw className='w-8 h-8 mx-4' source={require('../assets/icon/Design/edit.png')} />
                            </ViewTw>
                        )
                    }),
                    transitionSpec: {
                        open: { animation: 'timing', config: { duration: 300 } },
                        close: { animation: 'timing', config: { duration: 300 } },
                    },
                    cardStyleInterpolator: CardStyleInterpolators.forRevealFromBottomAndroid,
                }} />
        </Stack.Navigator>
    )
}

export default SettingNavigator

const styles = StyleSheet.create({})