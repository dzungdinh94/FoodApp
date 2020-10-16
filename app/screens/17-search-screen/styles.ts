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
    },
    btncontainer2:{       
        flex:0.1,
    },
    border:{
        borderRadius:20,
        backgroundColor:'rgb(239,239,244)',
        marginTop:18,
        marginLeft:10,
        width:75,
        height:35,
    },
    TextBorder:{
        marginTop:6,
        color:'rgb(102,102,102)',
        textAlign:'center',
    },
    btncontainer3:{
        flex:1,
    },
    nameFood:{
        fontSize:13,
        color:'rgb(147,194,47)',
    },
    titleFood:{
        fontSize:15,
        color:'black',
    },
    priceFood:{
        fontSize:15,
        color:'rgb(102,102,102)',
    },
    row: {
        padding: 4,
        borderBottomColor:'rgb(239,239,244)',
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginLeft: 16,
        paddingBottom:16,
        flex: 1,
        flexDirection:'row',
      },
      row1: {
        padding: 4,
        borderBottomColor:'rgb(239,239,244)',
        borderBottomWidth: StyleSheet.hairlineWidth,
      },
      image:{
          width:'100%',
          flex: 1,
      },
      btnImage:{
        width:64,
        height:64,
        borderRadius:8,
        marginLeft:220,
      }
});
