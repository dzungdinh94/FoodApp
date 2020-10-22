import React from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle } from "react-native"
import { Button, Screen, Text } from "../../components"
import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color, spacing, distance } from "../../theme"
import { Icon } from "react-native-elements"
import SimpleImage from "../../components/simpleImage/simple-image"
import { ScrollView, TextInput, TouchableOpacity } from "react-native-gesture-handler"
import screens from "../../navigation/screens"
import styles from "./styles"
import ItemCounter from "../../components/ItemCounter/ItemCounter"
import FlipCard from "react-native-flip-card"
import RadioInput from "../../components/RadioInput"
import FavoriteRenderItem from "../../components/FavoriteRenderItem/FavoriteRenderItem"

const ROOT: ViewStyle = {
  backgroundColor: color.palette.white,
  flex: 1,
}

export const FavoritesScreen = observer(function FavoritesScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()
  // OR
  // const rootStore = useStores()

  // Pull in navigation via hook
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
          <Icon name="sort" type="font-awesome" size={20} color={color.palette.gray100} />
          <Text style={styles.sortButtonText}>Sắp xếp</Text>
        </View>
        {/* Filter Button */}
        <View style={styles.filterButtonContainer}>
          <Icon name="filter" type="font-awesome-5" size={14} color={color.palette.gray100} />
          <Text style={styles.filterButtonText}>Lọc</Text>
        </View>
      </View>
      {/* Favorite List */}
      <View style={styles.favoriteListContainer}>
        <FavoriteRenderItem onPressItem={() => navigation.navigate(screens.ProductDetailScreen)} />
        <FavoriteRenderItem onPressItem={() => navigation.navigate(screens.ProductDetailScreen)} />
        <FavoriteRenderItem onPressItem={() => navigation.navigate(screens.ProductDetailScreen)} />
        <FavoriteRenderItem onPressItem={() => navigation.navigate(screens.ProductDetailScreen)} />
        <FavoriteRenderItem onPressItem={() => navigation.navigate(screens.ProductDetailScreen)} />
        <FavoriteRenderItem onPressItem={() => navigation.navigate(screens.ProductDetailScreen)} />
        <FavoriteRenderItem onPressItem={() => navigation.navigate(screens.ProductDetailScreen)} />
        <FavoriteRenderItem onPressItem={() => navigation.navigate(screens.ProductDetailScreen)} />
        <FavoriteRenderItem onPressItem={() => navigation.navigate(screens.ProductDetailScreen)} />
      </View>
    </ScrollView>
  )
})
