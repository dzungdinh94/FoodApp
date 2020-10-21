import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container2: {
        paddingLeft: 16,
        // paddingTop:16,

        paddingVertical: 8
    },
    borderB: {
        borderBottomWidth: 1,
        borderBottomColor: "rgb(239,239,244)",
        flexDirection: "row",
        flex: 1,
        paddingRight: 16,
        paddingBottom: 8
    },
    image: {
        flexDirection: "row"
    },
    btnImage: {
        width: 38,
        height: 38,
        borderRadius: 8,
        marginLeft: 4,
    },
    orderNumber: { 
        color: 'black',
        fontSize: 17,
        lineHeight: 22,
        textAlign: "left",
        marginBottom: 8,
        fontFamily: "SegoeUI",
        fontWeight: "normal",
    },
    createdAt: {
        color: "rgb(102,102,102)",
        fontSize: 13,
        lineHeight: 16,
        textAlign: "left",
        fontFamily: "SegoeUI",
        fontWeight: "normal",
    },
    deliveryMethod: {
        color: "rgb(138,138,143)",
        fontSize: 13,
        lineHeight: 18,
        textAlign: "left",
        fontFamily: "SegoeUI",
        fontWeight: "normal",
    }
})

