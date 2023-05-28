import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Popins } from '../../components/popins'
import { TouchableOpacity } from 'react-native'

const HomeHeader = () => {
    return (
        <View style={[styles.container]}>
            <Image style={{ width: 32, height: 32, tintColor: '#F9AC2D', marginRight: 12 }} source={require('../../assets/icon/System/book.png')} />
            <Text style={[styles.text700, { flex: 1, fontSize: 22 }]}>Erabook</Text>
            <View style={{ flex: 0, flexDirection: 'row' }}>
                <TouchableOpacity style={[styles.center,]}>
                    <Image style={{ width: 32, height: 32, tintColor: '#192e51' }} source={require('../../assets/icon/bottombar/search.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={[styles.center, { marginLeft: 6 }]}>
                    <Image style={{ width: 32, height: 32, tintColor: '#192e51' }} source={require('../../assets/icon/main/bell.png')} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default HomeHeader


const styles = StyleSheet.create({
    container: {
        flex: 0,
        paddingHorizontal: 24,
        backgroundColor: 'white',
        flexDirection: 'row',
        paddingTop: 24,
        paddingBottom: 12,
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
})