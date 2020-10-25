import { color } from "../../theme"
import {StyleSheet} from 'react-native'
export default StyleSheet.create({
    box:{
        backgroundColor:color.palette.search,
        height:36,
        borderRadius:10,
        marginHorizontal:0,
        fontSize:15,
        borderBottomWidth:0
    },
    icon:{
        backgroundColor:color.palette.search,
        position:'absolute',
        top:10,
        left:25,
        width:37,
        height:36,
        borderRadius:10,
        textAlignVertical:'center'
    }
})