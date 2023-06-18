import { Image, ScrollView, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styled } from 'nativewind';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/rootState';
import axios from 'axios';
import { IPADDRESS } from '../../../network.config';
import { addUserData } from '../../redux/features/UserSilce';
import { useNavigation } from '@react-navigation/native';
import { DialogLoading } from '@rneui/base/dist/Dialog/Dialog.Loading';
import { closeDialog, openDialog, resetAction } from '../../redux/features/DialogSilce';
import LoadingRedux from '../../components/dialog/DialogRedux';


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
                dispatch(openDialog({ choose: 2, title: "Oops!", content: "something went wrong", buttontext: "Try again", actionType:1 }))
                ToastAndroid.show("Failed", ToastAndroid.SHORT);
                return;
            } else {
                dispatch(openDialog({ choose: 1, title: "Success", content: "Successfully save data!", buttontext: "Go back", actionType:1 }))
                dispatch(addUserData(result.data.user));
                
                return;
            }
        }
    }
    
    return (
        <ViewTw className='flex-1 bg-white items-center'>
            <LoadingRedux />
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