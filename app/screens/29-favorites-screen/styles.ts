import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        padding: 0,
    },
    container1: {
        paddingHorizontal: 16,
        paddingTop: 16,
        borderBottomWidth: 1,
        borderBottomColor: "rgb(239,239,244)",
        marginBottom: 8
    },
    container2: {
        paddingLeft: 16,
        // paddingTop:16,

        paddingVertical: 8,
        
    },
    borderB: {
        borderBottomWidth: 1,
        borderBottomColor: "rgb(239,239,244)",
        flexDirection: "row",
        flex: 1,
        paddingRight: 16,
        paddingBottom: 8
    },
    icon: {
        color: 'rgb(239,239,244)',
        justifyContent: "flex-start",
    },
    favorites: {
        color: 'black',
        fontSize: 34,
        lineHeight: 41,
        textAlign: "left",
        marginBottom: 8,
        fontFamily: "AbhayaLibre",
        fontWeight: "bold",
    },



    image: {
        flexDirection: "row"
    },
    btnImage: {
        width: 38,
        height: 38,
        borderRadius: 8,
        marginLeft: 4,
    }
});