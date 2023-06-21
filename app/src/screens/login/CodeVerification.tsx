import { Image, NativeSyntheticEvent, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { styled } from 'nativewind';
import { TextInput } from 'react-native-gesture-handler';
import { LoginStackParamList } from '../../Navigator/RootStackParamList';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { Popins } from '../../components/popins';
import { TextInputKeyPressEventData } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { changeCode, successOTP } from '../../redux/features/OTPCodeSilce';
import { RootState } from '../../redux/rootState';
import axios from 'axios';
import { IPADDRESS } from '../../../network.config';
import { closeDialog, openDialog } from '../../redux/features/DialogSilce';
import { hanleVeriOTPCode } from '../../services/UserAPIService';


const TextTw = styled(Text);
const ViewTw = styled(View);
const TouchableOpacityTw = styled(TouchableOpacity);
const TextInputTw = styled(TextInput);
const ImageTw = styled(Image);

type CodeVerificationProps = {
    route: RouteProp<LoginStackParamList, 'SignUp'>;
};


type TextInputRef = TextInput & { focus: () => void };

const CodeVerificator: React.FC<CodeVerificationProps> = () => {
    const navigation = useNavigation();
    const email = useSelector((state: RootState) => state.otpcode.email);
    const [isUnlock, setUnlock] = React.useState(false);
    const [password, setpassword] = React.useState('');
    const [confirm, setconfirm] = React.useState('');
    const [valueNonEmtpy, setValueNonEmtpy] = React.useState(false);

    var numberInput = [-1, -1, -1, -1, -1, -1] as Array<number>;
    const inputRefs = useRef<TextInputRef[]>([]);
    const dispatch = useDispatch();
    const OTPCode = useSelector((state: RootState) => state.otpcode.code);
    const [indexFocus, setIndexFocus] = React.useState(-1);




    const focusPrevInput = (index: number) => {
        if (valueNonEmtpy) {
            inputRefs.current[index].clear();
            setValueNonEmtpy(false);
            return;
        } else {
            inputRefs.current[index - 1].focus();
            setValueNonEmtpy(true);
        }
    };

    const focusNextInput = (index: number) => {
        if ((index < numberInput.length - 1)) {
            inputRefs.current[index + 1].focus();
        }
    };

    const handleInputChange = (value: number, index: number) => {
        if (value.toString() === "" || isNaN(value)) {

        } else {

            dispatch(changeCode({ index, value }));
            if (index === numberInput.length - 1) {
                return;
            } else {
                focusNextInput(index);
            }
        }
    };
    const handleKeyPress = (e: NativeSyntheticEvent<TextInputKeyPressEventData>) => {
        if (e.nativeEvent.key === 'Backspace') {
            const focusedIndex = inputRefs.current.findIndex((ref) => ref.isFocused());
            if (focusedIndex > 0) {
                focusPrevInput(focusedIndex);
            }
        }
    };

    const hanleCode = async () => {
        dispatch(openDialog(0));
        const result = await hanleVeriOTPCode(OTPCode, email);
        if (result) {
            dispatch(closeDialog());
            dispatch(successOTP(email));
            //navigation.navigate('CompleteProfile' as never);
        } else {
            dispatch(openDialog({ choose: 2, title: "Failed", content: "Wrong OTP entered!", buttontext: 'Try again' }));
        }
    }


    return (
        <ViewTw className='bg-white flex-1 container p-6'>
            <ViewTw className='mt-3 mb-6'>
                <ViewTw className='flex-row items-center my-3'>
                    <TextTw className='text-black font-bold text-3xl'>You've Got Mail</TextTw>
                    <ImageTw className='w-10 h-10' source={require('../../assets/icon-solid/Business/mail-send.png')} />
                </ViewTw>
                <TextTw className='text-black opacity-80 font-normal text-base'>
                    We have sent the OTP verification code to{'\n'}
                    <TextTw className='text-blue-600'>{email}</TextTw>. Check your email and enter the code below.
                </TextTw>
            </ViewTw>
            <ViewTw className='w-full flex-row justify-between my-6'>
                <ViewTw className='bg-slate-200 w-12 h-16 rounded-lg justify-center items-center' style={indexFocus == 1 ? { borderWidth: 1, borderColor: '#909499' } : {}}>
                    <TextInputTw
                        className='text-center'
                        ref={(ref) => (inputRefs.current[0] = ref as TextInputRef)}
                        style={{ flex: 1 }}
                        onChangeText={
                            (value) => {
                                handleInputChange(parseInt(value), 0),
                                    value.length > 0 ? setValueNonEmtpy(true) : {}
                            }
                        }
                        defaultValue=""
                        keyboardType='number-pad'
                        onKeyPress={handleKeyPress}
                        caretHidden
                        onFocus={() => { setIndexFocus(1) }}
                        numberOfLines={1}
                        maxLength={1} />
                </ViewTw>
                <ViewTw className='bg-slate-200 w-12 h-16 rounded-lg' style={indexFocus == 2 ? { borderWidth: 1, borderColor: '#909499' } : {}}>
                    <TextInputTw
                        className='text-center'
                        ref={(ref) => (inputRefs.current[1] = ref as TextInputRef)}
                        style={{ flex: 1 }}
                        onChangeText={
                            (value) => {
                                handleInputChange(parseInt(value), 1),
                                    value.length > 0 ? setValueNonEmtpy(true) : {}
                            }
                        }
                        defaultValue=""
                        keyboardType='number-pad'
                        onKeyPress={handleKeyPress}
                        onFocus={() => { setIndexFocus(2) }}
                        caretHidden
                        numberOfLines={1}
                        maxLength={1} />
                </ViewTw>
                <ViewTw className='bg-slate-200 w-12 h-16 rounded-lg' style={indexFocus == 3 ? { borderWidth: 1, borderColor: '#909499' } : {}}>
                    <TextInputTw
                        className='text-center'
                        ref={(ref) => (inputRefs.current[2] = ref as TextInputRef)}
                        style={{ flex: 1 }}
                        onChangeText={
                            (value) => {
                                handleInputChange(parseInt(value), 2),
                                    value.length > 0 ? setValueNonEmtpy(true) : {}
                            }
                        }
                        defaultValue=""
                        keyboardType='number-pad'
                        onKeyPress={handleKeyPress}
                        onFocus={() => { setIndexFocus(3) }}
                        caretHidden
                        numberOfLines={1}
                        maxLength={1} />
                </ViewTw>
                <ViewTw className='bg-slate-200 w-12 h-16 rounded-lg' style={indexFocus == 4 ? { borderWidth: 1, borderColor: '#909499' } : {}}>
                    <TextInputTw
                        className='text-center'
                        ref={(ref) => (inputRefs.current[3] = ref as TextInputRef)}
                        style={{ flex: 1 }}
                        onChangeText={
                            (value) => {
                                handleInputChange(parseInt(value), 3),
                                    value.length > 0 ? setValueNonEmtpy(true) : {}
                            }
                        }
                        defaultValue=""
                        keyboardType='number-pad'
                        onKeyPress={handleKeyPress}
                        onFocus={() => { setIndexFocus(4) }}
                        caretHidden
                        numberOfLines={1}
                        maxLength={1} />
                </ViewTw>
                <ViewTw className='bg-slate-200 w-12 h-16 rounded-lg' style={indexFocus == 5 ? { borderWidth: 1, borderColor: '#909499' } : {}}>
                    <TextInputTw
                        className='text-center'
                        ref={(ref) => (inputRefs.current[4] = ref as TextInputRef)}
                        style={{ flex: 1 }}
                        onChangeText={
                            (value) => {
                                handleInputChange(parseInt(value), 4),
                                    value.length > 0 ? setValueNonEmtpy(true) : {}
                            }
                        }
                        defaultValue=""
                        keyboardType='number-pad'
                        onKeyPress={handleKeyPress}
                        onFocus={() => { setIndexFocus(5) }}
                        caretHidden
                        numberOfLines={1}
                        maxLength={1} />
                </ViewTw>
                <ViewTw className='bg-slate-200 w-12 h-16 rounded-lg' style={indexFocus == 6 ? { borderWidth: 1, borderColor: '#909499' } : {}}>
                    <TextInputTw
                        className='text-center'
                        ref={(ref) => (inputRefs.current[5] = ref as TextInputRef)}
                        style={{ flex: 1 }}
                        onChangeText={
                            (value) => {
                                handleInputChange(parseInt(value), 5),
                                    value.length > 0 ? setValueNonEmtpy(true) : {}
                            }
                        }
                        defaultValue=""
                        keyboardType='number-pad'
                        onKeyPress={handleKeyPress}
                        onFocus={() => { setIndexFocus(6) }}
                        caretHidden
                        numberOfLines={1}
                        maxLength={1} />
                </ViewTw>
            </ViewTw>
            <TouchableOpacityTw className='bg-slate-600 w-full h-16 rounded-2xl justify-center items-center' style={{ backgroundColor: '#FF404C' }} onPress={() => { hanleCode() }}>
                <TextTw className='text-white font-semibold text-base'>Confrim</TextTw>
            </TouchableOpacityTw>

        </ViewTw>
    )
}

export default CodeVerificator

const styles = StyleSheet.create({
    buttonSocial: {
        borderRadius: 20,
        height: 58,
        width: "48%",
        backgroundColor: '#E9E9F0'
    },
    buttonHero: {
        backgroundColor: '#FF404C',
        marginVertical: 16
    },
    inputField: {
        flexGrow: 1,
        height: '100%',
        padding: 0,
        fontSize: 16,
        fontWeight: '400',
        color: '#192e51',
        marginRight: 8
    },
    inputHero: {
        backgroundColor: '#F5F5F8',
        flexGrow: 1,
        flexDirection: 'row',
        margin: 0,
        alignItems: 'center',
        paddingVertical: 14,
        paddingHorizontal: 20,
        marginBottom: 16
    },
    containerInput: {
        marginTop: 32,
    },
    textHero: {
        fontFamily: Popins[700],
        fontSize: 32,
        letterSpacing: 0.8,
    },
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 24,
        backgroundColor: 'white'
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
        width: "100%",
        height: 58,
    },

})