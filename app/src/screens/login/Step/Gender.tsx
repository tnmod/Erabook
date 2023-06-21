import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { styled } from 'nativewind';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { Image } from 'react-native-svg';


const TextTw = styled(Text);
const ViewTw = styled(View);
const TouchableOpacityTw = styled(TouchableOpacity);
const TextInputTw = styled(TextInput);
const ImageTw = styled(Image);
const Gender = () => {
    return (
        <View>
            <Text>Gender</Text>
        </View>
    )
}

export default Gender

const styles = StyleSheet.create({})