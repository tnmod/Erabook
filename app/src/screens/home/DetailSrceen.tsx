import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/AntDesign";
import { Popins } from '../../components/popins';
const DetatilBookScreen = () => {
    return (
        <View style={{ backgroundColor: 'white', flex: 1 }}>
            <View style={{ marginHorizontal: 24, backgroundColor: 'white' }}>
                <View style={[styles.center, { flexDirection: "row" }]}>
                    <TouchableOpacity style={{ marginEnd: 12 }}>
                        <Icon name="arrowleft" size={24} color={'black'} />
                    </TouchableOpacity>
                    <Text style={[styles.text500, { color: 'black', fontSize: 20 }]}>About This Book</Text>
                </View>
                <Text style={[styles.text400, { color: 'black', fontSize: 14, marginVertical: 16 }]}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consequat tempus tortor, faucibus euismod orci facilisis accumsan. Donec tellus nulla, fermentum et tincidunt et, dapibus a arcu. Sed sed augue aliquam, aliquam velit nec, interdum lacus. Duis laoreet gravida rutrum. Proin feugiat sagittis sem, non gravida velit tempor sed. Donec ac facilisis tellus, sed fringilla augue. Integer sit amet mi nunc. Maecenas vulputate, lacus et convallis facilisis, quam libero congue risus, eget aliquam massa ante eget enim.
                </Text>
                <View style={{ width: "100%", height: 0.5, backgroundColor: 'grey', marginBottom: 16 }}></View>
                <View style={{ flexDirection: 'row', }}>
                    <View style={{ flex: 1 }}>
                        <View style={{ marginBottom: 20 }}>
                            <Text style={[styles.text500, { color: 'black', fontSize: 14 }]}>Language</Text>
                            <Text style={[styles.text400, { color: 'gray', fontSize: 14 }]}>English</Text>
                        </View>
                        <View style={{ marginBottom: 20 }}>
                            <Text style={[styles.text500, { color: 'black', fontSize: 14 }]}>Author</Text>
                            <Text style={[styles.text500, { color: '#FFA500', fontSize: 14, fontWeight: "600" }]}>Tin Nguyen</Text>
                        </View>
                        <View style={{ marginBottom: 20 }}>
                            <Text style={[styles.text500, { color: 'black', fontSize: 14 }]}>Published on</Text>
                            <Text style={[styles.text400, { color: 'black', fontSize: 14 }]}>Dec 8 ,2015</Text>
                        </View>
                        <View style={{ marginBottom: 20 }}>
                            <Text style={[styles.text500, { color: 'black', fontSize: 14 }]}>Pages</Text>
                            <Text style={[styles.text400, { color: 'black', fontSize: 14 }]}>784</Text>
                        </View>
                        <View>
                            <Text style={[styles.text500, { color: 'black', fontSize: 14 }]}>Puchases</Text>
                            <Text style={[styles.text400, { color: 'black', fontSize: 14 }]}>50M+</Text>
                        </View>
                    </View>
                    <View style={{ flex: 1 }}>
                        <View style={{ marginBottom: 20 }}>
                            <Text style={[styles.text500, { color: 'black', fontSize: 14 }]}>Age</Text>
                            <Text style={[styles.text400, { color: 'black', fontSize: 14 }]}>20 & 18</Text>
                        </View>
                        <View style={{ marginBottom: 20 }}>
                            <Text style={[styles.text500, { color: 'black', fontSize: 14 }]}>Pubisher</Text>
                            <Text style={[styles.text500, { color: '#FFA500', fontSize: 14, fontWeight: "600" }]}>Pottermore Publishing</Text>
                        </View>
                        <View style={{ marginBottom: 20 }}>
                            <Text style={[styles.text500, { color: 'black', fontSize: 14 }]}>ISBN</Text>
                            <Text style={[styles.text400, { color: 'black', fontSize: 14 }]}>0123456756</Text>
                        </View>
                        <View style={{ marginBottom: 20 }}>
                            <Text style={[styles.text500, { color: 'black', fontSize: 14 }]}>Gerne</Text>
                            <Text style={[styles.text500, { color: '#FFA500', fontSize: 14, fontWeight: "600" }]}>Magic, Happy</Text>
                        </View>
                        <View>
                            <Text style={[styles.text500, { color: 'black', fontSize: 14 }]}>Size</Text>
                            <Text style={[styles.text400, { color: 'black', fontSize: 14 }]}>6MB</Text>
                        </View>
                    </View>
                </View>

            </View >
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 0,
        backgroundColor: 'white',
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
        alignItems: 'center'
    },





})

export default DetatilBookScreen