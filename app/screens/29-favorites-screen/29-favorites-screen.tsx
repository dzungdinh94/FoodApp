import React from "react"
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

const ROOT: ViewStyle = {
  backgroundColor: color.palette.white,
  flex: 1,

}

let DATA = [{
  name: 'Bông cải xanh',
  price: '20k'
},
{
  name: 'Đu đủ',
  price: '20k'
},
{
  name: 'Chuối',
  price: '20k'
},
{
  name: 'Cà rốt organic',
  price: '20k'
},
{
  name: 'Bông cải xanh',
  price: '20k'
},
{
  name: 'Bông cải xanh',
  price: '20k'
},
{
  name: 'Bông cải xanh',
  price: '20k'
},]


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
