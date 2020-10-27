import { color, spacing } from "../../theme"
import { StyleSheet, Dimensions} from 'react-native'
export default StyleSheet.create({
    headerBackground: {
        flexDirection: 'row'
    },
    image:{
        width:100,
        height:30,
        marginLeft:16
    },
    iconstyle:{
        flexDirection:'row',
        flexGrow:1,
        justifyContent:'flex-end',
        marginHorizontal:16
    },
    Image: {
        height: 163,
        width:'100%',
        position:'absolute',
        borderRadius: 10,
        flexGrow:1,
        justifyContent:'center',
        alignItems:'center'
    },
    cover: {
        height:263,
        backgroundColor: color.palette.white,
        borderRadius: 10,
        borderColor: 'rgb(239,239,244)',
        borderWidth: 1,
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    price: {
        marginBottom:8,
        marginTop:4,
        color: color.palette.black,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    name: {
        color: color.palette.black,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    buttonbuy: {
        borderWidth:1,
        width:92,
        height:24,
        textAlign: 'center',
        borderRadius: 10,
        borderColor: color.palette.buttonbuy,
        color: color.palette.buttonbuy,
        marginLeft: 'auto',
        marginRight: 'auto',
        fontSize:13
    },
    sence:{
        flex:1
    },
    container:{
        flex:1,
        marginVertical:8,
        marginLeft:16
    }
})