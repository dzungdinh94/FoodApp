import { color } from "../../theme"
import {StyleSheet, Dimensions} from 'react-native'
export default StyleSheet.create({
   background:{
       backgroundColor:color.palette.white,
       width:163,
       height:163,
       borderWidth:1.5,
       borderColor:color.palette.border,
       borderRadius:10,
   },
   header:{
       color:color.palette.black,
       fontWeight:'bold',
       fontSize:34,
       marginHorizontal:16,
       marginBottom:16
   },
   Image:{
    marginRight:'auto',
    marginLeft:'auto',
    marginTop:32
},
container:{
    flex:1,
    flexDirection:'row',
    marginHorizontal:8
},
cover:{
    height:163,
    backgroundColor: color.palette.white,
    borderRadius: 10,
    borderColor: 'rgb(239,239,244)',
    borderWidth: 1,
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    margin:8
},
price:{
    top:12,
    color:color.palette.textgray,
    fontSize:13,
    textAlign:'center'
},
name:{
    top:12,
    color:color.palette.black,
    fontWeight:'bold',
    textAlign:'center'
}
})