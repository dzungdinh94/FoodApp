import React, { useEffect, useState } from "react"
import { TouchableOpacity } from "react-native"
import { Icon } from "react-native-elements"
import auth from "@react-native-firebase/auth"
import { createNewFavorite, getUserIdByEmail, removeFavorite } from "../../firebase/firestore"

//Styles Import
import { color } from "../../theme"
const FavoriteToogle = ({ size, productId, isLike }) => {
  const [like, setLike] = useState(isLike)

  const handleLike = async () => {
    let userId = await getUserIdByEmail(auth().currentUser.email)
    await createNewFavorite(productId, userId)
  }
  const handleDislike = async () => {
    let userId = await getUserIdByEmail(auth().currentUser.email)
    console.log(productId)
    console.log(userId)
    await removeFavorite(productId, userId)
  }
  const onClickLike = () => {
    setLike(true)
    handleLike()
  }
  const onClickDislike = () => {
    handleDislike()
    setLike(false)
  }
  useEffect(() => {
    setLike(isLike ? true : false)
  }, [])
  return (
    <TouchableOpacity onPress={() => (like ? onClickDislike() : onClickLike())}>
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
