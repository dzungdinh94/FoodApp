import React, { useEffect, useState } from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle } from "react-native"
import { Text } from "../../components"
import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"
import { Icon } from "react-native-elements"
import { FlatList, ScrollView, TouchableOpacity } from "react-native-gesture-handler"
import screens from "../../navigation/screens"
import styles from "./styles"
import FavoriteRenderItem from "../../components/FavoriteRenderItem/FavoriteRenderItem"

import auth from "@react-native-firebase/auth"
import firestore from "@react-native-firebase/firestore"
import {
  FAVORITES_COLLECTION,
  getFavoriteDataByEmail,
  PRODUCTS_COLLECTION,
} from "../../firebase/firestore"
import { product } from "ramda"

const ROOT: ViewStyle = {
  backgroundColor: color.palette.white,
  flex: 1,
}

let DATA = [{
  name: 'Bông cải xanh',
  price: '20k',
},
{
  name: 'Đu đủ',
  price: '20k',

},
{
  name: 'Chuối',
  price: '20k',

},
{
  name: 'Cà rốt organic',
  price: '20k',

},
{
  name: 'Bông cải xanh',
  price: '20k',
},
{
  name: 'Bông cải xanh',
  price: '20k',
  id:2
},
{
  name: 'Bông cải xanh',
  price: '20k'
},]


export const FavoritesScreen = observer(function FavoritesScreen() {
  const [favoriteData, setFavoriteData] = useState([])
  const navigation = useNavigation()
  async function loadingFavoriteData() {
    let data = await getFavoriteDataByEmail(auth().currentUser.email)
    //Get favorite product data
    let productIds = []
    for (let favorite of data) {
      productIds.push(favorite.productId)
    }
    console.log(productIds)
    let productDatas = []
    let productGetDatas = await firestore()
      .collection(PRODUCTS_COLLECTION)
      .where("productId", "in", productIds)
      .get()
    for (let productData of productGetDatas.docs) {
      productDatas.push(productData.data())
    }
    //Merge data
    let mergeData = []
    for (let favData of data) {
      let newData = {}
      for (let product of productDatas) {
        if (favData.productId === product.productId) {
          newData = { ...favData, ...product }
        }
      }
      mergeData.push(newData)
    }
    console.log(mergeData)
    setFavoriteData(mergeData)
  }
  useEffect(() => {
    const subscriber = firestore()
      .collection(FAVORITES_COLLECTION)
      .onSnapshot(() => {
        loadingFavoriteData()
      })

    // Unsubscribe from events when no longer in use

    return () => subscriber()
  }, [])
  return (
    <View style={ROOT}>
      {/* Navigation Bar*/}
      <View style={styles.navigationContainer}>
        <TouchableOpacity>
          <Text style={styles.navigationText}>Chỉnh sửa</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="search" type="ionicon" color={color.palette.black} size={19} />
        </TouchableOpacity>
      </View>
      {/* Header */}
      <Text style={styles.headerText}>Danh sách yêu thích</Text>
      {/* Sort Control Panel */}
      <View style={styles.SortControlPanelContainer}>
        {/* Sort Button */}
        <View style={styles.sortButtonContainer}>
          <TouchableOpacity style={styles.sortButton}>
            <Icon name="sort" type="font-awesome" size={20} color={color.palette.gray100} />
            <Text style={styles.sortButtonText}>Sắp xếp</Text>
          </TouchableOpacity>
        </View>
        {/* Filter Button */}
        <View style={styles.sortButtonContainer}>
          <TouchableOpacity
            style={styles.filterButton}
            onPress={() => navigation.navigate(screens.FilterScreen)}
          >
            <Icon name="filter" type="font-awesome-5" size={14} color={color.palette.gray100} />
            <Text style={styles.filterButtonText}>Lọc</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* Favorite List */}
      <View style={styles.favoriteListContainer}>
        <FlatList
          keyExtractor={(item) => item.favoriteId}
          numColumns={2}
          data={favoriteData}
          refreshing={true}
          onRefresh={() => {
            console.log("refresing")
          }}
          renderItem={({ index, item }) => (
            <FavoriteRenderItem
              favProduct={item}
              index={index}
              onPressItem={() =>
                navigation.navigate(screens.ProductDetailScreen, { product: item })
              }
            />
          )}
        />
      </View>
    </View>
  )
})
//done