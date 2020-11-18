import React, { useEffect } from "react"
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
import { CATEGORIES_COLLECTION, PRODUCTS_COLLECTION } from "../../firebase/firestore"
import { getAllDataFromCollection } from "../../firebase/firestoreFunction"

const ROOT: ViewStyle = {
  backgroundColor: color.palette.white,
  flex: 1,
}

const SearchItem = ({ food, type }) => {
  const { name, price } = food
  return (
    <View style={styles.searchItemBontainer}>
      {/*Part1: Details */}
      <View style={styles.searchItemDetailsContainer}>
        {/* Details */}
        <View style={{ height: 64, justifyContent: "space-between" }}>
          <Text style={styles.searchItemTypeText}>{type}</Text>
          <Text style={styles.searchItemNameText}>{name}</Text>
          <Text style={styles.searchItemPriceText}>{price}K</Text>
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
  const [catagoriesData, setCatagoriesData] = React.useState([])
  const [productsData, setProductsData] = React.useState([])
  const [selectedType, setSelectedType] = React.useState("")
  const [selectedCartId, setSelectedCartId] = React.useState("")
  const [showFoodData, setShowFoodData] = React.useState([])

  const handleShowDataByTextValue = (searchValue: string, choiceCartId) => {
    let newData = productsData.filter(({ cartId }) => cartId === choiceCartId)
    let searchData = newData.filter(({ name }) => name.toLowerCase().indexOf(searchValue) !== -1)
    return searchData
  }
  const handleClickType = (choiceType: string, choiceCartId) => {
    setSelectedType(choiceType)
    setSelectedCartId(choiceCartId)
    setShowFoodData(handleShowDataByTextValue(searchText, choiceCartId))
  }

  const onChangeSearchText = (changeValue: string) => {
    setSearchText(changeValue)
    setShowFoodData(handleShowDataByTextValue(changeValue, selectedCartId))
  }

  useEffect(() => {
    let catagoriesDataGetResult
    let productsDataGetResult
    async function getCatagoriesData() {
      catagoriesDataGetResult = await getAllDataFromCollection(CATEGORIES_COLLECTION)
      setCatagoriesData(catagoriesDataGetResult)
      setSelectedCartId(catagoriesDataGetResult[0].cartId)
      setSelectedType(catagoriesDataGetResult[0].name)
    }
    async function getProductsData() {
      productsDataGetResult = await getAllDataFromCollection(PRODUCTS_COLLECTION)
      setProductsData(productsDataGetResult)
      setShowFoodData(
        productsDataGetResult.filter(({ cartId }) => cartId === catagoriesDataGetResult[0].cartId),
      )
    }
    //Get Catagories Data from FireBase
    getCatagoriesData()
    //Get Products Data from Firebase
    getProductsData()
  }, [])
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()
  // OR
  // const rootStore = useStores()

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
          data={catagoriesData}
          keyExtractor={(item) => item.cartId}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={() => handleClickType(item.name, item.cartId)}>
                <Text
                  style={
                    item.name === selectedType ? styles.catagoriesItemActive : styles.catagoriesItem
                  }
                >
                  {item.name}
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
        renderItem={({ item, index }) => {
          const type = catagoriesData.filter(({ cartId }) => cartId === item.cartId)[0].name
          return <SearchItem food={item} type={type} key={item.name}></SearchItem>
        }}
      />
    </Screen>
  )
})
