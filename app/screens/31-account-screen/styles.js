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
        fontSize: 17,
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
        fontSize: 17,
        height: 22
    },
    totalpointContainer: {
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
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
        marginTop: 17,
        marginBottom: 0
    },
    pointContainer:{
        paddingRight: 40,
        
    },
    receiptContainer: {
        paddingLeft: spacing[4],
        paddingRight: 45
    },
    creditContainer: {
        paddingLeft: spacing[4],
        borderRightWidth: 0
    },
    nameSmall:{
        marginLeft: spacing[4],
        flex: 3.5,
    },
    header: {
        // height: 44,
        paddingBottom: 13
    },
    header2: {
        marginTop: 8,
    },
    email : {
        color: color.palette.greyText,
        fontSize: 15,
        marginTop: 5,

    },
    subtext:{
        fontSize: 13,
        color: 'rgb(138,138,143)'
    },
    nameBg: {
        backgroundColor:  color.palette.borderGrey,
    },
    namePic: {
        flex: 1,
        height: 86,
        borderRadius: 50,
        borderWidth: 1,
        
    },
    cardPic: {
        width: 40,
        height: 40,
        borderRadius: 5,
        marginRight: spacing[2]
    },
    
    magLeft: {
        marginLeft: spacing[4]
    },
    addressContainer: {
        borderBottomColor: 'rgb(138,138,143)',
        borderBottomWidth: .5,
        paddingTop: spacing[1],
        paddingBottom: spacing[3],
        marginBottom: spacing[3],
        
        alignItems: 'center'
    },
    nameContainer: {
        paddingVertical: spacing[3],
    },
    payment: {
        borderBottomColor:  color.palette.borderGrey,
        borderBottomWidth: 1,
        paddingVertical: spacing[3],
        alignItems: 'center'
    },

    place: {
        color: 'rgb(102,102,102)',
        fontSize: 13,
        marginBottom: spacing[1],
    },
    padRight:{
        paddingRight: spacing[4]
    },
    address:{
        fontSize: 14
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
        
    },
    arrowIcon:{
        fontSize: 13, color: 'rgb(200,199,204)',
        paddingRight: spacing[4],

    },
    cardName: {
        fontSize: 19,
        fontWeight: '600',
        marginTop: -spacing[1]
    }
})
//done