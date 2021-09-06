import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Agenda, Calendar, CalendarList } from 'react-native-calendars'
import { FloatingAction } from 'react-native-floating-action'
import Icon from 'react-native-vector-icons/FontAwesome5'


import styles from './styles'

const CalendarScreen = () => {

    const vacation = { key: 'vacation', color: 'red', selectedDotColor: 'blue' };
    const massage = { key: 'massage', color: 'blue', selectedDotColor: 'red' };
    const workout = { key: 'workout', color: 'green' };

    const GetIcon = (name) => {
        return <Icon name={name} size={15} />
    }
    const actions = [
        {
            text: "Event",
            icon: GetIcon("add"),
            name: "event",
            position: 1
        },
        {
            text: "Alaram",
            icon: GetIcon('add'),
            name: "alaram",
            position: 2
        },
        {
            text: "Member",
            icon: GetIcon('add'),
            name: "member",
            position: 3
        }
    ];

    return (
        <View style={styles.container}>
            {/* <Calendar
                markingType={'multi-dot'}
                enableSwipeMonths={true}
                markedDates={
                    {
                        '2021-08-02': { selected: true, selectedColor: '#A2D9FC', dots: [vacation, massage] },
                        '2021-08-10': { selected: true, selectedColor: '#A2D9FC', dots: [workout, massage] },
                        '2021-08-22': { selected: true, selectedColor: '#A2D9FC', dots: [vacation] }
                    }
                }
            /> */}
            <Agenda
                hideKnob={false}
                showClosingKnob={false}
                items={{
                    '2021-08-22': [{ name: 'item 1 - any js object' }],
                    '2021-08-23': [{ name: 'item 2 - any js object', height: 80 }],
                    '2021-08-24': [],
                    '2021-08-25': [{ name: 'item 3 - any js object' }, { name: 'any js object' }]
                }}
            />
            <FloatingAction actions={actions} color='#11A2FD' onPressItem={name => {
                console.log(`select button ${name}`)
            }} />
        </View>
    )
}

export default CalendarScreen


