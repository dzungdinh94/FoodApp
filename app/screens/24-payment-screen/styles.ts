import { StyleSheet } from 'react-native';

import { color, spacing } from '../../theme';

const styles = StyleSheet.create({

    hearder: {

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
        color: 'rgb(102, 102, 102)'
    },
    tittle: {
        height: 41,
        marginLeft: 16,
        marginTop: 15,
        justifyContent: 'center',
    },

    textThanhToan: {
        fontFamily: 'AbhayaLibre-Bold',
        fontSize: 34,
        lineHeight: 41,
    },
    listCard: {
        flexDirection: 'row',
        height: 54,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textListCard: {
        justifyContent: 'center',
        marginLeft: 8,
        height: 29,
        borderRadius: 14.5,
        backgroundColor: 'rgb(239,239,244)',
    },
    textCard: {
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 13,
        fontFamily: 'SegoeUI-Regular',
        lineHeight: 18,
        color: 'rgb(102,102,102)'
    },
    inforCard: {
        flexDirection: 'row',
        height: 261,
        backgroundColor: 'rgb(249, 249, 249)',
        marginBottom: 24,
    },
    card: {
        padding: 24,
        margin: spacing[2],
        height: 206,
        width: 343,
        borderRadius: 8,
        backgroundColor: 'black',

    },
    hologram: {
        width: 44,
        height: 36,
        borderRadius: 8,
        backgroundColor: 'rgb(59,59,59)'
    },
    inputInfor: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
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
    textInputInfor: {
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
        alignItems: 'center'
    },
    textButton: {
        fontSize: 17,
        lineHeight: 22,
        fontFamily: 'SegoeUI-Semibold',
        color: color.palette.white
    },
});

export default styles;
