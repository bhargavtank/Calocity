import React from 'react'
import { Text, View } from 'react-native'
import { FloatingAction } from 'react-native-floating-action'
const ContactsList = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <Text></Text>
            <FloatingAction onPressMain={() => navigation.navigate('CreateContact')} />
        </View>
    )
}

export default ContactsList


