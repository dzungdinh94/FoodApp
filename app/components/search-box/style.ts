import { color } from "../../theme"
import {StyleSheet} from 'react-native'
export default StyleSheet.create({
    box:{
        backgroundColor:color.palette.search,
        width:343,
        height:36,
        borderRadius:10,
        marginLeft:'auto',
        marginRight:'auto',
        top:10
    },
    icon:{
        width:20,
        height:20,
        position:'absolute',
        top:17,
        left:40
    }
})