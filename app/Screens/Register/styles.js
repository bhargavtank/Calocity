import { StyleSheet } from "react-native";
import Colors from '../../Constants/Colors'
export default StyleSheet.create({
    container: {
        flex: 1,
        marginTop: '15%',
    },
    headContainer: {
        marginHorizontal: 5,
        borderBottomWidth: 3,
        borderBottomColor: '#0597B7'
    },
    headText: {
        padding: 5,
        color: '#0597B7',
        fontWeight: 'bold',
        fontSize: 25.49,
        fontWeight: 'bold'
    },
    titleText: {
        padding: 20,
        color: 'black',
        fontSize: 24,
    },
    formContainer: {
        padding: 20,
    },
    inputContainer: {
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        marginVertical: 30
    },
    buttonContainer: {
        marginVertical: 30,
    },
    button: {
        backgroundColor: '#11A2FD',
        borderRadius: 5,
    }
})