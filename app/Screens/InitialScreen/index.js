import React from 'react'
import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import styles from './styles'

const InitialScreen = ({ navigation }) => {
    const Separator = () => (
        <View style={styles.separator} />
    );
    return (
        <View style={styles.container}>

            <View style={styles.imageContainer}>
                <Image source={require('../../assets/images/calocitylogo.jpg')} />
            </View>

            <View style={styles.facebookContainer}>
                <Icon.Button name="facebook" backgroundColor="#3B5695">
                    <TouchableHighlight>
                        <Text style={{ fontSize: 16, color: 'white' }}>
                            Continue with Facebook
                        </Text>
                    </TouchableHighlight>
                </Icon.Button>
            </View>

            <View style={styles.googleContainer}>
                <Icon.Button name="google" backgroundColor="#FF4646">
                    <Text style={{ fontSize: 16, color: 'white' }}>
                        Continue with Google
                    </Text>
                </Icon.Button>
            </View>

            <View style={styles.partition}>
                <Separator />
                <Text style={{ fontSize: 8 }}>or</Text>
                <Separator />
            </View>

            <View style={styles.ManualContainer}>
                <Icon.Button backgroundColor="#11A2FD" onPress={() => navigation.navigate('Login')}>
                    <Text style={{ fontSize: 16, color: 'white' }}>
                        Sign in with email
                    </Text>
                </Icon.Button>
                <Icon.Button backgroundColor="transparent" onPress={() => navigation.navigate('Register')}>
                    <Text style={{ fontSize: 16, color: 'black' }}>
                        Sign up
                    </Text>
                </Icon.Button>
            </View>

        </View>
    )
}

export default InitialScreen

