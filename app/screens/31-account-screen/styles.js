import {StyleSheet} from 'react-native'
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
        color: 'rgb(147,194,47)'
    },
    borderRight: {
        paddingTop: 5,
        paddingLeft: 10,
        paddingRight: 30,
        paddingBottom: 5,
        borderRightWidth: 1,
        borderRightColor: 'rgb(216,216,216)'
    },
    point: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 22,
    },
    pointContainer: {
        marginTop: 15,
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
        backgroundColor: 'rgb(249,249,249)'
    },
    namePic: {
        width: 86,
        height: 86,
        borderRadius: 50,
        borderWidth: 1,
        marginRight: 10
    },
    cardPic: {
        width: 40,
        height: 40,
        borderRadius: 5,
        marginRight: 10
    },
    
    screen: {
        marginLeft: 16
    },
    addressContainer: {
        borderBottomColor: 'rgb(138,138,143)',
        borderBottomWidth: .5,
        paddingTop: 3,
        paddingBottom: 12,
        marginBottom: 12,
    },
    nameContainer: {
        paddingVertical: 10
    },
    payment: {
        borderBottomColor: 'rgb(239,239,244)',
        borderBottomWidth: 1,
        paddingVertical: 10
    },

    place: {
        color: 'rgb(102,102,102)',
        marginBottom: 5
    },
    floatRight: {
        alignSelf: 'flex-end',
        color: 'white',
        borderRadius: 50,
        borderColor: 'rgb(147,194,47)',
        borderWidth: 10,
    },
    cardName: {
        fontSize: 19,
        fontWeight: '600',
        marginTop: -5
    }
})