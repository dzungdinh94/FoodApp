import React from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle } from "react-native"
import { Screen, Text } from "../../components"
import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color, spacing } from "../../theme"
import styles from "./styles"
import { Icon } from "react-native-elements"
import SimpleImage from "../../components/simpleImage"
import { FlatList, TextInput, TouchableOpacity } from "react-native-gesture-handler"
//Test Data
import { CatagoriesData, foodData } from "../../data"

const ROOT: ViewStyle = {
  backgroundColor: color.palette.white,
  flex: 1,
}

const SearchItem = ({ food }) => {
  const { name, type, Price } = food
  return (
    <View style={styles.searchItemBontainer}>
      {/*Part1: Details */}
      <View style={styles.searchItemDetailsContainer}>
        {/* Details */}
        <View style={{ height: 64, justifyContent: "space-between" }}>
          <Text style={styles.searchItemTypeText}>{type}</Text>
          <Text style={styles.searchItemNameText}>{name}</Text>
          <Text style={styles.searchItemPriceText}>{Price}K</Text>
        </View>
      </View>
      {/* Part2:Image*/}
      <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }}>
        {/* Image */}
        <View style={styles.searchItemImageContainer}>
          <SimpleImage width={64} height={64} />
        </View>
      </TouchableOpacity>
    </View>
  )
}

export const SearchScreen = observer(function SearchScreen() {
  return (
    <Screen style={ROOT} preset="scroll">
      <Text preset="header" text="heee" />
    </Screen>
  )
})
