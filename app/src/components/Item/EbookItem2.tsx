import { Image, StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import { Popins } from '../popins'

const EbookItem2: React.FC = () => {

    const [widthOfView, setWidth] = React.useState(0);
    const [heightOfView, setHeight] = React.useState(0);
    const [widthOfScene, setWidthScene] = React.useState(0);

    const checkPoint = React.useState(false);

    //tong cac margin, padding,....
    const gap = 54;

    const onLayout = (event: any) => {
        const { x, y, width } = event.nativeEvent.layout;
        //tinh chieu rong ((man hinh) - (gap))/ 2
        setWidthScene(((Dimensions.get('window').width)-gap)/2);
        let height = (width * 5) / 3;
        setWidth(width);
        setHeight(height);
    }
    return (
        <TouchableOpacity style={[styles.container, { width: widthOfScene }]} onLayout={onLayout}>
            <Image style={{ width: widthOfScene, height: heightOfView, borderRadius: 20 }} source={require('../../assets/images/potter.jpg')} />
            <Text numberOfLines={2} ellipsizeMode='tail' style={[styles.text500, { fontSize: 16, paddingHorizontal: 4, marginTop: 12, marginBottom: 8 }]}>Harry potter and the prisoner of azkabanpotter and potter and potter and </Text>
            <View style={[, { flexDirection: 'row', alignItems: 'center' }]}>
                <Image style={{ width: 24, height: 24, tintColor: '#192e51' }} source={require('../../assets/icon/Design/star.png')}></Image>
                <Text style={[styles.text500, { marginRight: 12 }]}>4.9</Text>
                <Text style={[styles.text500, {}]}>$8.99</Text>
            </View>
        </TouchableOpacity>
    )
}

export default EbookItem2

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
        justifyContent: 'center',
        alignItems: 'center'
    },
})