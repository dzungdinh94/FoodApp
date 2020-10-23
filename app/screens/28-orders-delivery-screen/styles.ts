import {StyleSheet} from 'react-native';
import { color } from '../../theme';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'rgb(249, 249, 249)'
    },
    top: {
        flex: 0.7,
        alignItems: 'center',
        paddingLeft: 59,
        paddingRight: 59
    },
    bag: {
        marginTop: 8,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    choNhanHang: {
        justifyContent: 'center',
        flex: 1,
    },
    don: {
        justifyContent: 'center',
        flex: 1
    },
    textNhanHang: {
        fontFamily: 'SegoeUI-Bold',
        fontSize: 24,
        textAlign: 'center',
        lineHeight: 28,
        fontWeight: 'bold'
    },
    textWait: {
        fontFamily: 'SegoeUI-Regular',
        fontSize: 17,
        textAlign: 'center',
        lineHeight: 22,
        color: `rgb(102, 102, 102)`,
        marginTop: 8
    },

    textMaDon: {
        fontFamily: 'SegoeUI-Semibold',
        fontSize: 17,
        textAlign: 'center',
        lineHeight: 22,
        fontWeight: 'bold'
    },
    textTime: {
        fontFamily: 'SegoeUI-Regular',
        fontSize: 15,
        textAlign: 'center',
        lineHeight: 20,
        color: `rgb(102, 102, 102)`,
    },
    dow: {
        flex: 1,

        paddingLeft: 16,
        paddingRight: 16
    },
    thongTin: {
        backgroundColor: 'white',
        width: 343,
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
        borderBottomWidth: 1
    },
    textTittle:{
        fontFamily: 'SegoeUI-Semibold',
        fontSize: 15,
        textAlign: 'left',
        lineHeight: 20,
        fontWeight: 'bold'
    },
    textSup:{
        fontFamily: 'SegoeUI-Regular',
        fontSize: 12,
        textAlign: 'left',
        lineHeight: 16,
        color: 'rgb(138, 138, 143)'
    },
    touchable:{
        marginTop:16,
        justifyContent: 'center',
        alignItems:'center',
        height:50,
        borderRadius:8,
        backgroundColor: 'rgb(147,194,47)'
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