import React from 'react'
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import styles from './styles'

const FloatingButton = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button}>
                <Icon name="add" color="white" />
            </TouchableOpacity>
        </View>
    )
}

export default FloatingButton


