import React from 'react'
import { Button, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import styles from './styles'

const Register = () => {


    return (
        <View style={styles.container}>

            <View style={styles.headContainer}>
                <Text style={styles.headText}>Calocity
                </Text>
            </View>
            <View>
                <Text style={styles.titleText}>Create your account</Text>
            </View>
            <ScrollView style={styles.formContainer}>
                <View style={styles.inputContainer}>
                    <TextInput placeholder="First Name" keyboardType='default' />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput placeholder="Last Name" keyboardType='default' />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput placeholder="Email" keyboardType='email-address' />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput placeholder="Mobile Number" keyboardType='phone-pad' />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput placeholder="Password" />
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} >
                        <Button color="white" title="Signup" />
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </View>
    )
}

export default Register


