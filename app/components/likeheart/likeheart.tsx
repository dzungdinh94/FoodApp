import React, { useState } from 'react'
import { observer } from "mobx-react-lite"
import { ViewStyle, View, TouchableOpacity,Image} from "react-native"
import { Icon } from 'react-native-elements'
import { Screen, Text } from ".."
import { color } from "../../theme"


const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
  flex: 1,
}

const LikeHeart = ()=>{
    const [changecolor,oldcolor] = React.useState('false')
    const changeColor = () => {
        oldcolor('false')
    }
  return (
    <Screen style={ROOT} preset="scroll">
    <View style={{width:30,height:30,position:'absolute',top:5, right:14}}>
    <TouchableOpacity onPress={changeColor}>
    { changecolor ? <Icon reverse name='heart' type='fontisto' 
        color='white' reverseColor='rgb(200,199,204)' 
         size={10}/> : <Icon reverse name='heart' type='fontisto' 
        color='rgb(252,31,74)' reverseColor='white' 
         size={10}/> }
    </TouchableOpacity>
    </View>
    </Screen>
  )
}
export default LikeHeart