import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    btncontainer1: {
        flexDirection: "row",
        height:40,
        width:'80%',
        backgroundColor:'rgb(239,239,244)',
        marginLeft:16,
        marginTop:8,
        borderRadius:8,
    },
    icon:{
        color:'rgb(239,239,244)',
        padding:8,
        marginLeft:5,
    },
    text:{
        color:'rgb(102,102,102)',
        fontSize:17,
        marginLeft:30,
        marginTop:10,
    }
});
