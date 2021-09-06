import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import styles from './styles'

const Dropdown = (props) => {

    const [IsExpanded, setIsExpanded] = useState(false)

    return (
        <View style={styles.container}>
            <Text style={styles.titleText}> {props.title} </Text>
        </View>
    )
}

export default Dropdown


