import { Image, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Dialog } from '@rneui/themed';
import { styled } from 'nativewind';
import { useDispatch, useSelector } from 'react-redux';
import { addUserData } from '../../redux/features/UserSilce';
import { closeDialog, openDialog } from '../../redux/features/DialogSilce';

const TextTw = styled(Text);
const ViewTw = styled(View);
const TouchableOpacityTw = styled(TouchableOpacity);
const ImageTw = styled(Image);
const ScrollviewTw = styled(ScrollView);
const DialogTw = styled(Dialog);
const LoadingDialog = () => {
    const dispatch = useDispatch();
    const choose = useSelector((state) => state.dialog.choose);
    const content = useSelector((state) => state.dialog.content);

    return (
        <ViewTw >
            {
                choose == 0 ? (<Loading />) : choose == 1 ? (<SuccessDialog content={content} />) : (<FailedDialog content={content} />)
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

const SuccessDialog = ({ content }) => {
    const visiable = useSelector((state) => state.dialog.visiable);
    const dispatch = useDispatch();
    return (
        <ViewTw>
            <DialogTw isVisible={visiable} overlayStyle={{ borderRadius: 16, padding: 0, height: 288 }} >
                <ViewTw className='justify-center items-center'>
                    <ViewTw className='justify-center items-center rounded-t-2xl h-36 w-full' style={{ backgroundColor: '#12C069' }}>
                        <ViewTw className='absolute w-16 h-16 justify-center items-center rounded-full' style={{ backgroundColor: '#1BD477' }}>
                            <ImageTw className='w-16 h-16' style={{ tintColor: 'white' }} source={require('../../assets/icon/System/check.png')} />
                        </ViewTw>
                    </ViewTw>
                    <ViewTw className='h-36 w-full justify-center items-center '>
                        <TextTw className='font-bold text-lg my-3' style={{ color: '#1D1D1D' }}>
                            {content ? content : ''}
                        </TextTw>
                        <TouchableOpacityTw onPress={() => { dispatch(closeDialog()) }} className=' py-3 w-32 my-2 rounded-full justify-center items-center' style={{ backgroundColor: '#12C069' }}>
                            <TextTw className='font-bold text-lg' style={{ color: 'white' }}>Okay</TextTw>
                        </TouchableOpacityTw>
                    </ViewTw>

                </ViewTw>
            </DialogTw>
        </ViewTw>
    )
}

const FailedDialog = ({ content }) => {
    const dispatch = useDispatch();
    const visiable = useSelector((state) => state.dialog.visiable);
    return (
        <ViewTw>
            <DialogTw isVisible={visiable} overlayStyle={{ borderRadius: 16, padding: 0, height: 288 }} >
                <ViewTw className='justify-center items-center'>
                    <ViewTw className='justify-center items-center rounded-t-2xl h-36 w-full' style={{ backgroundColor: '#DF0238' }}>
                        <ViewTw className='absolute w-16 h-16 justify-center items-center rounded-full' style={{ backgroundColor: 'none' }}>
                            <ImageTw className='w-16 h-16' style={{ tintColor: 'white' }} source={require('../../assets/icon/System/close-multiply.png')} />
                        </ViewTw>
                    </ViewTw>
                    <ViewTw className='h-36 w-full justify-center items-center '>
                        <TextTw className='font-bold text-lg my-3' style={{ color: '#1D1D1D' }}>
                            {content}
                        </TextTw>
                        <TouchableOpacityTw onPress={() => { dispatch(closeDialog()) }} className=' py-3 w-32 my-2 rounded-full justify-center items-center' style={{ backgroundColor: '#DF0238' }}>
                            <TextTw className='font-bold text-lg' style={{ color: 'white' }}>Okay</TextTw>
                        </TouchableOpacityTw>
                    </ViewTw>

                </ViewTw>
            </DialogTw>
        </ViewTw>
    )
}

export default LoadingDialog

const styles = StyleSheet.create({})