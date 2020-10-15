import { StyleSheet } from 'react-native';
import { color, spacing, typography } from '../../theme';

const styles = StyleSheet.create({
    heard: {
        alignItems: 'center',
        marginTop: 11,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: spacing[5]
    },
    textHeard: {
        fontFamily: 'SegoeUI-Regular',
        fontSize: 17,
        color: color.palette.lightGrey,

    },
    tittle: {
        fontFamily: 'AbhayaLibre-Bold',
        fontSize: 34,
        lineHeight: 41,
        fontWeight: 'bold',
        paddingHorizontal: spacing[5]
    },
    sortFilter: {
        flexDirection: 'row',
        marginTop: spacing[3],
        height: 44,
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
        lineHeight: 20,
        color: color.palette.lightGrey
    },
});

export default styles;