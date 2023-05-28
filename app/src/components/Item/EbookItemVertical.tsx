import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native'
import { Popins } from '../popins'
import React, { useState } from 'react'

const EbookItemVertical: React.FC = () => {
    const [widthOfView, setWidth] = React.useState(0);
    const [heightOfView, setHeight] = React.useState(0);

    const checkPoint = React.useState(false);

    const onLayout = (event: any) => {
        const { x, y, width } = event.nativeEvent.layout;
        let height = (width * 2) / 4;
        setWidth(width);
        setHeight(height);
    }
    return (
        <TouchableOpacity style={[styles.container, { width: "50%"}]} onLayout={onLayout}>
            <Image style={{ width: widthOfView, height: heightOfView, borderRadius: 20, position: 'absolute' }} source={require('../../assets/images/phongCanh.jpg')} />
            <Text numberOfLines={2} ellipsizeMode='tail' style={[styles.text700, { fontSize: 16, color: 'white', position: 'relative', top: '8%' }]}>Romance</Text>
            {/* <ImageBackground source={require('../../assets/images/phongCanh.jpg')} resizeMode="cover" style={{ width: widthOfView, height: heightOfView, borderRadius: 20}}>
                <Text style={[styles.text700, {fontSize: 16, color: 'white', top: '70%', start: '10%'}]}>Romance</Text>
            </ImageBackground> */}
        </TouchableOpacity>
    )
}

export default EbookItemVertical
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        backgroundColor: 'white'
        // backgroundColor: '#F89300',
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
    }
})