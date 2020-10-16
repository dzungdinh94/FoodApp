import React from "react"

// import { useStores } from "../../models"

import { View } from "react-native"

import SimpleImage from "../simpleImage"
import FavoriteToogle from "../FavoriteToogle/FavoriteToogle"

import styles from "./styles"
import { spacing } from "../../theme"
import { TouchableOpacity } from "react-native-gesture-handler"

const DetailsScreenCarousel = ({}) => {
  const fixWidthImage = 343
  const fixHeightImage = 396
  const marginIcon = fixWidthImage - 48

  return (
    <TouchableOpacity style={{ marginTop: spacing[4], alignSelf: "center" }}>
      {/* Images */}
      <View style={[styles.imageContainer, { width: fixWidthImage, height: fixHeightImage }]}>
        <SimpleImage width={fixWidthImage} height={fixHeightImage} />
        {/* FavortiteToggle */}
        <View style={{ left: marginIcon }}>
          <FavoriteToogle size={15} />
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default DetailsScreenCarousel
