import React, { useEffect, useState } from "react"
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
import firestore from '@react-native-firebase/firestore'

const ROOT: ViewStyle = {
  backgroundColor: color.palette.white,
  flex: 1,
}

const SearchItem = ({ food }) => {
  const { name, type, price } = food
  return (
    <View style={styles.searchItemBontainer}>
      {/*Part1: Details */}
      <View style={styles.searchItemDetailsContainer}>
        {/* Details */}
        <View style={{ height: 64, justifyContent: "space-between" }}>
          <Text style={styles.searchItemTypeText}>{type}</Text>
          <Text style={styles.searchItemNameText}>{name}</Text>
          <Text style={styles.searchItemPriceText}>{price} đ</Text>
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
  const [FoodData,setFood] = useState([])
  const [CategoriesData,setCategoriesData] = useState([])
  const [selectedType, setSelectedType] = React.useState('')
  // renderfood
  const RenderFood = async () => {
    const list = []
    const getData = await firestore().collection("Product").get()
    for(let item of getData.docs){
       list.push(item.data())
    }
    setFood(list)
  }
  // renderCategory
  const RenderCategory = async () => {
    const newlist = []
    const get = await firestore().collection("category").get()
    for(let items of get.docs){
      newlist.push(items.data())
      newlist.sort((a,b)=> a.id - b.id)
    }
  
    setCategoriesData(newlist)
  }
  const [showFoodData, setShowFoodData] = React.useState([])
  React.useEffect(()=>{RenderCategory()},[])
  React.useEffect(()=>{RenderFood()},[CategoriesData])
  const dataSetUp = () => {
    const newarr = FoodData.map((item)=>{
       for(let x of CategoriesData){
         if(x.id == item.categoryID){
           item.type = x.name
         }
       }
       return item
     }
     ) 
     setShowFoodData(newarr)
  }
  
  React.useEffect(()=>{dataSetUp()},[FoodData])
  
  const handleData = (searchValue: string, filterTypeValue: string) => {
    let newData = FoodData.filter(({ categoryID }) =>{
      for(let x of CategoriesData){
        if(x.id === categoryID){
          return x.name === filterTypeValue
        }
      }
    })
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
          data={CategoriesData}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={() => handleClickType(item.name)}>
                <Text
                  style={
                    item.name === selectedType
                      ? styles.catagoriesItemActive
                      : styles.catagoriesItem
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
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) =>  <SearchItem food={item} key={item.id} ></SearchItem>}
      />
    </Screen>
  )
})
