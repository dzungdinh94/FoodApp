import React from "react"

import { Text } from "../../components"

// import { useStores } from "../../models"

import { View } from "react-native"

import SimpleImage from "../../components/simpleImage"
import FavoriteToogle from "../../components/FavoriteToogle/FavoriteToogle"

import styles from "./styles"
import { Image } from "react-native-elements"
import { createNewFavorite, removeFavorite, getUserIdByEmail } from "../../firebase/firestore"
import auth from "@react-native-firebase/auth"

const SpecialRenderItem = ({ product }) => {
  const { name, price, cartName, image, productId, isLike } = product

  return (
    <View>
      {/* Images */}
      <View style={styles.imageContainer}>
        <Image source={image} style={{ width: 122, height: 122, zIndex: 0 }} />
        {/* FavortiteToggle */}
        <View style={styles.favoriteToggleContainer}>
          <FavoriteToogle size={10} productId={productId} isLike={isLike} />
        </View>
      </View>
      {/* Details */}
      <View>
        <Text style={styles.text}>{cartName}</Text>
        <Text style={styles.highlightText}>{name}</Text>
        <Text style={styles.text}>{price}.000đ</Text>
      </View>
    </View>
  )
}

export default SpecialRenderItem
