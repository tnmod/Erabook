import { Animated, StyleSheet, Text, ToastAndroid, View } from 'react-native'
import React from 'react'
import { Popins } from '../../components/popins'
import Icon from 'react-native-vector-icons/AntDesign'
import { TextInput } from 'react-native'
import { CheckBox } from '@rneui/themed'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'



const SignUp: React.FC = () => {
    const navigation = useNavigation();
    const [checked, setChecked] = React.useState(false);
    const toggleCheckbox = () => setChecked(!checked);
    
    const [email, setemail] = React.useState('');
    const [username, setusername] = React.useState('');
    const [password, setpassword] = React.useState('');
    const [confirm, setconfirm] = React.useState('');

    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    const passwordRegx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    const register = async () =>{
        if(email.length == 0 || password.length == 0 || confirm.length == 0){
            ToastAndroid.show("Nhập thiếu thông tin", ToastAndroid.SHORT)
            return;
        }
        if(checked === false){
            ToastAndroid.show("Phải chấp nhận điều khoản của chúng tôi", ToastAndroid.SHORT)

            console.log("Phải chấp nhận điều khoản của chúng tôi");
            return;
        }
        if(!emailRegex.test(email)){
            console.log("Sai email");
            ToastAndroid.show("Sai định dạng email", ToastAndroid.SHORT)
            return;
        }
        if(!passwordRegx.test(password)){
            console.log("Mật khẩu phải có ít nhất 8 ký tự, 1 chữ hoa, 1 chữ thường, 1 số, 1 ký tự đặc biệt");
            ToastAndroid.show("Mật khẩu phải có ít nhất 8 ký tự, 1 chữ hoa, 1 chữ thường, 1 số, 1 ký tự đặc biệt", ToastAndroid.SHORT)
            return;
        }
        if(!(password === confirm)){
            console.log("Xác nhận mật khẩu sai");
            ToastAndroid.show("Xác nhận mật khẩu sai", ToastAndroid.SHORT)
            return;
        }

        try {
            //đổi link
            const result = await axios.post('http://192.168.1.101:3000/api/user/register', {email, password, username});
            if(result.data.user == false || result.data.user == null){
                console.log("Email đã được đăng ký");
                ToastAndroid.show("Email đã được đăng ký", ToastAndroid.SHORT)
                return;
            }
            else{
                console.log(result.data.user);
                navigation.navigate('SignIn' as never);
            }
        } catch (error) {
            console.log(error);
        }
        
    }

    return (
        <View style={styles.container}>
            <Text style={[styles.textHero, styles.text, {}]}>Create {"\n"}an account</Text>
            <View style={styles.containerInput}>
                <View style={[styles.inputHero, styles.sizeContainerNomal]}>
                    <TextInput style={styles.inputField} placeholder='Email' cursorColor={'#637899'} onChangeText={text => {setemail(text); setusername(text);}}/>
                    <Icon name='user' size={18} color={'#637899'} />
                </View>
                <View style={[styles.inputHero, styles.sizeContainerNomal]}>
                    <TextInput style={styles.inputField} placeholder='Password' cursorColor={'#637899'} onChangeText={text => setpassword(text)}/>
                    <Icon name='mail' size={18} color={'#637899'} />
                </View>
                <Animated.View  style={[styles.inputHero, styles.sizeContainerNomal]}>
                    <TextInput style={styles.inputField} placeholder='Password' cursorColor={'#637899'} onChangeText={text => setconfirm(text)}/>
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
            <TouchableOpacity style={[styles.buttonHero, styles.center, styles.sizeContainerNomal,]} onPress={register}>
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