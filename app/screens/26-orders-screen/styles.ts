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
        marginBottom: 8,
        paddingLeft: 16,
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
        // padding:8,
        // marginLeft: 300,
        justifyContent: "flex-start",
    },
    orders: {
        color: 'black',
        fontSize: 34,
        lineHeight: 41,
        textAlign: "left",
        marginBottom: 8,
        fontFamily: "SegoeUI",
        fontWeight: "bold",
    },

    image: {
        flexDirection: "row"
    },
    btnImage: {
        borderRadius: 8,
        height: 38,
        marginLeft: 4,
        width: 38,
    }
    // eslint-disable-next-line eol-last
})