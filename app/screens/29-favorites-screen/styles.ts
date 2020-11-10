import { StyleSheet, Dimensions, PixelRatio } from 'react-native';
import { color, spacing, typography } from '../../theme';
const windowWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    heard: {
        alignItems: 'center',
        marginTop: 11,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
    },
    textHeard: {
        fontFamily: 'SegoeUI-Regular',
        fontSize: 17,
        color: color.palette.lightGrey,
        height: 23
    },
    tittle: {
        color: "black",
        fontFamily: 'AbhayaLibre-Bold',
        fontSize:  34,
        lineHeight:   41,
        marginTop:  13,
        marginLeft: 16,
    },
    sortFilter: {
        flexDirection: 'row',
        marginTop:  8,
        height:  44,
    },
    sort: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: color.palette.offWhite
    },
    textSort: {
        fontFamily: 'SegoeUI-Regular',
        fontSize: 15,
        lineHeight:  20,
        color: color.palette.lightGrey
    },
    listLike: {
        padding: 8,
    },
    background: {
        marginVertical:  8,
        marginHorizontal:  8,
        flex:1,
        height:223,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: color.palette.offWhite,
        paddingBottom:8,
    },
    mask: {
        flex:1,
        backgroundColor: color.palette.lighterGrey,
        borderTopStartRadius: 8,
        borderTopEndRadius: 8,
        borderTopWidth: 1,
        borderColor: color.palette.offWhite,
        alignItems: 'flex-end',
        marginBottom:4,
    },
    textMask: {
        marginTop:4,
        fontSize:15,
        fontFamily: 'SegoeUI-Regular',
        lineHeight:  20,
        marginLeft: 16,
    }
});

export default styles;