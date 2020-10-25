import {StyleSheet} from 'react-native'
import { black } from 'react-native-paper/lib/typescript/src/styles/colors'
import {color,spacing} from '../../theme'
export default StyleSheet.create({
    flexRow: {
        display: 'flex',
        flexDirection: 'row',

    },
    flexColumn: {
        display: 'flex',
        flexDirection: 'column',
    },
    justifySpaceBetween: {
        justifyContent: 'space-between'
    },
    flexWrap:{
        flexWrap: 'wrap'
    },
    arrow: {
        fontSize: 13,
        color: color.palette.subtext,
        marginLeft: 'auto'
    },
    back:{
        marginVertical: spacing[3]
    },
    icon:{
        color: 'rgb(147,194,47)',
        fontSize: 16,

    },
    arrowIcon:{
        color: color.palette.arrowGrey,
        fontSize: 16,
        marginLeft: spacing[2],
    },
    iconContainer:{
        backgroundColor: 'rgb(239,239,244)',
        borderRadius: 5,
        justifyContent:'center',
        alignItems:'center',
        padding: 7,
        marginRight: spacing[4],
        
    },
    center:{
        alignItems: 'center'
    },
    text: {
        fontSize: 17,
        letterSpacing: .5,
    },
    container: {
        marginHorizontal: spacing[5]
    },
    subtitle: {
        color: 'black',
        fontWeight: 'bold',
        marginVertical: spacing[4],
        fontSize: 17,
    },
    title:{
        color: 'black',
        fontSize: 34,
        fontWeight: 'bold'
    },
    textContainer: {
        borderBottomColor: color.palette.borderGrey,
        borderBottomWidth: 1,
        paddingVertical: spacing[3],
    }
})
//done