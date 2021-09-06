import React from 'react'
import { Text, View } from 'react-native'
import styles from './styles'

const StatusBar = props => {
    return (
        <View style={styles.container}>
            <Text>{props.title}</Text>
        </View>
    )
}

export default StatusBar


