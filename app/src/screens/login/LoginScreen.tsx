import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import { Popins } from '../../components/popins';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import LoginNavigator from '../../Navigator/LoginNavigator';

const LoginScreen = () => {

    const navigation = useNavigation();
    const [checked, setChecked] = React.useState(false);

    return (
        <View style={[styles.container]}>
            <View style={[styles.headerContainer, { paddingHorizontal: 24, paddingTop: 24 }]}>
                <View style={[styles.header, { justifyContent: 'space-between', marginBottom: 32 }]}>
                    <Icon name="arrowleft" style={styles.colorMain} size={26} />
                    <TouchableOpacity>
                        <Text style={[styles.text400, { color: "#677C9C" }]}>Skip</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.header, { justifyContent: 'flex-start', marginBottom: 14 }]}>
                    <TouchableOpacity onPress={() => {

                        if (checked) {
                            navigation.navigate('SignIn' as never);
                            setChecked(false);
                        }
                    }} style={[styles.sizeContainerNomal, styles.center, checked ? { backgroundColor: 'white' } : { backgroundColor: '#192E51' }]}>
                        <Text style={[styles.text400, checked ? { color: '#192E51' } : { color: 'white' }]}>Sign In</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        if (!checked) {
                            navigation.navigate('SignUp' as never);
                            setChecked(true);
                        }
                    }} style={[styles.sizeContainerNomal, styles.center, checked ? { backgroundColor: '#192E51' } : { backgroundColor: 'white' }]}>
                        <Text style={[styles.text400, checked ? { color: 'white' } : { color: '#192E51' }]}>Sign Up</Text>
                    </TouchableOpacity>
                </View>

            </View>
            <View style={{ flex: 1 }}>
                <LoginNavigator />
            </View>
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