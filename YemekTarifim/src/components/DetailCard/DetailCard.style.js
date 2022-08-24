import { StyleSheet } from "react-native";

export default StyleSheet.create({
    ImageContainer: {
        width: '100%',
        height: 220,
        /*borderBottomWidth: 4,
        borderBottomColor: '#031b33',*/
        paddingBottom: 5,
        paddingTop: 5,
        backgroundColor: '#4E4F50'
    },
    Image: {
        width: '90%',
        height: '100%',
        resizeMode: 'cover',
        alignSelf: 'center',
        borderRadius: 10,
        borderWidth: 1,
    },
    InfoTextContainer: {
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: '#031b33',
        Top: 5,
        paddingBottom: 10,
        backgroundColor: '#E7D2CC'
    },
    MealNameText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#DF362D', /* #B7AC44 */ 
        textAlign: 'center',
    },
    InfoContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 15
    },
    InfoText: {
        fontSize: 22,
        fontWeight: '600',
        color: '#FF4500',
    },
    DetailContainer: {
        padding: 10
    },
    DetailText: {
        color: 'black',
        fontSize: 18,
        fontWeight: '400',
    },
    YoutubeContainer: {
        width: '90%',
        height: 50,
        backgroundColor: '#FF0000',
        alignSelf: 'center',
        borderRadius: 10,
        justifyContent: 'center'
    },
    YoutubeText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    }
});