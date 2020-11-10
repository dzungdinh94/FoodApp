import {StyleSheet} from 'react-native';
import { color } from '../../theme';

const styles = StyleSheet.create({
    hearder: {
        marginLeft: 9,
        flexDirection: 'row',
        height: 23,
        marginTop: 11,
        marginRight: 16,
        justifyContent: 'space-between',

    },

    bag: {
        marginTop:20,
        justifyContent: 'center',
        alignItems: 'center',
    },

    textNhanHang: {
        fontFamily: 'SegoeUI-Bold',
        fontSize: 24,
        textAlign: 'center',
        lineHeight: 28,
        fontWeight: 'bold',
        marginTop:40
    },
    textWait: {
        fontFamily: 'SegoeUI-Regular',
        fontSize: 17,
        textAlign: 'center',
        lineHeight: 22,
        color: `rgb(102, 102, 102)`,
        marginTop: 8,
        marginHorizontal:59
    },

    textMaDon: {
        fontFamily: 'SegoeUI-Semibold',
        fontSize: 17,
        textAlign: 'center',
        lineHeight: 22,
        fontWeight: 'bold',
        marginTop:40,
    },
    textTime: {
        marginTop:4,
        fontFamily: 'SegoeUI-Regular',
        fontSize: 15,
        textAlign: 'center',
        lineHeight: 20,
        color: `rgb(102, 102, 102)`,
    },

    thongTin: {
        marginTop:40,
        marginHorizontal:16,
        backgroundColor: 'white',
        height: 219,
        paddingLeft: 16,
        borderRadius: 8,
        borderColor: '#DAD9DD',
        borderWidth: 1
    },
    listThongTin: {
        flex: 1,
        flexDirection: 'row',
        paddingTop: 16
    },
    icon: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 40,
        height: 40,
        borderRadius: 8,
        backgroundColor: 'rgb(249,249,249)',
        marginRight: 16
    },
    thongTinNhanHang: {
        flex: 1,
        borderBottomColor: '#DAD9DD',
        borderBottomWidth: 1,
    },
    textTittle:{
        fontFamily: 'SegoeUI-Semibold',
        fontSize: 15,
        textAlign: 'left',
        lineHeight: 20,
        fontWeight: 'bold'
    },
    textSup:{
        marginTop:4,
        fontFamily: 'SegoeUI-Regular',
        fontSize: 12,
        textAlign: 'left',
        lineHeight: 16,
        color: 'rgb(138, 138, 143)'
    },
    touchable:{
        marginTop:16,
        marginHorizontal:16,
        justifyContent: 'center',
        alignItems:'center',
        height:50,
        borderRadius:8,
        backgroundColor: 'rgb(147,194,47)',
        marginBottom:87,
    },
    textTouchable:{
        fontFamily: 'SegoeUI-Semibold',
        fontSize: 17,
        textAlign: 'center',
        lineHeight: 22,
        color: 'white'
    }
});

export default styles;