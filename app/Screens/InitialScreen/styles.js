import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1
    },
    facebookContainer: {
        width: '100%',
        alignItems: 'center',
        marginVertical: 5
    },
    googleContainer: {
        width: '100%',
        alignItems: 'center',
        marginVertical: 5
    },
    stroke: {
        borderBottomWidth: 4,
        borderBottomColor: '#707070',

    },
    partition: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginVertical: 5
    },
    ManualContainer: {
        marginVertical: 5,
        flexDirection: 'row',
        marginHorizontal: 10,
        justifyContent: 'space-evenly'

    },
    imageContainer: {
        margin: 20,
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#707070',
        borderBottomWidth: 10,
    },
})
