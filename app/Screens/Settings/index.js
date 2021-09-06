import React, { useContext, useState } from 'react'
import { ScrollView, Switch, Text, View } from 'react-native'
import Dropdown from '../../Components/Dropdown'
import GlobalContext from '../../Context/GlobalContext'
import styles from './styles'

const Settings = () => {

    const AppContext = useContext(GlobalContext)
    console.log(AppContext);
    const [IsDarkTheme, setIsDarkTheme] = useState(false)
    const toggleSwitch = () => {
        // navigation.toggleDrawer();
        setIsDarkTheme(prevVal => !prevVal)
    }

    return (
        <View style={styles.container}>

            <View style={styles.themeContainer}>
                <Text style={styles.themeText}>Dark Theme</Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={IsDarkTheme ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={IsDarkTheme} />
            </View>
            <ScrollView>
                <View style={styles.dropdownContainer}>
                    <Dropdown title="Calendar" />
                    <View style={styles.dropdownChild}>
                        <Text>Start of the week</Text>
                    </View>
                    <View style={styles.dropdownChild}>
                        <Text>Weekly view</Text>
                    </View>
                </View>

                <View style={styles.dropdownContainer}>
                    <Dropdown title="To-do list" />
                    <View style={styles.dropdownChild}>
                        <Text>Start of the week</Text>
                    </View>
                    <View style={styles.dropdownChild}>
                        <Text>Weekly view</Text>
                    </View>
                </View>

                <View style={styles.dropdownContainer}>
                    <Dropdown title="Shopping list" />
                    <View style={styles.dropdownChild}>
                        <Text>Start of the week</Text>
                    </View>
                    <View style={styles.dropdownChild}>
                        <Text>Weekly view</Text>
                    </View>
                </View>

                <View style={styles.dropdownContainer}>
                    <Dropdown title="Contacts" />
                    <View style={styles.dropdownChild}>
                        <Text>Start of the week</Text>
                    </View>
                    <View style={styles.dropdownChild}>
                        <Text>Weekly view</Text>
                    </View>
                </View>

                <View style={styles.dropdownContainer}>
                    <Dropdown title="Alarm" />
                    <View style={styles.dropdownChild}>
                        <Text>Start of the week</Text>
                    </View>
                    <View style={styles.dropdownChild}>
                        <Text>Weekly view</Text>
                    </View>
                </View>

                <View style={styles.dropdownContainer}>
                    <Dropdown title="Stopwatch" />
                    <View style={styles.dropdownChild}>
                        <Text>Start of the week</Text>
                    </View>
                    <View style={styles.dropdownChild}>
                        <Text>Weekly view</Text>
                    </View>
                </View>

                <View style={styles.dropdownContainer}>
                    <Dropdown title="Timer" />
                    <View style={styles.dropdownChild}>
                        <Text>Start of the week</Text>
                    </View>
                    <View style={styles.dropdownChild}>
                        <Text>Weekly view</Text>
                    </View>
                </View>

            </ScrollView>

        </View>
    )
}

export default Settings


