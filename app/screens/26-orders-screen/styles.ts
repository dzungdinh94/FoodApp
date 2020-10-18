import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor:'white',
        padding:0,
    },
    container1: {
        paddingHorizontal: 16,
        paddingTop:16,
        borderBottomWidth: 1, 
        borderBottomColor: "rgb(239,239,244)",
        marginBottom: 8
    },
    icon:{
        color:'rgb(239,239,244)',
        // padding:8,
        // marginLeft: 300,
        justifyContent: "flex-start",
    },
    orders:{
        color:'black',
        fontSize:34,
        lineHeight: 41,
        textAlign: "left",
        marginBottom: 8,
        fontFamily: "SegoeUI",
        fontWeight: "bold",
        
        
    }
});