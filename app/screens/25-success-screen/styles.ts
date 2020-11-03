import {StyleSheet} from 'react-native';
import { color } from '../../theme';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    thanhcong: {
        flex: 0.8,
        justifyContent: 'center',
        alignItems: 'center',
        height: 41,
        width: 202,

    },
    text: {
        fontSize: 36,
        lineHeight: 41,
        letterSpacing: 0,
        color: 'black',
        textAlign: 'left',
        fontFamily: "AbhayaLibre",
        fontWeight: 'bold'
    },
    animated: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 128,
        height: 128,
    },
    camon: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 258,
        height: 102,

    },
    camon1: {
        fontSize: 20,
        lineHeight: 28,
        textAlign: 'center',
        fontFamily: 'SegoeUI-Bold',
        fontWeight: 'bold',
        color: 'black'
    },
    camon2: {
        marginTop: 8,
        lineHeight: 27,
        fontSize: 17,
        textAlign: 'center',
        color: '#666666',
        fontFamily: 'SegoeUI-Regular',
    },
    button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    touchable1: {
        width: 343,
        height: 50,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: 'center',
        marginBottom: 16,
        backgroundColor: "#93C22F",
    },
    touchable2: {
        width: 343,
        height: 50,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: 'center',
        marginBottom: 16,
        borderWidth:1,
        borderColor: "#93C22F"
    },
    texttouch1:{
        fontFamily: 'SegoeUI-Semibold',
        lineHeight: 22,
        fontSize: 17,
        textAlign: 'center',
        color: 'white',
    },
    texttouch2:{
        fontFamily: 'SegoeUI-Semibold',
        lineHeight: 22,
        fontSize: 17,
        textAlign: 'center',
        color: 'black'
    }
});

export default styles;
