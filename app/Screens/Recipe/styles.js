import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: 'white'
    },
    listTypeItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    listTypeText: {
        color: 'black',
        fontSize: 24,
        fontWeight: '500'
    },
    listTypeContainer: {
        backgroundColor: '#EFF9FF',
        borderRadius: 5,
        marginVertical: 5,
        padding: 10,

    },
    listContainer: {
        marginHorizontal: 10,
        backgroundColor: '#EFF9FF'
    },
    listImage: {
        padding: 5,
    },
    listDetails: {
        padding: 5,
        flex: 1
    }
})