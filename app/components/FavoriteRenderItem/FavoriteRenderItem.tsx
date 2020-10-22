import React from "react"

import { Text } from ".."

// import { useStores } from "../../models"

import { View } from "react-native"

import FavoriteToogle from "../FavoriteToogle/FavoriteToogle"

import styles from "./styles"
import { spacing, distance } from "../../theme"
import { TouchableOpacity } from "react-native-gesture-handler"

const FavoriteRenderItem = ({ onPressItem }) => {
  const fixWidthImage = distance.windowWidth / 2 - 24
  const fixHeightImage = 163

  const nameOfFood = "Bông cải xanh"
  return (
    <View>
      <TouchableOpacity onPress={onPressItem} style={styles.mainContainer}>
        {/* Images */}
        <View
          style={[styles.imageContainer, { width: fixWidthImage, height: fixHeightImage }]}
        ></View>
        <View style={[styles.DetailContainer, { width: fixWidthImage }]}>
          <Text style={styles.nameText}>{nameOfFood}</Text>
          <Text style={styles.priceText}>{20}K</Text>
        </View>
      </TouchableOpacity>
      {/* FavortiteToggle */}
      <View style={{ position: "absolute", top: spacing[4], right: 0 }}>
        <FavoriteToogle size={10} />
      </View>
      {/* Details */}
    </View>
  )
}

export default FavoriteRenderItem
