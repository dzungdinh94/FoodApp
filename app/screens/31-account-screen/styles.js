import {StyleSheet} from 'react-native'
import {color, spacing} from '../../theme'
// import spacing from '../../theme/spacing.ts'
export default StyleSheet.create({
    flexRow: {
        display: 'flex',
        flexDirection: 'row',

    },
    flexColumn: {
        display: 'flex',
        flexDirection: 'column',
    },
    add: {
        fontSize: 22,
        color: color.palette.textGreen,
        marginBottom: spacing[5]
    },
    borderRight: {
        paddingTop: spacing[1],
        paddingLeft: spacing[2],
        paddingRight: spacing[6],
        paddingBottom: spacing[1],
        borderRightWidth: 1,
        borderRightColor: 'rgb(216,216,216)'
    },
    point: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 22,
    },
    pointContainer: {
        marginTop: spacing[4],
    },
    title: {
        fontWeight: "bold",
        paddingVertical: 11,
        color: 'black',
        fontSize: 22,
        letterSpacing: .5
    },
    name: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'black'
    },
    subtext:{
        fontSize: 16,
        color: 'rgb(138,138,143)'
    },
    nameBg: {
        backgroundColor:  color.palette.darkWhite
    },
    namePic: {
        width: 86,
        height: 86,
        borderRadius: 50,
        borderWidth: 1,
        marginRight: spacing[2]
    },
    cardPic: {
        width: 40,
        height: 40,
        borderRadius: 5,
        marginRight: spacing[2]
    },
    
    screen: {
        marginLeft: spacing[4]
    },
    addressContainer: {
        borderBottomColor: 'rgb(138,138,143)',
        borderBottomWidth: .5,
        paddingTop: spacing[1],
        paddingBottom: spacing[3],
        marginBottom: spacing[3],
    },
    nameContainer: {
        paddingVertical: spacing[3]
    },
    payment: {
        borderBottomColor:  color.palette.borderGrey,
        borderBottomWidth: 1,
        paddingVertical: spacing[3],
    },

    place: {
        color: 'rgb(102,102,102)',
        marginBottom: spacing[1],
    },
    floatRight: {
        alignSelf: 'flex-end',
        color: 'white',
        borderRadius: 50,
        borderColor: 'rgb(147,194,47)',
        borderWidth: 10,
    },
    justifySpaceBetween: {
        justifyContent: 'space-between',
        marginHorizontal: spacing[3],
        marginVertical: spacing[2]
    },
    cardName: {
        fontSize: 19,
        fontWeight: '600',
        marginTop: -spacing[1]
    }
})