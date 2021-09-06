import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    themeContainer: {
        marginTop: 35,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: '#b2ebf2',
        padding: 20,
        borderColor: 'transparent',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    themeText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    dropdownContainer: {
        marginTop: 10,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: '#b2ebf2',
        padding: 2,
        borderColor: 'transparent',
    }
    ,
    dropdownChild: {
        paddingHorizontal: 30,
        paddingVertical: 5,
    }

})