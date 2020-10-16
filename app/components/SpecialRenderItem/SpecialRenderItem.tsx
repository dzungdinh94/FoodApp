import React from "react"

import { Text } from "../../components"

// import { useStores } from "../../models"

import { View } from "react-native"

import SimpleImage from "../../components/simpleImage"
import FavoriteToogle from "../../components/FavoriteToogle/FavoriteToogle"

import styles from "./styles"

const SpecialRenderItem = () => {
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
        <Text style={styles.text}>Rau</Text>
        <Text style={styles.highlightText}>Mù tạt xanh</Text>
        <Text style={styles.text}>Giá từ 5.000đ</Text>
      </View>
    </View>
  )
}

export default SpecialRenderItem
