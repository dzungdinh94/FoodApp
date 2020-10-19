import { color, spacing } from "../../theme"
import { StyleSheet } from 'react-native'
export default StyleSheet.create({
    headerBackground: {
        display: 'flex',
        flexDirection: 'row'
    },
    image: {
        width: 100,
        height: 20,
        marginLeft: 10,
        marginTop: 15
    },
    iconstyle: {
        display: 'flex',
        flexDirection: 'row',
        left: 230,
        top: 5
    },
    Image: {
        height: 163,
        width: 163,
        borderRadius: 10,
    },
    container: {
        display: 'flex',
        flexDirection:'row',
        justifyContent: 'space-evenly',
        top: 12,
        flex:1
    },
    cover: {
        height: 263,
        backgroundColor: color.palette.white,
        borderRadius: 10,
        margin: 12,
        borderColor: 'rgb(239,239,244)',
        borderWidth: 1
    },
    price: {
        top: 12,
        color: color.palette.black,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    name: {
        top: 12,
        color: color.palette.black,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    buttonbuy: {
        borderWidth: 1,
        width: 100,
        textAlign: 'center',
        borderRadius: 10,
        borderColor: color.palette.buttonbuy,
        color: color.palette.buttonbuy,
        top: 24,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    scene: {
        flex: 1,
    },
    tabview: {
        marginTop: 24
    }
})