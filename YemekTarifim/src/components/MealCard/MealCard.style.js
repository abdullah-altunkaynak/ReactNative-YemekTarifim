import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    Container: {
        flex: 1,
        maxHeight: 150,
        borderWidth: 1.5,
        borderColor: '#100720',
        margin: 15,
        justifyContent: 'flex-end',
        borderRadius: 3,
    },
    Image: {
        width: '100%',
        height: '100%',
        alignSelf: 'center',
        minHeight: 100,
        resizeMode: 'cover',
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