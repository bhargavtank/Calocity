import React from 'react'
import { Button, Image, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Colors from '../../Constants/Colors'
import styles from './styles'

const Login = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <StatusBar hidde={true} />
            <View style={styles.imageContainer}>
                <Image source={require('../../assets/images/calocitylogo.jpg')} />
            </View>
            <View style={styles.formContainer}>
                <View style={styles.inputContainer}>
                    <TextInput placeholder="Email" keyboardType='email-address' />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput placeholder="Password" />
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button}>
                        <Button color='white' title="Sign in" />
                    </TouchableOpacity>
                </View>

                <View style={styles.forgotContainer}>
                    <Text style={styles.forgotText}>Forgot Password?</Text>
                </View>
            </View>
        </View>
    )
}

export default Login

