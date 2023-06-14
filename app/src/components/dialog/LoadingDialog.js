import { Image, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Dialog } from '@rneui/themed';
import { styled } from 'nativewind';
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess } from '../../redux/features/UserSilce';

const TextTw = styled(Text);
const ViewTw = styled(View);
const TouchableOpacityTw = styled(TouchableOpacity);
const ImageTw = styled(Image);
const ScrollviewTw = styled(ScrollView);
const DialogTw = styled(Dialog);

const LoadingDialog = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.user.loading);
    return (
        <ViewTw>
            <DialogTw isVisible={isLoading} overlayStyle={{ borderRadius: 16 }} >
                <Dialog.Loading />
            </DialogTw>
        </ViewTw>
    )
}

export default LoadingDialog

const styles = StyleSheet.create({})