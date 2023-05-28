import { Animated, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Popins } from '../../components/popins'
import Icon from 'react-native-vector-icons/AntDesign'
import { TextInput } from 'react-native'
import { CheckBox } from '@rneui/themed'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'



const SignUp: React.FC = () => {
    const navigation = useNavigation();
    const [checked, setChecked] = React.useState(false);
    const toggleCheckbox = () => setChecked(!checked);
    return (
        <View style={styles.container}>
            <Text style={[styles.textHero, styles.text, {}]}>Create {"\n"}an account</Text>
            <View style={styles.containerInput}>
                <View style={[styles.inputHero, styles.sizeContainerNomal]}>
                    <TextInput style={styles.inputField} placeholder='Email' cursorColor={'#637899'} />
                    <Icon name='user' size={18} color={'#637899'} />
                </View>
                <View style={[styles.inputHero, styles.sizeContainerNomal]}>
                    <TextInput style={styles.inputField} placeholder='Password' cursorColor={'#637899'} />
                    <Icon name='mail' size={18} color={'#637899'} />
                </View>
                <Animated.View  style={[styles.inputHero, styles.sizeContainerNomal]}>
                    <TextInput style={styles.inputField} placeholder='Password' cursorColor={'#637899'} />
                    <Icon name='mail' size={18} color={'#637899'} />
                </Animated.View>
            </View>
            <View style={{ flexDirection: 'row', marginBottom: 56 }}>
                <CheckBox
                    checked={checked}
                    onPress={toggleCheckbox}
                    iconType="material-community"
                    checkedIcon="checkbox-marked"
                    uncheckedIcon="checkbox-blank"
                    uncheckedColor='#E9E9F0'
                    checkedColor="#FF404C"
                    containerStyle={{ padding: 0, margin: 0, }}
                />
                <View style={[styles.center, { flexDirection: 'row' }]}>
                    <Text onPress={toggleCheckbox} style={[styles.text500]}>I have read </Text>
                    <TouchableOpacity onPress={() => { navigation.navigate('Terms' as never) }} >
                        <Text style={[styles.text500, { color: '#FF404C' }]}>Terms & Agreement </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity style={[styles.buttonHero, styles.center, styles.sizeContainerNomal,]} >
                <Text style={[styles.text500, { color: 'white' }]} >Sign Up</Text>
            </TouchableOpacity>
            <Text style={[{ width: '100%', marginVertical: 32 }, styles.textCenter]}>Or sign up with</Text>
            <View style={[{ flexDirection: 'row', flex: 1, justifyContent: 'space-between' }]}>
                <TouchableOpacity style={[styles.center, styles.buttonSocial, { flexDirection: 'row', paddingBottom: 2 }]} >
                    <Icon name='google' size={20} />
                    <Text style={[styles.text500, styles.textCenter, { marginLeft: 8 }]} >Google</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.center, styles.buttonSocial, { flexDirection: 'row', paddingBottom: 2 }]} >
                    <Icon name='apple1' size={20} />
                    <Text style={[styles.text500, styles.textCenter, { marginLeft: 8 }]} >Apple ID</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    buttonSocial: {
        borderRadius: 20,
        height: 58,
        width: "48%",
        backgroundColor: '#E9E9F0'
    },
    buttonHero: {
        backgroundColor: '#FF404C',
    },
    inputField: {
        flexGrow: 1,
        height: '100%',
        padding: 0,
        fontSize: 16,
        fontWeight: '400',
        color: '#192e51',
        marginRight: 8
    },
    inputHero: {
        backgroundColor: '#F5F5F8',
        flexGrow: 1,
        flexDirection: 'row',
        margin: 0,
        alignItems: 'center',
        paddingVertical: 14,
        paddingHorizontal: 20,
        marginBottom: 16
    },
    containerInput: {
        marginTop: 32,
    },
    textHero: {
        fontFamily: Popins[700],
        fontSize: 32,
        letterSpacing: 0.8,
    },
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 24,
        backgroundColor: 'white'
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
        width: "100%",
        height: 58,
    },

});

export default SignUp