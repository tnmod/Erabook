import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Popins } from '../../components/popins'
import Icon from 'react-native-vector-icons/AntDesign'
import { Switch } from '@rneui/themed';

const Notification: React.FC = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <ScrollView style={{ backgroundColor: 'white', flex: 1 }}>
            <View style={[styles.container]}>
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', }}>
                    <Icon size={24} name='arrowleft' color={'#192e51'} />
                    <Text style={[styles.text500, { marginLeft: 12, fontSize: 18 }]}>Security</Text>
                </TouchableOpacity>
                <View style={{ width: "100%", height: 0.5, backgroundColor: 'grey', opacity: 0.5, marginVertical: 12 }}></View>
                <View style={[{ marginTop: 12 }]}>
                    <TouchableOpacity style={[styles.container1]}>
                        <Text style={[styles.text3]}>Remember me</Text>
                        <View style={styles.container3}>
                            <Switch
                                trackColor={{ false: '#767577', true: '#81b0ff' }}
                                thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.container1]}>
                        <Text style={[styles.text3]}>Biometric ID</Text>
                        <View style={styles.container3}>
                            <Switch
                                trackColor={{ false: '#767577', true: '#81b0ff' }}
                                thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.container1]}>
                        <Text style={[styles.text3]}>Face ID</Text>
                        <View style={styles.container3}>
                            <Switch
                                trackColor={{ false: '#767577', true: '#81b0ff' }}
                                thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.container1]}>
                        <Text style={[styles.text3]}>SMS Authenticator</Text>
                        <View style={styles.container3}>
                            <Switch
                                trackColor={{ false: '#767577', true: '#81b0ff' }}
                                thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.container1]}>
                        <Text style={[styles.text3]}>Google Authenticator</Text>
                        <View style={styles.container3}>
                            <Switch
                                trackColor={{ false: '#767577', true: '#81b0ff' }}
                                thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.container1]}>
                        <Text style={[styles.text3]}>Device Management</Text>
                        
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.container1]}>
                        <Text style={[styles.text3]}>New Tips & Services Available</Text>
                        <View style={styles.container3}>
                            <Switch
                                trackColor={{ false: '#767577', true: '#81b0ff' }}
                                thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.container1]}>
                        <Text style={[styles.text3]}>Participate in Survey</Text>
                        <View style={styles.container3}>
                            <Switch
                                trackColor={{ false: '#767577', true: '#81b0ff' }}
                                thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                            />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}



export default Notification

const styles = StyleSheet.create({

    container: {
        flex: 1,
        paddingHorizontal: 24,
        backgroundColor: 'white',
    },
    container1: {
        flex: 0,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    container3: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    text1: {
        fontSize: 20,
        fontWeight: '700',
        color: 'black',
        justifyContent: 'space-between',
    },
    text3: {
        flex: 1,
        fontSize: 16,
        fontFamily: Popins[400],
        color: 'black',
        justifyContent: 'space-between',
        height: 42,
        textAlignVertical: 'center'
    },
    img: {
        width: 24,
        height: 24
    },


    color: {
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