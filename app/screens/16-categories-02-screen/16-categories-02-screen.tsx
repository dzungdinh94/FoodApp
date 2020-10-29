import React from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle } from "react-native"
import { Screen, Text } from "../../components"
import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color, spacing } from "../../theme"
import { Icon } from "react-native-elements"
import SimpleImage from "../../components/simpleImage/simple-image"
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler"
import screens from "../../navigation/screens"
import styles from "./styles"
//import Data
import { CatagoriesData } from "../../data"

const ROOT: ViewStyle = {
  backgroundColor: color.palette.white,
}

const Categories2RenderItem = ({ item }) => {
  const { title, total } = item
  return (
    <View style={styles.itemContainer}>
      <Icon name="fruit-watermelon" type="material-community" color={color.palette.main} />
      <Text style={styles.itemName}>{title}</Text>
      <Text style={styles.itemAmount}>{total} mặt hàng</Text>
    </View>
  )
}

export const Categories02Screen = observer(function Categories02Screen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()
  // OR
  // const rootStore = useStores()

  // Pull in navigation via hook
  const navigation = useNavigation()
  return (
    <Screen style={ROOT} preset="scroll">
      {/* Navigation Bar */}
      <View style={styles.navigationContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="navigate-before" type="material" size={45} style={{ left: -spacing[2] }} />
        </TouchableOpacity>
        <Icon name="dots-horizontal" type="material-community" size={35} />
      </View>
      {/* Content */}
      <View style={styles.contentContainer}>
        {/* Header */}
        <Text style={styles.headerText}>Danh mục</Text>
        {/* List Item */}
        <View style={styles.listItemContainer}>
          {CatagoriesData.map((item, index) => (
            <Categories2RenderItem key={index} item={item} />
          ))}
        </View>
      </View>
    </Screen>
  )
})
