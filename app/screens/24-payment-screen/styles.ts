import { StyleSheet } from 'react-native';

import { color, spacing } from '../../theme';

const styles = StyleSheet.create({

    hearder: {
        marginLeft: 9,
        flexDirection: 'row',
        height: 23,
        marginTop: 11,
        marginRight: 16,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    textHearder: {
        fontFamily: 'SegoeUI-Regular',
        fontSize: 17,
        color: color.palette.lighterGrey
    },
    textThanhToan: {
        marginLeft: spacing[4],
        marginTop: 15,
        fontFamily: 'AbhayaLibre-Bold',
        fontSize: 34,
        lineHeight: 41,
    },
    listCard: {
        marginLeft: spacing[4],
        flexDirection: 'row',
        height: 54,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textListCard: {
        justifyContent: 'center',
        marginRight: spacing[3],
        height: 29,
        borderRadius: 14.5,
        backgroundColor: 'rgb(239,239,244)',
    },
    textCard: {
        paddingHorizontal: 10,
        fontSize: 13,
        fontFamily: 'SegoeUI-Regular',
        lineHeight: 18,
        color: 'rgb(102,102,102)'
    },
    inforCard: {
        flexDirection: 'column',
        alignItems: 'center',
        height: 261,
        backgroundColor: 'rgb(249, 249, 249)',
        marginBottom: 24,
        paddingBottom: spacing[4],
    },
    card: {

        margin: 16,
        padding: 24,
        height: 206,
        borderRadius: 8,
        backgroundColor: 'black',
    },
    outHologram: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    hologram: {
        width: 44,
        height: 36,
        borderRadius: 8,
        backgroundColor: 'rgb(59,59,59)'
    },
    cardNummer: {
        marginTop: 31,
        color: color.palette.lightGrey,
        fontFamily: 'SegoeUI-Semibold',
        fontSize: 20,
        lineHeight: 24,
        textAlign: "center"
    },
    holderAndExpires: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 25,
    },
    textCardHolder: {
        fontSize: 9,
        fontFamily: 'SegoeUI-Regular',
        color: color.palette.lightGrey
    },
    textCardInput: {
        fontSize: 13,
        fontFamily: 'SegoeUI-Regular',
        color: color.palette.white,
        lineHeight: 18,
    },
    outOval: {
        flexDirection: 'row'
    },
    oval: {
        marginHorizontal: 4,
        width: 7,
        height: 7,
        borderRadius: 9999,
    },
    inputInfor: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 16,
        marginRight: 16,
        marginBottom: 11,
        borderBottomColor: 'rgb(239, 239, 244)',
        borderBottomWidth: 1,
        paddingBottom: 11,

    },
    textTittleInfor: {
        fontSize: 17,
        fontFamily: 'SegoeUI-Regular',
        lineHeight: 22,
        color: color.palette.black,
    },
    input: {
        backgroundColor: 'green',
        marginLeft: 30,
        padding: 0,
        flex: 1,
    },
    textInputInfor: {
        textAlign: 'right',
        fontFamily: 'SegoeUI-Regular',
        fontSize: 17,
        lineHeight: 22,
        color: color.palette.lighterGrey,
    },
    button: {
        marginHorizontal: spacing[3],
        marginTop: 78,
        backgroundColor: color.palette.main,
        height: 50,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
    },
    textButton: {
        fontSize: 17,
        lineHeight: 22,
        fontFamily: 'SegoeUI-Semibold',
        color: color.palette.white
    },
});

export default styles;
