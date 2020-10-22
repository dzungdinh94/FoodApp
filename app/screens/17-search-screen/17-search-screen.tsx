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
  const [searchText, setSearchText] = React.useState("")
  const [selectedType, setSelectedType] = React.useState(CatagoriesData[0].title)
  const [showFoodData, setShowFoodData] = React.useState(
    foodData.data().filter(({ type }) => type === CatagoriesData[0].title),
  )

  const handleData = (searchValue: string, filterTypeValue: string) => {
    let newData = foodData.data().filter(({ type }) => type === filterTypeValue)
    let searchData = newData.filter(({ name }) => name.toLowerCase().indexOf(searchValue) !== -1)
    return searchData
  }
  const handleClickType = (choiceType: string) => {
    setSelectedType(choiceType)
    setShowFoodData(handleData(searchText, choiceType))
  }

  const onChangeSearchText = (changeValue: string) => {
    setSearchText(changeValue)
    setShowFoodData(handleData(changeValue, selectedType))
  }
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()
  // OR
  // const rootStore = useStores()

  // Pull in navigation via hook
  const navigation = useNavigation()
  return (
    <Screen style={ROOT} preset="fixed">
      {/* Search Box */}
      <View style={styles.searchBoxContainer}>
        <View style={styles.searchBoxInputContainer}>
          <Icon name="search" type="ionicon" color={color.palette.gray200} size={17} />
          <TextInput
            style={styles.searchBoxInput}
            value={searchText}
            onChangeText={(value) => {
              onChangeSearchText(value.toLowerCase())
            }}
            placeholder="Tìm kiếm"
            placeholderTextColor={color.palette.gray140}
          />
          <TouchableOpacity onPress={() => onChangeSearchText("")}>
            <Icon name="close" type="material" color={color.palette.gray200} size={17} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.searchBoxCancelText}>Hủy</Text>
        </TouchableOpacity>
      </View>
      {/* Menu Type Of Food */}
      <View style={styles.menuTypeFood}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={CatagoriesData}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={() => handleClickType(item.title)}>
                <Text
                  style={
                    item.title === selectedType
                      ? styles.catagoriesItemActive
                      : styles.catagoriesItem
                  }
                >
                  {item.title}
                </Text>
              </TouchableOpacity>
            )
          }}
        />
      </View>

      {/* List Item */}
      <FlatList
        style={styles.listItem}
        data={showFoodData}
        keyExtractor={(item) => item.name}
        renderItem={({ item, index }) => <SearchItem food={item} key={item.name}></SearchItem>}
      />
    </Screen>
  )
})
