import React, { useState } from "react"
import { TouchableOpacity } from "react-native"
import { Icon } from "react-native-elements"

//Styles Import
import { color } from "../../theme"
const FavoriteToogle = () => {
  const [like, setLike] = useState(true)
  return (
    <TouchableOpacity onPress={() => (like ? setLike(false) : setLike(true))}>
      <Icon
        reverse={true}
        name="heart"
        type="fontisto"
        color={like ? color.palette.pink : "white"}
        reverseColor={like ? "white" : color.palette.lightGrey}
        size={10}
      />
    </TouchableOpacity>
  )
}

export default FavoriteToogle
