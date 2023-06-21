import { Image, StyleSheet, Text, View, TextInput, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useEffect } from 'react'
import { styled } from 'nativewind';
import { useDispatch, useSelector } from 'react-redux';
import { closeDialog, openDialog } from '../../../redux/features/DialogSilce';
import { hanleRegister } from '../../../services/UserAPIService';
import { RootState } from '../../../redux/rootState';
import { addUserData } from '../../../redux/features/UserSilce';
import { removeCode } from '../../../redux/features/OTPCodeSilce';


const TextTw = styled(Text);
const ViewTw = styled(View);
const TouchableOpacityTw = styled(TouchableOpacity);
const TextInputTw = styled(TextInput);
const ImageTw = styled(Image);

const CompleteProfile: React.FC = () => {
    const [isUnlock, setUnlock] = React.useState(false);
    const usernameRegx = /^[a-zA-Z0-9_\s]{3,16}$/;
    const passwordRegx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirm, setConfirm] = React.useState('');
    const dispatch = useDispatch();
    const email = useSelector((state: RootState) => state.otpcode.email);

    const hanleCreateAccount = async () => {
        if (username.length == 0 || password.length == 0 || confirm.length == 0) {
            dispatch(openDialog({ choose: 2, title: 'Missing information', content: "Please fill in all the required fields", buttontext: "Try again" }));
            return;
        }
        else if (!usernameRegx.test(username)) {
            dispatch(openDialog({ choose: 2, title: 'Invalid username', content: "Invalid username. Username must be between 3 and 16 characters long and can only contain letters, numbers, and underscores.", buttontext: "Try again" }));
            return;
        }
        else if (!passwordRegx.test(password)) {
            dispatch(openDialog({ choose: 2, title: 'Invalid password format', content: "Passwords must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character (@, $, !, %, *, ?, &)", buttontext: "Try again" }));
            return;
        }
        else if (!(password === confirm)) {
            dispatch(openDialog({ choose: 2, title: "Password does't match", content: "Please make sure the passwords match", buttontext: "Try again" }));
            return;
        } else {
            dispatch(openDialog({ choose: 0 }));
            const userAPI = await hanleRegister(email, password, username);
            if (userAPI) {
                dispatch(closeDialog());
                dispatch(addUserData(userAPI));
                dispatch(removeCode());
                //dispatch(openDialog({ choose: 1, title: "Congratulations!", content: "Registration successful! Start exploring the app now!", buttontext: "Try again", actionType: 1 }))
            } else {
                dispatch(closeDialog());
                dispatch(openDialog({ choose: 2, title: "Oops!", content: "something went wrong", buttontext: "Try again", actionType: 1 }))
            }
        }
    }


    return (
        <ViewTw className='bg-white flex-1 container p-6'>
            <ViewTw className='mt-3 mb-6'>
                <ViewTw className='flex-row items-center my-3'>
                    <TextTw className='text-black font-bold text-3xl'>Create an Account</TextTw>
                    <ImageTw className='w-10 h-10' source={require('../../../assets/icon-solid/System/user-check.png')} />
                </ViewTw>
                <TextTw className='text-black opacity-80 font-normal text-base'>
                    Enter your username & password. If you forget it, then you have to do forgot password
                </TextTw>
            </ViewTw>
            <ViewTw className='mt-4 mb-8'>
                <ViewTw className='my-2 flex-row rounded-2xl  justify-center items-center px-4 h-16' style={{ backgroundColor: '#F5F5F8' }}>
                    <TextInputTw placeholder='Username' onChangeText={(Text) => { setUsername(Text) }} className='grow p-0 m-0' />
                    <ImageTw className='w-6 h-6 grow-0' source={require('../../../assets/icon/System/user-plus.png')} />
                </ViewTw>
                <ViewTw className='my-2 flex-row rounded-2xl  justify-center items-center px-4 h-16' style={{ backgroundColor: '#F5F5F8' }}>
                    <TextInputTw onChangeText={(Text) => { isUnlock ? setUnlock(false) : {}, setPassword(Text) }} secureTextEntry={!isUnlock} placeholder='Password' className='grow p-0 m-0' />
                    <TouchableOpacityTw onPress={() => { setUnlock(!isUnlock) }}>
                        <ImageTw className='w-6 h-6 grow-0' source={isUnlock ? require('../../../assets/icon/System/unlock.png') : require('../../../assets/icon/System/lock.png')} />
                    </TouchableOpacityTw>
                </ViewTw>
                <ViewTw className='my-2 flex-row rounded-2xl  justify-center items-center px-4 h-16' style={{ backgroundColor: '#F5F5F8' }}>
                    <TextInputTw onChangeText={(Text) => { isUnlock ? setUnlock(false) : {}, setConfirm(Text) }} secureTextEntry={!isUnlock} placeholder='Confirm password' className='grow p-0 m-0' />
                    <ImageTw className='w-6 h-6 grow-0 opacity-0' source={require('../../../assets/icon/System/user-plus.png')} />
                </ViewTw>
            </ViewTw>

            <TouchableOpacityTw className=' w-full h-16 rounded-2xl justify-center items-center' style={{ backgroundColor: '#FF404C' }} onPress={() => { hanleCreateAccount() }}>
                <TextTw className='text-white font-semibold text-base'>Confrim</TextTw>
            </TouchableOpacityTw>

        </ViewTw>
    )
}

export default CompleteProfile

const styles = StyleSheet.create({})