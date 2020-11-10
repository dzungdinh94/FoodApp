import React from "react"

import { Text } from ".."

// import { useStores } from "../../models"

import { View } from "react-native"

import FavoriteToogle from "../FavoriteToogle/FavoriteToogle"

import styles from "./styles"
import { spacing, distance } from "../../theme"
import { TouchableOpacity } from "react-native-gesture-handler"
import { Image } from "react-native-elements"

const FavoriteRenderItem = ({ onPressItem, favProduct, index }) => {
  const fixWidthImage = distance.windowWidth / 2 - 24
  const fixHeightImage = 163
  const { name, price, image, productId } = favProduct
  return (
    <View style={[styles.mainContainer, { marginRight: index % 2 === 1 ? 0 : spacing[4] }]}>
      <TouchableOpacity onPress={onPressItem}>
        {/* Images */}
        <View
          style={[
            styles.imageContainer,
            {
              width: fixWidthImage,
              height: fixHeightImage,
            },
          ]}
        >
          <Image source={image} style={{ width: fixHeightImage + 20, height: fixWidthImage }} />
        </View>
        <View style={[styles.DetailContainer, { width: fixWidthImage }]}>
          <Text style={styles.nameText}>{name}</Text>
          <Text style={styles.priceText}>{price}K</Text>
        </View>
      </TouchableOpacity>
      {/* FavortiteToggle */}
      <View style={{ position: "absolute", top: 0, right: 0 }}>
        <FavoriteToogle productId={productId} size={10} isLike={true} />
      </View>
      {/* Details */}
    </View>
  )
}
export default FavoriteRenderItem
