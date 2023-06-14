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
            console.log("Mật khẩu phải có ít nhất 8 ký tự, 1 chữ hoa, 1 chữ thường, 1 số, 1 ký tự đặc biệt");
            ToastAndroid.show("Mật khẩu phải có ít nhất 8 ký tự, 1 chữ hoa, 1 chữ thường, 1 số, 1 ký tự đặc biệt", ToastAndroid.SHORT)
            return;
        } else if (!(newPassword === confirmPassword)) {
            console.log("Xác nhận mật khẩu sai");
            ToastAndroid.show("Xác nhận mật khẩu sai", ToastAndroid.SHORT)
            return;
        } else {
            const result = await axios.post(IPADDRESS + '/api/user/changepassword', { email: user.email, newpassword: newPassword, oldpassword: oldPassword });
            if (result.data.user == false || result.data.user == null) {
                ToastAndroid.show("Sai mật khẩu cũ", ToastAndroid.SHORT);
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
            <TextTw className='w-screen px-4 font-bold text-base text-black my-2'>Old Password</TextTw>
            <ViewTw className='w-screen px-4 flex-row items-center'>
                <TextInputTw defaultValue={''} onChangeText={(Text) => { setOldPassword(Text) }} secureTextEntry={!isUnlock2} className=' font-bold text-base text-black grow' />
                <TouchableOpacity onPress={() => { isUnlock2 ? setUnlock2(false) : setUnlock2(true) }}>
                    <Image style={{ tintColor: '#637899', width: 24, height: 24, }} source={isUnlock2 ? require('../../assets/icon/System/unlock.png') : require('../../assets/icon/System/lock.png')} />
                </TouchableOpacity>
            </ViewTw>
            <ViewTw className='w-11/12 bg-orange-400 mb-4' style={{ height: 1.5 }} />
            <TextTw className='w-screen px-4 font-bold text-base text-black my-2  mt-6'>New Password</TextTw>
            <ViewTw className='w-screen px-4 flex-row items-center'>
                <TextInputTw defaultValue={''} onChangeText={(Text) => { setNewPassword(Text) }} secureTextEntry={!isUnlock} className=' font-bold text-base text-black grow' />
                <TouchableOpacity onPress={() => { isUnlock ? setUnlock(false) : setUnlock(true) }}>
                    <Image style={{ tintColor: '#637899', width: 24, height: 24, }} source={isUnlock ? require('../../assets/icon/System/unlock.png') : require('../../assets/icon/System/lock.png')} />
                </TouchableOpacity>
            </ViewTw>
            <ViewTw className='w-11/12 bg-orange-400' style={{ height: 1.5 }} />
            <TextTw className='w-screen px-4 font-bold text-base text-black my-2'>Confirm Password</TextTw>
            <ViewTw className='w-screen px-4 flex-row items-center'>
                <TextInputTw defaultValue={''} onChangeText={(Text) => { setConfirmPassword(Text) }} secureTextEntry={!isUnlock} className=' font-bold text-base text-black grow' />
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

export default ChangePassword

const styles = StyleSheet.create({})