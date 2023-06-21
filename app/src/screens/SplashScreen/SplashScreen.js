import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { View, Text, Animated, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const SplashScreen = () => {
    const fadeAnim = new Animated.Value(1);
    const navigation = useNavigation();
    useEffect(() => {
        const timer = setTimeout(() => {
            Animated.timing(fadeAnim, {
                toValue: 0,
                duration: 1000,
                useNativeDriver: true,
            }).start(() => {
                navigation.replace('MainNavigator');
            });
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <LinearGradient colors={['#FFFFFF', '#FFFFFF']} style={styles.container}>
            <Animated.View style={[styles.content, { opacity: fadeAnim }]}>
                <Text style={styles.text}>Erabook</Text>
            </Animated.View>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000000',
    },
});

export default SplashScreen;