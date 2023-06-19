import { Image, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Dialog } from '@rneui/themed';
import { styled } from 'nativewind';
import { useDispatch, useSelector } from 'react-redux';
import { addUserData } from '../../redux/features/UserSilce';
import { closeDialog, openDialog } from '../../redux/features/DialogSilce';
import { RootState } from '../../redux/rootState';
import { useNavigation } from '@react-navigation/native';

const TextTw = styled(Text);
const ViewTw = styled(View);
const TouchableOpacityTw = styled(TouchableOpacity);
const ImageTw = styled(Image);
const ScrollviewTw = styled(ScrollView);
const DialogTw = styled(Dialog);
const DialogRedux = () => {
    const dispatch = useDispatch();
    const choose = useSelector((state) => state.dialog.choose);
    const content = useSelector((state) => state.dialog.content);
    const buttontext = useSelector((state) => state.dialog.buttontext);
    const title = useSelector((state) => state.dialog.title);

    return (
        <ViewTw >
            {
                choose == 0 ? (<Loading />) : choose == 1 ? (<SuccessDialog buttontext={buttontext} title={title} content={content} />) : (<FailedDialog buttontext={buttontext} title={title} content={content} />)
            }
        </ViewTw>
    )
}

const Loading = () => {
    const visiable = useSelector((state) => state.dialog.visiable);
    return (
        <ViewTw>
            <DialogTw isVisible={visiable} overlayStyle={{ borderRadius: 16 }} >
                <Dialog.Loading />
            </DialogTw>
        </ViewTw>
    )
}

const SuccessDialog = ({ content, title, buttontext }) => {
    const visiable = useSelector((state) => state.dialog.visiable);
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const actionType = useSelector((state) => state.dialog.actionType);
    const handleOnPress = () => {
        if (actionType) {
            navigation.goBack();
        }
        dispatch(closeDialog());
    }
    return (
        <ViewTw>
            <DialogTw isVisible={visiable} overlayStyle={{ borderRadius: 16, padding: 0 }} >
                <ViewTw className='justify-center items-center'>
                    <ViewTw className='justify-center items-center rounded-t-2xl h-44 w-full' style={{ backgroundColor: '#12C069' }}>
                        <ViewTw className='absolute w-16 h-16 justify-center items-center rounded-full' style={{ backgroundColor: '#1BD477' }}>
                            <ImageTw className='w-16 h-16' style={{ tintColor: 'white' }} source={require('../../assets/icon/System/check.png')} />
                        </ViewTw>
                    </ViewTw>
                    <ViewTw className='h-44 w-full justify-center items-center '>
                        <ViewTw className='items-center justify-center'>
                            <TextTw className='font-bold text-lg' style={{ color: '#1D1D1D' }}>
                                {title}
                            </TextTw>
                            <TextTw className='font-medium text-lg mt-1' style={{ color: '#616161' }}>
                                {content}
                            </TextTw>
                        </ViewTw>
                        <ViewTw className='my-2' />
                        <TouchableOpacityTw onPress={() => { handleOnPress() }} className='py-3 px-12 rounded-full justify-center items-center' style={{ backgroundColor: '#12C069' }}>
                            <TextTw className='font-bold text-lg' style={{ color: 'white' }}>{buttontext}</TextTw>
                        </TouchableOpacityTw>
                    </ViewTw>

                </ViewTw>
            </DialogTw>
        </ViewTw>
    )
}

const FailedDialog = ({ content, title, buttontext }) => {
    const dispatch = useDispatch();
    const visiable = useSelector((state) => state.dialog.visiable);
    return (
        <ViewTw>
            <DialogTw isVisible={visiable} overlayStyle={{ borderRadius: 16, padding: 0, }} >
                <ViewTw className='justify-center items-center'>
                    <ViewTw className='justify-center items-center rounded-t-2xl h-44 w-full' style={{ backgroundColor: '#DF0238' }}>
                        <ViewTw className='absolute w-16 h-16 justify-center items-center rounded-full' style={{ backgroundColor: 'none' }}>
                            <ImageTw className='w-16 h-16' style={{ tintColor: 'white' }} source={require('../../assets/icon/System/close-multiply.png')} />
                        </ViewTw>
                    </ViewTw>
                    <ViewTw className='h-44 w-full justify-center items-center '>
                        <ViewTw className='items-center justify-center'>
                            <TextTw className='font-bold text-lg' style={{ color: '#1D1D1D' }}>
                                {title}
                            </TextTw>
                            <TextTw className='font-medium text-lg mt-1' style={{ color: '#616161' }}>
                                {content}
                            </TextTw>
                        </ViewTw>
                        <ViewTw className='my-2' />
                        <TouchableOpacityTw onPress={() => { dispatch(closeDialog()) }} className=' py-3 px-12  rounded-full justify-center items-center' style={{ backgroundColor: '#DF0238' }}>
                            <TextTw className='font-bold text-lg' style={{ color: 'white' }}>{buttontext}</TextTw>
                        </TouchableOpacityTw>
                    </ViewTw>
                </ViewTw>
            </DialogTw>
        </ViewTw>
    )
}

export default DialogRedux

const styles = StyleSheet.create({})