import { StyleSheet } from "react-native";

export default StyleSheet.create({

    container: {
        flex: 1,
        padding: 10
    },

    /////Task Type
    TaskTypeContainer: {
        backgroundColor: '#EFF9FF',
        marginVertical: 2,
        marginHorizontal: 5,
        padding: 10,
    },
    TaskTypeHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    TaskTypeHeaderText: {
        fontSize: 20,
        color: 'black',
    },
    TaskTypeItemContainer: {
        backgroundColor: 'black',
        padding: 5,
        marginHorizontal: 5

    },
    TaskTypeItemHeaderText: {
        fontSize: 16,
        color: 'white',
        padding: 5,
    },
    TaskTypeItemBodyText: {
        fontSize: 12,
        color: 'white',
        padding: 5,
    },
    TaskTypeItemActionContainer: {
        flexDirection: 'row',
        padding: 5,
        justifyContent: 'space-evenly',
        marginVertical: 5
    },
    floatingContainer: {
        position: 'absolute',
        bottom: 30,
        right: 15,

    },
    floatingButton: {
        backgroundColor: '#11A2FD',
        borderRadius: 30,
        padding: 20,
    }

})