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
       marginHorizontal:16
   },
   Image:{
    marginRight:'auto',
    marginLeft:'auto',
    marginTop:32
},
// container:{
//     flex:1,
//     flexDirection:'row',
//     top:24,
//     marginHorizontal:16
// },
container:{
    flex:1,
    flexWrap:'wrap',
    flexDirection:'row',
    marginTop:24,
    
},
cover:{
    width:Dimensions.get('window').width -230,
    height:163, 
    backgroundColor:color.palette.white,
    borderRadius:10,
    borderColor:'rgb(239,239,244)',
    borderWidth:1.5,
    marginLeft:16,
    marginBottom: 16
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