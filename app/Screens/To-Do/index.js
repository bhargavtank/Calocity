import React, { useState } from 'react'
import { FlatList, Modal, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import styles from './styles'

const ToDo = () => {

    const [SelectedTaskType, setSelectedTaskType] = useState('')
    const [TodoList, setTodoList] = useState(
        [
            {
                id: 1,
                title: 'openTask',
                list: [
                    {
                        id: 1,
                        title: 'Car Wash',
                        points: 15,
                        createdDate: '2021/12/01',
                        createdTime: '13:30',
                        createdUser: 'Monica'

                    },
                    {
                        id: 2,
                        title: 'Mowing Lawn',
                        points: 30,
                        createdDate: '2021/11/01',
                        createdTime: '13:30',
                        createdUser: 'Joey'

                    }
                ]
            },
            {
                id: 2,
                title: 'myTask',
                list: [
                    {
                        id: 1,
                        title: 'Car Wash',
                        points: 15,
                        createdDate: '2021/12/01',
                        createdTime: '13:30',
                        createdUser: 'Monica'

                    },
                    {
                        id: 2,
                        title: 'Mowing Lawn',
                        points: 30,
                        createdDate: '2021/11/01',
                        createdTime: '13:30',
                        createdUser: 'Joey'

                    }
                ]
            },
            {
                id: 3,
                title: 'providedTask',
                list: [
                    {
                        id: 1,
                        title: 'Car Wash',
                        points: 15,
                        createdDate: '2021/12/01',
                        createdTime: '13:30',
                        createdUser: 'Monica',
                        acceptedUser: 'Julia',
                        completed: false

                    },
                    {
                        id: 2,
                        title: 'Mowing Lawn',
                        points: 30,
                        createdDate: '2021/11/01',
                        createdTime: '13:30',
                        createdUser: 'Joey',
                        acceptedUser: 'Julia',
                        completed: false
                    },
                    {
                        id: 3,
                        title: 'Mowing Lawn',
                        points: 30,
                        createdDate: '2021/11/01',
                        createdTime: '13:30',
                        createdUser: 'Joey',
                        acceptedUser: 'Julia',
                        completed: false
                    }
                ]
            }
        ]
    )


    const TaskType = (props) => {
        return (
            <TouchableOpacity disabled={SelectedTaskType === props.title} style={styles.TaskTypeContainer} onPress={() => {
                // if (SelectedTaskType && SelectedTaskType === props.title) {
                //     setSelectedTaskType('')
                // } else {
                //     setSelectedTaskType(props.title)
                // }
                setSelectedTaskType(props.title)
            }}>
                <View style={styles.TaskTypeHeader}>
                    <Text style={styles.TaskTypeHeaderText}>{props.title}</Text>
                    <Icon name={SelectedTaskType === props.title ? "chevron-down" : "chevron-down"} />
                </View>
                {SelectedTaskType === props.title ? <TaskTypeItem title={props.title} list={props.list} /> : null}
            </TouchableOpacity>
        )
    }

    const TaskTypeItem = (props) => {

        return (
            <View style={{ marginTop: 15, }}>
                <FlatList data={props.list} horizontal={true} renderItem={itemData =>
                (
                    <View style={styles.TaskTypeItemContainer}>

                        <View style={{ marginVertical: 5 }}>
                            <Text style={styles.TaskTypeItemHeaderText}>{itemData.item.title}</Text>
                        </View>

                        <Text style={{ color: 'red', padding: 5 }}>{`${itemData.item.points} Points`}</Text>

                        <Text style={styles.TaskTypeItemBodyText}>{`Date : ${itemData.item.createdDate}`}</Text>
                        <Text style={styles.TaskTypeItemBodyText}>{`Time : ${itemData.item.createdTime}`}</Text>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', padding: 5 }}>
                            <Text style={styles.TaskTypeItemBodyText}>Offered By : </Text>
                            <View style={{ backgroundColor: 'pink', borderRadius: 5, borderWidth: 1 }}>
                                <Text style={{ fontSize: 17, color: 'black', padding: 5 }}> {itemData.item.createdUser}</Text>
                            </View>
                        </View>

                        {props.title === 'providedTask' ? <View style={styles.TaskTypeItemActionContainer}>
                            <View style={{ backgroundColor: 'blue', borderRadius: 5, borderWidth: 1 }}>
                                <Icon.Button name="check" color='white' />
                            </View>
                            <View style={{ backgroundColor: 'red', borderRadius: 5, borderWidth: 1, }}>
                                <Icon.Button backgroundColor='red' name="times" color='white' />
                            </View>
                        </View> : null}

                    </View>
                )
                } />
            </View>
        )
    }

    const AddItem = () => {
        return (
            <View>
                <Modal animationType="slide"
                    transparent={true}
                    visible={ShowDetail}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <View style={styles.detailHeader}>
                                <Text style={{ fontSize: 20, fontWeight: '500', maxWidth: '70%' }}>Add Item</Text>
                                <Icon name="times" size={25} onPress={() => { setShowDetail(false) }} />
                            </View>

                            <View style={styles.modelDetails}>
                                <Text style={{ fontWeight: '500', fontSize: 18 }}>Required Points</Text>
                                <Text style={{ color: '#E53D59', fontSize: 18 }}>{SelectedItem.requiredPoints} Points</Text>
                            </View>
                            <View style={styles.modelDetails}>
                                <Text style={{ fontWeight: '500', fontSize: 18 }}>Obtained Points</Text>
                                <Text style={{ color: '#E53D59', fontSize: 18 }}>{CollectedPoints} Points</Text>
                            </View>

                            <TouchableOpacity style={{ backgroundColor: '#11A2FD', marginHorizontal: 15, borderRadius: 5, marginBottom: 15, }}>
                                <Button color='white' title='Claim' />
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <FlatList data={TodoList} renderItem={itemData =>
                (
                    <TaskType title={itemData.item.title} list={itemData.item.list} />
                )
                } />

            </View>
            <View style={styles.floatingContainer}>
                <TouchableOpacity style={styles.floatingButton} >
                    <Icon name="plus" color='white' size={20} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default ToDo


