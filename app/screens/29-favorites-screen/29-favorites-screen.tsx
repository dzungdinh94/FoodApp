import React from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, View, TouchableOpacity, FlatList } from "react-native"
import { Screen, Text } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"

import { Icon } from 'react-native-elements'
import styles from "./styles"

import FavoriteItem from "../../components/favorite-item"
import { favorites } from './data'

const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
  flex: 1,
}

export const FavoritesScreen = observer(function FavoritesScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()
  // OR
  // const rootStore = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()

  const renderItemFavorites = ({ item }) => (
    <FavoriteItem />
  )

  return (
    <Screen style={ROOT} preset="scroll">
      <View style={styles.container}>
        <View style={styles.container1}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <TouchableOpacity style={{

            }}>
              <Text text='Chỉnh sửa' style={{ color: "rgb(102,102,102)" }} />
            </TouchableOpacity>

            <TouchableOpacity style={{

            }}>
              <Icon name="search" type="AntDesign" style={styles.icon} />
            </TouchableOpacity>
          </View>
          <Text preset="header" text="Danh sách yêu thích" style={styles.favorites} />
          <View style={{ flexDirection: "row", height: 44 }}>
            <TouchableOpacity style={{ flex: 1, flexDirection: "row", borderRightWidth: 1, borderRightColor: "rgb(239,239,244)", justifyContent: "center", alignItems: "center", padding: 12 }}>

              <View style={[{ transform: [{ rotate: "90deg" }] }]}>
                <Icon name="arrow-swap" type="fontisto" color='rgb(138,138,143)' />
              </View>

              <Text style={{ color: "rgb(102,102,102)" }} text="Sắp xếp"  ></Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flex: 1, flexDirection: "row", borderRightWidth: 1, borderRightColor: "rgb(239,239,244)", justifyContent: "center", alignItems: "center", padding: 12 }}>
              <Icon name="filter" type="fontisto" color='rgb(138,138,143)' />
              <Text style={{ color: "rgb(102,102,102)" }} text="Lọc" ></Text>
            </TouchableOpacity>

            {/* FlatList grid */}
            {/* https://aboutreact.com/example-of-gridview-using-flatlist-in-react-native/ */}

            <FlatList
              data={favorites}
              renderItem={renderItemFavorites}
              keyExtractor={item => item.index}
            />

          </View>
        </View>
      </View>

    </Screen>
  )
})
