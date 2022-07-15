import React from 'react';
import { Image, ImageBackground, StyleSheet, View, Text, Pressable } from 'react-native';
import colors from '../config/colors';

// Sets up the background and the different buttons for the welcome screen
function WelcomeScreen(props) {
    return (
        <ImageBackground 
            style={styles.background}
            source={require('../assets/crochet.jpg')}
        >
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/logo.jpg')} />
                <Text style={styles.title}>Find Your Stich</Text>
            </View>
            <View style={styles.loginContainer}>
                <Pressable style={styles.loginButton} onPress={() => console.log('Login pressed')}>
                    <Text style={styles.loginText}>Login</Text>
                </Pressable>
            </View>
            <View style={styles.registerContainer}>
                <Pressable style={styles.registerButton} onPress={() => console.log('Register pressed')}>
                    <Text style={styles.registerText}>Register</Text>
                </Pressable>
            </View>
        </ImageBackground>
    );
}

// This contains the different styling for the screen
const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    loginContainer: {
        position: 'absolute',
        bottom: 70,
        width: '100%',
    },
    loginButton: {
        width: '100%',
        height: 70,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    loginText: {
        fontSize: 20,
        fontWeight: '800',
        textTransform: 'uppercase',
    },
    logo: {
        width: 100,
        height: 100,
    },
    logoContainer: {
        position: 'absolute',
        top: 70,
        alignItems: 'center',
    },
    registerContainer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
    },
    registerButton: {
        width: '100%',
        height: 70,
        backgroundColor: colors.secondary,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    registerText: {
        fontSize: 20,
        fontWeight: '800',
        textTransform: 'uppercase',
    },
    title: {
        fontSize: 30,
        fontWeight: '700',
        fontFamily: 'Baskerville',
        backgroundColor: 'white',
    },
})

export default WelcomeScreen;