import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import { Popins } from '../../components/popins';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import LoginNavigator from '../../Navigator/LoginNavigator';

const LoginScreen:React.FC = () => {

    const navigation = useNavigation();
    const [checked, setChecked] = React.useState(false);

    return (
        <View style={{ flex: 1 }}>
            <LoginNavigator />
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',

    },
    headerContainer: {
        backgroundColor: "white",
        flex: 0,
    },
    colorMain: {
        color: '#192e51'
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
        paddingHorizontal: 24,
        paddingVertical: 8,
        marginRight: 12
    }, container: {
        flex: 1
    }
})