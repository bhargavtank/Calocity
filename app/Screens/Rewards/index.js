import React, { useState } from 'react'
import { Button, FlatList, Modal, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import styles from './styles'

const Rewards = () => {

    const [CollectedPoints, setCollectedPoints] = useState(30)
    const [SelectedItem, setSelectedItem] = useState({ title: '' })
    const [ShowDetail, setShowDetail] = useState(false)
    const [RewardsList, setRewardsList] = useState(
        [
            {
                id: 1,
                title: 'Dinner of your choice',
                requiredPoints: 25,
            },
            {
                id: 2,
                title: '$5 Allowance',
                requiredPoints: 30,
            },
            {
                id: 3,
                title: 'A new book',
                requiredPoints: 40,
            },
            {
                id: 4,
                title: 'Movie Night',
                requiredPoints: 50,
            },
            {
                id: 5,
                title: '$30 Allowance',
                requiredPoints: 60,
            },
            {
                id: 6,
                title: 'Football game tickets',
                requiredPoints: 75,
            },
            {
                id: 7,
                title: 'Weekend Away',
                requiredPoints: 150,
            },
            {
                id: 8,
                title: 'Dinner of your choice',
                requiredPoints: 200,
            },
            {
                id: 9,
                title: 'Dinner of your choice',
                requiredPoints: 300,
            },
        ]
    )

    const RewardsListItem = (props) => {
        return (
            <SafeAreaView style={{ flex: 1 }} >
                <TouchableOpacity onPress={() => { setSelectedItem(RewardsList.find(el => el.id == props.id)), setShowDetail(true) }}>
                    <View style={styles.listContainer}>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', maxWidth: '60%' }}>
                            <Icon name='check' />
                            <Text style={{ marginStart: 10, fontSize: 20, fontWeight: '500' }}>{props.title}</Text>
                        </View>
                        <Text style={{ color: '#E53D59', fontSize: 16 }}>{`${props.requiredPoints} points`}</Text>
                    </View>
                </TouchableOpacity>
            </SafeAreaView>
        )
    }

    const RewardsDetails = () => {
        return (
            <SafeAreaView style={{ marginTop: 30 }} >

            </SafeAreaView>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.pointsContainer}>
                <Text style={{ fontWeight: '500', fontSize: 24 }}>Collected Points : </Text>
                <Text style={{ color: '#E53D59', fontSize: 24 }}>{`${CollectedPoints} Points`}</Text>
            </View>


            <FlatList data={RewardsList} renderItem={itemData =>
            (
                <RewardsListItem id={itemData.item.id} title={itemData.item.title} requiredPoints={itemData.item.requiredPoints} />
            )
            } />

            <View style={styles.centeredView}>
                <Modal animationType="slide"
                    transparent={true}
                    visible={ShowDetail}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <View style={styles.detailHeader}>
                                <Text style={{ fontSize: 20, fontWeight: '500', maxWidth: '70%' }}>{SelectedItem.title}</Text>
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

        </View>
    )
}

export default Rewards


