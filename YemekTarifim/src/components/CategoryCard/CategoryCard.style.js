import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    Container: {
        width: (Dimensions.get('window').width)/2.5,
        maxHeight: 150,
        borderWidth:1.5,
        borderColor: '#100720',
        margin: 10,
        backgroundColor: '#d66647',
        justifyContent: 'flex-start',
        borderRadius: 3
    },
    Image: {
        width: '85%',
        alignSelf: 'center',
        minHeight: 100,
        resizeMode: 'contain',
        marginTop: '10%',
    },
    Text: {
        textAlign: 'right',
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    TextContainer: {
        width: '100%',
        backgroundColor: 'rgba(71, 53, 22, 0.7)',
        padding: 7,
        position: 'absolute',
    }
});