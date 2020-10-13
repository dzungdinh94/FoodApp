import {StyleSheet} from 'react-native'
export default StyleSheet.create({
    flexRow: {
        display: 'flex',
        flexDirection: 'row'
    },
    flexColumn: {
        display: 'flex',
        flexDirection: 'column',
    },
    title:{
        fontSize: 40,
        fontWeight: 'bold',
        marginTop: 16,
        marginBottom: 30,
        color: "black"
    },
    picWrap: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'gray'
    },
    notiPic: {
        width: 80,
        height: 80,
    },
    search:{
        flexDirection: 'row-reverse'
    },
    notiText: {
        
        borderBottomColor: "rgb(239 ,239 ,244)",
        borderBottomWidth: .5,
    },
    text: {
        paddingTop: 10,
        letterSpacing: 1,
        lineHeight: 20,
        fontSize: 18,
        color: 'black',
    },
    subtext:{
        fontSize: 16,
        color: 'rgb(138,138,143)'
    },
    notiContainer: {
        marginHorizontal: 16,
        marginBottom: 17,
        
    },
    notiText: {
        marginLeft: 8,
    }
})
