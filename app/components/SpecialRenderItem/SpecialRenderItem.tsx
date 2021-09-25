import React from "react"

import { Text } from "../../components"

// import { useStores } from "../../models"

import { View } from "react-native"

import SimpleImage from "../../components/simpleImage"
import FavoriteToogle from "../../components/FavoriteToogle/FavoriteToogle"

import styles from "./styles"
import firestore, { firebase } from '@react-native-firebase/firestore'
import auth from '@react-native-firebase/auth'
const SpecialRenderItem = ({ type, title, price,id}) => {
  const saveData = async () => {
     const uid = await auth().currentUser.uid
     const save = await firestore().collection("Favorite").doc().set({
       productID:id,
       userID: uid
     })
  }
  const deleteData = async () => {
    await firestore().collection("Favorite").doc(id).update({
       
    })
  }
  return (
    <View>
      {/* Images */}
      <View style={styles.imageContainer}>
        <SimpleImage width={122} height={122} />
        {/* FavortiteToggle */}
        <View style={styles.favoriteToggleContainer}>
          <FavoriteToogle handleClick={saveData} deleteClick={deleteData} />
        </View>
      </View>
      {/* Details */}
      <View>
        <Text style={styles.text}>{type}</Text>
        <Text style={styles.highlightText}>{title}</Text>
        {(price < 1000)? <Text style={styles.text}>{price} triệu</Text> : 
        <Text style={styles.text}>{price} đ</Text>
        }
      </View>
    </View>
  )
}

export default SpecialRenderItem
