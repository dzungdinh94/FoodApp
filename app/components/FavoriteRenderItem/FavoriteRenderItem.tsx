import React from "react"

import { Text } from ".."

// import { useStores } from "../../models"

import { View } from "react-native"

import SimpleImage from "../simpleImage"
import FavoriteToogle from "../FavoriteToogle/FavoriteToogle"

import styles from "./styles"
import { spacing } from "../../theme"
import { TouchableOpacity } from "react-native-gesture-handler"

const FavoriteRenderItem = ({ onPressItem }) => {
  const fixWidthImage = 163
  const fixHeightImage = 163
  const marginIcon = fixWidthImage - 40

  const nameOfFood = "Bông cải xanh"
  const priceOfFood = 20
  return (
    <TouchableOpacity onPress={onPressItem} style={{ marginTop: spacing[4] }}>
      {/* Images */}
      <View style={[styles.imageContainer, { width: fixWidthImage, height: fixHeightImage }]}>
        <SimpleImage width={fixWidthImage} height={fixHeightImage} />
        {/* FavortiteToggle */}
        <View style={{ left: marginIcon }}>
          <FavoriteToogle />
        </View>
      </View>
      {/* Details */}
      <View style={[styles.DetailContainer, { width: fixWidthImage }]}>
        <Text style={styles.nameText}>{nameOfFood}</Text>
        <Text style={styles.priceText}>{20}K</Text>
      </View>
    </TouchableOpacity>
  )
}

export default FavoriteRenderItem
