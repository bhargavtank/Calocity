import React, { useState } from 'react'
import { FlatList, Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import styles from './styles'

const Recipe = () => {
    let RecepieTypeList = [
        {
            name: 'Breakfast',
            id: 1
        },
        {
            name: 'Lunch',
            id: 2
        },
        {
            name: 'Dinner',
            id: 3
        },
        {
            name: 'Dessert',
            id: 4
        },
        {
            name: 'Snacks',
            id: 5
        },
        {
            name: 'Kids meal',
            id: 6
        },
        {
            name: 'Gluten free',
            id: 7
        },
        {
            name: 'Lactose free',
            id: 8
        }
    ]
    let RecepieList = [
        {
            id: 1,
            name: 'Chocolate & Plum eclares',
            url: 'https://caketalk.ae/wp-content/uploads/2017/06/chocolate-berry-cake-1.jpg',
            duration: 2
        },
        {
            id: 2,
            name: 'Caramel Doughnuts',
            url: 'https://caketalk.ae/wp-content/uploads/2017/06/chocolate-berry-cake-1.jpg',
            duration: 2
        },
        {
            id: 3,
            name: 'Chocolate & Plum eclares',
            url: 'https://caketalk.ae/wp-content/uploads/2017/06/chocolate-berry-cake-1.jpg',
            duration: 2
        },
        {
            id: 4,
            name: 'Caramel Doughnuts',
            url: 'https://caketalk.ae/wp-content/uploads/2017/06/chocolate-berry-cake-1.jpg',
            duration: 2
        },
        {
            id: 5,
            name: 'Chocolate & Plum eclares',
            url: 'https://caketalk.ae/wp-content/uploads/2017/06/chocolate-berry-cake-1.jpg',
            duration: 2
        },
        {
            id: 6,
            name: 'Chocolate & Plum eclares',
            url: 'https://caketalk.ae/wp-content/uploads/2017/06/chocolate-berry-cake-1.jpg',
            duration: 2
        },
    ]

    const [SelectedType, setSelectedType] = useState(undefined)


    const ListTypeItem = (props) => {
        return (

            <TouchableOpacity style={styles.listTypeContainer} onPress={() => { setSelectedType(props.title) }}>
                <View style={styles.listTypeItem}>
                    <Text style={styles.listTypeText}>{props.title}</Text>
                    <Icon name="chevron-right" />
                </View>
            </TouchableOpacity>

        )
    }

    const ListItem = (props) => {
        console.log(props)
        return (

            <TouchableOpacity style={styles.listContainer} onPress={() => { setSelectedType(props.title) }}>
                <View style={styles.listImage}>
                    <Image style={{ width: '100%', height: '60%' }} source={{ uri: props.url }} />
                </View>
                <View style={styles.listDetails}>
                    <Text>{props.title}</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                        <Icon name="clock" color='#707070' />
                        <Text style={{ marginStart: 5 }}>{props.duration}</Text>
                    </View>
                </View>

            </TouchableOpacity>

        )
    }

    const RecepieTypes = () => {
        return (

            <FlatList data={RecepieTypeList} renderItem={itemData =>
            (
                <ListTypeItem title={itemData.item.name} />
            )
            } />

        )
    }

    const Receipes = () => {
        return (
            <SafeAreaView style={{ flex: 1, width: '100%' }}>
                <FlatList data={RecepieList} renderItem={itemData =>
                (
                    <ListItem title={itemData.item.name} url={itemData.item.url} duration={itemData.item.duration} />
                )
                } numColumns={2} />
            </SafeAreaView>
        );
    }

    return (
        <View style={styles.container}>
            {SelectedType !== undefined ? <Receipes /> : <RecepieTypes />}
        </View>
    )
}

export default Recipe

