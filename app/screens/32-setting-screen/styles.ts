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
        color: color.palette.arrowGrey,
    },
    back:{
        marginVertical: spacing[3]
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
        fontSize: 38,
        fontWeight: 'bold'
    },
    textContainer: {
        borderBottomColor: color.palette.borderGrey,
        borderBottomWidth: 1,
        paddingVertical: spacing[3],
    }
})