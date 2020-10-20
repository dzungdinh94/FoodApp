import React, { useState } from 'react'
import { View, TouchableOpacity,} from "react-native"
import { Icon } from 'react-native-elements'
const LikeHeart = ()=>{
    const [changecolor,oldcolor] = React.useState(false)
    const changeColor = () => {
        oldcolor(changecolor?false:true)
    }

  return (
    
    <View style={{width:30,height:30,position:'absolute',top:12, right:20}}>
    <TouchableOpacity onPress={changeColor}>
      <Icon reverse name='heart' type='fontisto' 
        color={(changecolor) ?'rgb(252,31,74)':'white'} 
        reverseColor={(changecolor)?'white':'rgb(200,199,204)'} 
        size={10}/> 
    </TouchableOpacity>
    </View>
   
  )
}
export default LikeHeart