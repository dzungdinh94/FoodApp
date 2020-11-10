import React, { useEffect } from "react"

// import { useStores } from "../../models"

import { View } from "react-native"

import SimpleImage from "../simpleImage"
import FavoriteToogle from "../FavoriteToogle/FavoriteToogle"

import styles from "./styles"
import { spacing } from "../../theme"
import { TouchableOpacity } from "react-native-gesture-handler"
import { Image } from "react-native-elements"
import auth from "@react-native-firebase/auth"
import firestore from "@react-native-firebase/firestore"
import { FAVORITES_COLLECTION, getUserIdByEmail } from "../../firebase/firestore"
import { async } from "validate.js"

const DetailsScreenCarousel = ({ product, isLike }) => {
  const fixHeightImage = 396
  const [isLikeState, setIsLikeState] = React.useState(isLike)
  const { image, productId } = product

  console.log(isLikeState, "Detail Screen Carousel")
  return (
    <View>
      <TouchableOpacity>
        {/* Images */}
        <View style={[styles.imageContainer, { height: fixHeightImage }]}>
          <Image
            source={image}
            style={{ width: fixHeightImage, height: fixHeightImage, zIndex: 0 }}
          />
        </View>
      </TouchableOpacity>
      {/* FavortiteToggle */}
      <View style={{ position: "absolute", right: spacing[2], top: spacing[2] }}>
        {!isLikeState ? null : (
          <FavoriteToogle size={15} productId={productId} isLike={isLikeState} />
        )}
      </View>
    </View>
  )
}

export default DetailsScreenCarousel
