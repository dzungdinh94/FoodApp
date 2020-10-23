import React from "react"

// import { useStores } from "../../models"

import { View } from "react-native"

import SimpleImage from "../simpleImage"
import FavoriteToogle from "../FavoriteToogle/FavoriteToogle"

import styles from "./styles"
import { spacing } from "../../theme"
import { TouchableOpacity } from "react-native-gesture-handler"

const DetailsScreenCarousel = ({}) => {
  const fixHeightImage = 396

  return (
    <View>
      <TouchableOpacity>
        {/* Images */}
        <View style={[styles.imageContainer, { height: fixHeightImage }]}></View>
      </TouchableOpacity>
      {/* FavortiteToggle */}
      <View style={{ position: "absolute", right: spacing[2], top: spacing[2] }}>
        <FavoriteToogle size={15} />
      </View>
    </View>
  )
}

export default DetailsScreenCarousel
