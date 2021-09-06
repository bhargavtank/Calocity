import React from 'react'
import { Button, Text, View } from 'react-native'
import styles from './styles'
import { createStackNavigator } from '@react-navigation/stack'
import EditProfile from './EditProfile'
const Profile = () => {

    const Stack = createStackNavigator()

    const userDetails = ({ navigation }) => {
        return (
            <View style={styles.container}>
                <Button title="Edit" onPress={() => navigation.navigate('editprofile')} />
            </View>
        )
    }
    return (

        <Stack.Navigator>
            <Stack.Screen name="profile" component={userDetails} />
            <Stack.Screen name="editprofile" component={EditProfile} />
        </Stack.Navigator>

    )
}

export default Profile

