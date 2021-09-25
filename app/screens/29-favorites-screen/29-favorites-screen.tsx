import React, { useEffect, useState } from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle } from "react-native"
import { Text } from "../../components"
import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"
import { Icon } from "react-native-elements"
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler"
import screens from "../../navigation/screens"
import styles from "./styles"
import FavoriteRenderItem from "../../components/FavoriteRenderItem/FavoriteRenderItem"
import firestore from '@react-native-firebase/firestore'
import auth from '@react-native-firebase/auth';
const ROOT: ViewStyle = {
  backgroundColor: color.palette.white,
  flex: 1,

}



export const FavoritesScreen = observer(function FavoritesScreen() {
  const [product,setProduct] = React.useState([])
  const [favorite,setFavorite] = React.useState([])
  const getProduct = async () => {
    const list = []
    const get = await firestore().collection("Product").get()
    for(let item of get.docs){
      list.push(item.data())
    }
    setProduct(list)
  }
  
  const getFavorite = async () => {
    const newList = []
    const getData = await firestore().collection("Favorite").get()
    for(let newitem of getData.docs){
      newList.push(newitem.data())
    }
    setFavorite(newList)

  }
  useEffect(()=>{getFavorite()},[product])
   useEffect(()=>{getProduct()},[favorite])
  const navigation = useNavigation()
  return (
    <ScrollView style={ROOT}>
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
          {product.map((val)=>{
             const {id,name,price}=val
             for(let x of favorite){
               if(x.productID === id && x.userID === auth().currentUser.uid ){
                  return <FavoriteRenderItem key={x.id} name={name} price={price} onPressItem={() => navigation.navigate(screens.ProductDetailScreen)}  />
               }
             }
          })}
        
      </View>
    </ScrollView>
  )
})
//done