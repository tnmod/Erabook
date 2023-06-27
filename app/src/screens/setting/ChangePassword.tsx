import { Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { styled } from 'nativewind';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/rootState';
import axios from 'axios';
import { IPADDRESS } from '../../../network.config';
import { addUserData } from '../../redux/features/UserSilce';
import { useNavigation } from '@react-navigation/native';
import { hanleChangePassword } from '../../services/UserAPIService';
import { openDialog } from '../../redux/features/DialogSilce';
import DialogRedux from '../../components/dialog/DialogRedux';


const TextTw = styled(Text);
const TextInputTw = styled(TextInput);
const ViewTw = styled(View);
const TouchableOpacityTw = styled(TouchableOpacity);
const ImageTw = styled(Image);
const ScrollviewTw = styled(ScrollView);

const ChangePassword: React.FC = () => {
    const navigation = useNavigation();
    const user = useSelector((state: RootState) => state.user.currentUser);
    const dispatch = useDispatch();
    const [isUnlock, setUnlock] = useState(false);
    const [isUnlock2, setUnlock2] = useState(false);
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const passwordRegx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    const updateUser = async () => {

        if (newPassword.length == 0 || confirmPassword.length == 0 || oldPassword.length == 0) {
            ToastAndroid.show("Thiếu thông tin", ToastAndroid.SHORT);
            return;
        } else if (!passwordRegx.test(newPassword)) {
            ToastAndroid.show("Mật khẩu phải có ít nhất 8 ký tự, 1 chữ hoa, 1 chữ thường, 1 số, 1 ký tự đặc biệt", ToastAndroid.SHORT)
            return;
        } else if (!(newPassword === confirmPassword)) {
            ToastAndroid.show("Xác nhận mật khẩu sai", ToastAndroid.SHORT)
            return;
        } else {
            dispatch(openDialog({ choose: 0 }));
            const result = await hanleChangePassword(user._id, user.email, newPassword, oldPassword);
            console.log(result);
            if (result) {
                dispatch(openDialog({ choose: 1, title: "Success", content: "Successfully save data!", buttontext: "Go back", actionType: 1 }))
                dispatch(addUserData(result));
            } else {
                dispatch(openDialog({ choose: 2, title: 'Failed!', content: 'Incorrect old password', buttontext: 'Try again' }));
                return;
            }
        }
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={0}
            style={{ flex: 1, backgroundColor: 'white' }}>
            <DialogRedux />
            <ViewTw className='flex-1 items-center'>
                <ViewTw className='w-screen my-4 justify-center items-center'>
                    <Image style={[{ marginRight: 20, width: 96, height: 96, padding: 0 }]} source={require('../../assets/images/avatardefault-dark.png')}></Image>
                </ViewTw>
                <ViewTw className='bg-black w-11/12 opacity-5 my-4' style={{ height: 1 }} />
                <ViewTw className='grow' >
                    <ViewTw className=' w-screen items-center'>
                        <TextTw className='w-screen px-4 font-bold text-base text-black my-2'>Old Password</TextTw>
                        <ViewTw className='w-screen px-4 flex-row items-center'>
                            <TextInputTw defaultValue={''} onChangeText={(Text) => { setOldPassword(Text), setUnlock2(false) }} secureTextEntry={!isUnlock2} className=' font-bold text-base text-black grow' />
                            <TouchableOpacity onPress={() => { isUnlock2 ? setUnlock2(false) : setUnlock2(true) }}>
                                <Image style={{ tintColor: '#637899', width: 24, height: 24, }} source={isUnlock2 ? require('../../assets/icon/System/unlock.png') : require('../../assets/icon/System/lock.png')} />
                            </TouchableOpacity>
                        </ViewTw>
                        <ViewTw className='w-11/12 bg-orange-400 mb-4' style={{ height: 1 }} />
                    </ViewTw>
                    <ViewTw className=' w-screen items-center'>
                        <TextTw className='w-screen px-4 font-bold text-base text-black my-2  mt-6'>New Password</TextTw>
                        <ViewTw className='w-screen px-4 flex-row items-center'>
                            <TextInputTw defaultValue={''} onChangeText={(Text) => { setNewPassword(Text), setUnlock(false) }} secureTextEntry={!isUnlock} className=' font-bold text-base text-black grow' />
                            <TouchableOpacity onPress={() => { isUnlock ? setUnlock(false) : setUnlock(true) }}>
                                <Image style={{ tintColor: '#637899', width: 24, height: 24, }} source={isUnlock ? require('../../assets/icon/System/unlock.png') : require('../../assets/icon/System/lock.png')} />
                            </TouchableOpacity>
                        </ViewTw>
                        <ViewTw className='w-11/12 bg-orange-400 mb-4' style={{ height: 1 }} />
                    </ViewTw>
                    <ViewTw className=' w-screen items-center'>
                        <TextTw className='w-screen px-4 font-bold text-base text-black my-2'>Confirm Password</TextTw>
                        <ViewTw className='w-screen px-4 flex-row items-center'>
                            <TextInputTw defaultValue={''} onChangeText={(Text) => { setConfirmPassword(Text), setUnlock(false) }} secureTextEntry={!isUnlock} className=' font-bold text-base text-black grow' />
                        </ViewTw>
                        <ViewTw className='w-11/12 bg-orange-400 mb-4' style={{ height: 1 }} />
                    </ViewTw>
                </ViewTw>
            </ViewTw>
            <ViewTw className='grow-0 my-4 w-screen px-6'>
                <ViewTw className='w-full bg-black opacity-5 my-4' style={[{ height: 1 }]} />
                <TouchableOpacityTw onPress={() => { updateUser() }} className='flex-row bg-orange-400 p-4 justify-center items-center rounded-full'>
                    <TextTw className=' text-white font-bold text-base'>Save</TextTw>
                </TouchableOpacityTw>
            </ViewTw>
        </KeyboardAvoidingView>

    )
}

export default ChangePassword

const styles = StyleSheet.create({})