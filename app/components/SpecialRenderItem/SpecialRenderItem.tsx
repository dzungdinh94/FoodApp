import React from "react"

import { Text } from "../../components"

// import { useStores } from "../../models"

import { View } from "react-native"

import SimpleImage from "../../components/simpleImage"
import FavoriteToogle from "../../components/FavoriteToogle/FavoriteToogle"

import styles from "./styles"


const SpecialRenderItem = ({ type, title, price }) => {
  return (
    <View>
      {/* Images */}
      <View style={styles.imageContainer}>
        <SimpleImage width={122} height={122} />
        {/* FavortiteToggle */}
        <View style={styles.favoriteToggleContainer}>
          <FavoriteToogle />
        </View>
      </View>
      {/* Details */}
      <View>
        <Text style={styles.text}>{type}</Text>
        <Text style={styles.highlightText}>{title}</Text>
        <Text style={styles.text}>{price} đ</Text>
      </View>
    </View>
  )
}

export default SpecialRenderItem
