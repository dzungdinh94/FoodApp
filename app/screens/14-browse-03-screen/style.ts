import { color, spacing } from "../../theme"
import { StyleSheet, Dimensions} from 'react-native'
export default StyleSheet.create({
    headerBackground: {
        flexDirection: 'row'
    },
    image:{
        width:131,
        height:30,
        marginLeft:16,
       
    },
    iconstyle:{
        flexDirection:'row',
        marginLeft:182
    },
    Image: {
        height: 163,
        width: Dimensions.get('window').width - 232,
        borderRadius: 10,
    },
    container: {
        flexDirection:'row',
    },
    cover: {
        height: 263,
        backgroundColor: color.palette.white,
        borderRadius: 10,
        borderColor: 'rgb(239,239,244)',
        borderWidth: 1,
        marginTop:16,
        marginLeft:16
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
        width:92,
        height:24,
        textAlign: 'center',
        borderRadius: 10,
        borderColor: color.palette.buttonbuy,
        color: color.palette.buttonbuy,
        top: 24,
        marginLeft: 'auto',
        marginRight: 'auto',
        fontSize:13
    },
    scene: {
        flex: 1,
    },
})