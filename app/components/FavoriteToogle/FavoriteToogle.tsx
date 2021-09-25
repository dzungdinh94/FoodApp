import React, { useState } from "react"
import { TouchableOpacity } from "react-native"
import { Icon } from "react-native-elements"

//Styles Import
import { color } from "../../theme"
const FavoriteToogle = ({ size, handleClick,deleteClick}) => {
  const [like, setLike] = useState(false)

  return (
    <TouchableOpacity onPress={() => {
      if(like){
        setLike(false)
        deleteClick()
      }else{
        setLike(true)
        handleClick()
      }
    }}>
       <Icon
        reverse={true}
        name="heart"
        type="fontisto"
        color={like ? color.palette.pink : "white"}
        reverseColor={like ? "white" : color.palette.lightGrey}
        size={size ? size : 10}
        
      />  
    </TouchableOpacity>
  )
}

export default FavoriteToogle
