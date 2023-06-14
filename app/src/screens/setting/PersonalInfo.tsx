import { Image, ScrollView, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { styled } from 'nativewind';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/rootState';
import axios from 'axios';
import { IPADDRESS } from '../../../network.config';
import { loginSuccess } from '../../redux/features/UserSilce';
import { useNavigation } from '@react-navigation/native';


const TextTw = styled(Text);
const TextInputTw = styled(TextInput);
const ViewTw = styled(View);
const TouchableOpacityTw = styled(TouchableOpacity);
const ImageTw = styled(Image);
const ScrollviewTw = styled(ScrollView);

const PersonalInfo: React.FC = () => {
    const navigation = useNavigation();
    const user = useSelector((state: RootState) => state.user.currentUser);
    const dispatch = useDispatch();
    const [newName, setNewName] = useState(user.username);
    const updateUser = async () => {
        if (newName == '' || newName == undefined || newName == null) {
            ToastAndroid.show("Thiếu thông tin", ToastAndroid.SHORT);
            return;
        }
        if (newName == user.username) {
            navigation.goBack();
            return;
        } else {
            const result = await axios.post(IPADDRESS + '/api/user/changeinfo', { id: user._id, username: newName });
            if (result.data.user == false || result.data.user == null) {
                ToastAndroid.show("Failed", ToastAndroid.SHORT);
                return;
            } else {
                dispatch(loginSuccess(result.data.user));
                navigation.goBack();
                return;
            }
        }
    }

    return (
        <ViewTw className='flex-1 bg-white items-center'>
            <ViewTw className='w-screen my-4 justify-center items-center'>
                <Image style={[{ marginRight: 20, width: 96, height: 96, padding: 0 }]} source={require('../../assets/images/avatardefault-dark.png')}></Image>
            </ViewTw>
            <ViewTw className='bg-black w-11/12 opacity-5 my-4' style={{ height: 1 }} />
            <TextTw className='w-screen px-4 font-bold text-base text-black my-2'>Full name</TextTw>
            <TextInputTw onChangeText={(Text) => { setNewName(Text) }} className='w-screen px-4 font-bold text-base text-black' defaultValue={user.username} />
            <ViewTw className='w-11/12 bg-orange-400 mb-4' style={{ height: 1.5 }} />
            <TextTw className='w-screen px-4 font-bold text-base text-black my-2'>Email</TextTw>
            <ViewTw className='w-screen px-4 flex-row items-center'>
                <TextInputTw className=' font-bold text-base text-black grow' defaultValue={user.email} editable={false} />
                <ImageTw className='w-8 h-7 grow-0' style={{ resizeMode: 'stretch' }} source={require('../../assets/icon/System/lock.png')} />
            </ViewTw>
            <ViewTw className='w-11/12 bg-orange-400' style={{ height: 1.5 }} />
            <ViewTw className='absolute bottom-6 w-screen px-6'>
                <ViewTw className='w-full bg-black opacity-5 my-4' style={[{ height: 1 }]}></ViewTw>
                <TouchableOpacityTw onPress={() => { updateUser() }} className='flex-row bg-orange-400 p-4 justify-center items-center rounded-full'>
                    <TextTw className=' text-white font-bold text-base'>Save</TextTw>
                </TouchableOpacityTw>
            </ViewTw>
        </ViewTw>
    )
}

export default PersonalInfo

const styles = StyleSheet.create({})