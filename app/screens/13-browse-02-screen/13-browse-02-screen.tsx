import React, { useEffect } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { Text } from "../../components"
import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color, spacing } from "../../theme"
import { View } from "react-native"
import { Icon, Image } from "react-native-elements"
import LinearGradient from "react-native-linear-gradient"
import Logo from "../../components/logo"
import { ScrollView } from "react-native"

import styles from "./style"
import { FlatList, TouchableOpacity } from "react-native-gesture-handler"
import screens from "../../navigation/screens"
import ItemCounter from "../../components/ItemCounter/ItemCounter"
import SpecialRenderItem from "../../components/SpecialRenderItem/SpecialRenderItem"
import SearchControlPanel from "../../components/SearchControlPanel/SearchControlPanel"
//firebase
import auth from "@react-native-firebase/auth"
import firestore from "@react-native-firebase/firestore"
import { getAllDataFromCollection } from "../../firebase/firestoreFunction"
import {
  CATEGORIES_COLLECTION,
  FAVORITES_COLLECTION,
  getUserIdByEmail,
  PRODUCTS_COLLECTION,
} from "../../firebase/firestore"
import { Unduplicated } from "../../utils/storage"

//redux
import { connect, useDispatch } from "react-redux"

const ROOT: ViewStyle = {
  backgroundColor: color.palette.white,
  flex: 1,
}

const GRADIENT_VALUE = [
  "rgba(100,100,100,0.4)",
  "rgba(100,100,100,0.4)",
  "rgba(0,0,0,0.7)",
  "rgba(0,0,0,1)",
]
//RenderItem
const CategoriesRenderItem = ({ name, image }) => {
  return (
    <View style={{ width: 138, height: 188, borderRadius: 8, marginRight: 15, overflow: "hidden" }}>
      <LinearGradient
        colors={GRADIENT_VALUE}
        style={{
          width: 138,
          height: 188,
          borderRadius: 8,
          marginRight: 15,
          position: "absolute",
          zIndex: 1,
        }}
      ></LinearGradient>
      <Image source={image} style={{ width: 138, height: 188, zIndex: 0 }} />
      <View style={{ position: "absolute", bottom: 14, left: spacing[4], zIndex: 2 }}>
        <Text style={{ color: "white", fontSize: 17, fontWeight: "bold" }}>{name}</Text>
        <Text style={{ color: "white", fontSize: 11, marginTop: spacing[1] }}>Giá từ 5.000đ</Text>
      </View>
    </View>
  )
}

const SearchRenderItem = ({ product, navigateTo, counterClick }) => {
  const { name, price, cartName, image } = product
  return (
    <View
      style={{
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        marginTop: 17,
      }}
    >
      {/* Part1:Image*/}
      <TouchableOpacity onPress={navigateTo} style={{ flexDirection: "row", alignItems: "center" }}>
        {/* Image */}
        <View
          style={{
            width: 80,
            height: 80,
            backgroundColor: "rgb(200,200,200)",
            borderRadius: 8,
            marginRight: 10,
            overflow: "hidden",
          }}
        >
          <Image source={image} style={{ width: 80, height: 80, zIndex: 0 }} />
        </View>
      </TouchableOpacity>
      {/*Part2: Counter */}
      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          flexGrow: 1,
          borderBottomWidth: 1,
          borderColor: color.palette.gray240,
          height: "100%",
          alignItems: "center",
          paddingVertical: spacing[4],
        }}
      >
        {/* Details */}
        <View>
          <Text style={{ color: color.palette.lightGrey, fontSize: 13, lineHeight: 18 }}>
            {cartName}
          </Text>
          <Text
            style={{
              color: "black",
              fontSize: 15,
              lineHeight: 20,
              fontWeight: "bold",
            }}
          >
            {name}
          </Text>
          {(price < 1000)? <Text style={{
              color: color.palette.lightGrey,
              fontSize: 13,
              lineHeight: 18,
              marginTop: spacing[1],
            }}
          >
            {price}.000đ
          </Text>:null}
        </View>

        {/* Counter Indicator */}
        <ItemCounter
          product={product}
          onClickAdd={() => counterClick(1)}
          onClickRemove={() => counterClick(-1)}
          startValue={0}
        />
      </View>
    </View>
  )
}

const ListFood = ({ title, renderItem, marginHorizontal, navigateTo }) => {
  return (
    <View
      style={{
        marginTop: 24,
      }}
    >
      {/* List Header */}
      <TouchableOpacity
        onPress={navigateTo}
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 13,
          paddingHorizontal: marginHorizontal === null ? 0 : marginHorizontal,
        }}
      >
        <Text
          style={{
            fontSize: 17,
            fontWeight: "bold",
            color: color.palette.black,
          }}
        >
          {title}
        </Text>
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Text style={{ fontSize: 12, color: color.palette.gray100 }}>Tất cả</Text>
          <Icon name="navigate-next" type="material" size={20} />
        </View>
      </TouchableOpacity>
      {/* List Item */}
      <ScrollView
        // horizontal
        // showsHorizontalScrollIndicator={false}
        horizontal={true}
        style={{ paddingLeft: marginHorizontal === null ? 0 : marginHorizontal }}
      >
        <TouchableOpacity style={{ flexDirection: "row" }} onPress={navigateTo}>{renderItem()}</TouchableOpacity>
        {/* <TouchableOpacity onPress={navigateTo}>{renderItem()}</TouchableOpacity>
        <TouchableOpacity onPress={navigateTo}>{renderItem()}</TouchableOpacity>
        <TouchableOpacity onPress={navigateTo}>{renderItem()}</TouchableOpacity>  */}
      </ScrollView>
    </View>
  )
}

const Browse02Screen = ({ cartData }) => {
  const [userId, setUserId] = React.useState("")
  const [catagoriesData, setCatagoriesData] = React.useState([])
  const [specialData, setSpecialData] = React.useState([])
  const [searchItemData, setSearchItemData] = React.useState([])
  const [numberItemsInCart, setNumberItemInCart] = React.useState(0)
  const [numberItemInSearch, setNumberItemInSearch] = React.useState(4)
  //Navigation
  const navigation = useNavigation()
  //Get Api
  async function getProductsData(limitNumber: number, userIdInput, catagoriesDataInput) {
    let productsData = []
    let result = await firestore().collection(PRODUCTS_COLLECTION).limit(limitNumber).get()
    for (let doc of result.docs) {
      productsData.push(doc.data())
    }
    let cartIdOfProductsData = []
    let productIds = []
    for (let productData of productsData) {
      cartIdOfProductsData.push(productData.cartId)
      productIds.push(productData.productId)
    }
    //Get Favorite Data by productId
    let favoriteDataByProductId = []
    let response = await firestore()
      .collection(FAVORITES_COLLECTION)
      .where("productId", "in", productIds)
      .where("userId", "==", userIdInput)
      .get()
    for (let favoriteData of response.docs) {
      favoriteDataByProductId.push(favoriteData.data())
    }

    //Merge Data
    let resultData = []
    for (let productData of productsData) {
      //Add CartName
      let pushData = {}
      catagoriesDataInput.map((value) => {
        if (value.cartId === productData.cartId) {
          pushData = { ...productData, cartName: value.name }
        }
      })
      //Adđ isLike
      pushData = { ...pushData, isLike: false }
      favoriteDataByProductId.map((value) => {
        if (value.productId === productData.productId) {
          pushData = { ...pushData, isLike: true }
        }
      })
      resultData.push(pushData)
    }
    return resultData
  }
  async function getSpecialData(userIdInput, catagoriesDataInput) {
    let specialDataGetResult = await getProductsData(10, userIdInput, catagoriesDataInput)
    setSpecialData(specialDataGetResult)
  }
  async function getUserId() {
    let userIdGetResult = await getUserIdByEmail(auth().currentUser.email)
    setUserId(userIdGetResult)
    return userIdGetResult
  }
  async function getCatagoriesData() {
    let catagoriesDataGetResult = await getAllDataFromCollection(CATEGORIES_COLLECTION)
    setCatagoriesData(catagoriesDataGetResult)
    return catagoriesDataGetResult
  }
  async function getSearchItemData(limitNumber: number, catagoriesDataInput) {
    let productsData = []
    let result = await firestore().collection(PRODUCTS_COLLECTION).limit(limitNumber).get()
    for (let doc of result.docs) {
      productsData.push(doc.data())
    }
    let cartIdOfProductsData = []
    let productIds = []
    for (let productData of productsData) {
      cartIdOfProductsData.push(productData.cartId)
      productIds.push(productData.productId)
    }
    //Merge Data
    let resultData = []
    for (let productData of productsData) {
      //Add CartName
      let pushData = {}
      catagoriesDataInput.map((value) => {
        if (value.cartId === productData.cartId) {
          pushData = { ...productData, cartName: value.name }
        }
      })
      resultData.push(pushData)
    }
    setSearchItemData(resultData)
    return resultData
  }

  async function LoadingData() {
    let catagoriesDataGetResult = await getCatagoriesData()
    let userIdGetResult = await getUserId()
    getSpecialData(
      userIdGetResult ? userIdGetResult : userId,
      catagoriesDataGetResult ? catagoriesDataGetResult : catagoriesData,
    )
    getSearchItemData(numberItemInSearch, catagoriesDataGetResult)
  }
  //Start up
  useEffect(() => {
    LoadingData()
    const subscriber = firestore()
      .collection(FAVORITES_COLLECTION)
      .onSnapshot(() => {
        console.log("Render Special")
      })
    return subscriber()
  }, [])
  //handle Search Section EndReach Trigger
  async function SearchEndReachTrigger() {
    console.log("SearchEndReachTrigger")
    if (searchItemData.length > 0) {
      setNumberItemInSearch(numberItemInSearch + 4)
      getSearchItemData(numberItemInSearch + 4, catagoriesData)
    }
  }

  function isCloseToBottom({ layoutMeasurement, contentOffset, contentSize }) {
    return layoutMeasurement.height + contentOffset.y >= contentSize.height - 20
  }
  //For test
  const CountTotalItemInCartData = () => {
    let total = 0
    cartData.map((item) => (total += item.quantity))
    return total
  }
  console.log("cartData =", CountTotalItemInCartData())
  //MAIN RENDER
  return (
    <ScrollView
      style={ROOT}
      onScroll={({ nativeEvent }) => {
        if (isCloseToBottom(nativeEvent)) {
          SearchEndReachTrigger()
        }
      }}
    >
      {/* Section Header */}
      <LinearGradient colors={GRADIENT_VALUE} style={{ width: "100%" }}>
        {/* Header */}
        <View style={styles.headerContainer}>
          {/* Logo */}
          <View style={{ zIndex: -1 }}>
            <Logo width={131} height={71} />
          </View>
          {/* Group Icon */}
          <View style={styles.groupIconContainer}>
            <Icon
              name="search"
              type="ionicon"
              color="white"
              onPress={() => navigation.navigate(screens.Browse03Screen)}
            />
            <View style={{ paddingLeft: spacing[4] }}>
              <Icon
                name="shopping-cart"
                type="feather"
                size={22}
                color="white"
                onPress={() => navigation.navigate(screens.ShoppingCartScreen)}
              />
              {/* Badge shopping cart */}
              <View style={styles.badgetCartContainer}>
                <Text style={styles.badgetCartText}>{CountTotalItemInCartData()}</Text>
              </View>
            </View>
          </View>
        </View>
        {/* Header Image */}
        <View style={{ height: 328 }}>
          <View style={styles.carouselContentContainer}>
            <View style={styles.carouselBadgeContainer}>
              <Text style={styles.carouselBadgeContent}>1/5</Text>
            </View>
            <Text style={styles.carouselContentTypeOfFood}>Trái cây & Rau</Text>
            <Text style={styles.carouselContentTitle}>
              Được sản xuất từ các trang trại theo quy trình an toàn
            </Text>
            <Text style={styles.carouselContentBuyNow}>Mua ngay</Text>
          </View>
        </View>
      </LinearGradient>
      {/* Section List */}
      {/* List Header */}
      <TouchableOpacity
        onPress={() => navigation.navigate(screens.Categories01Screen)}
        style={styles.sectionHeaderContainer}
      >
        <Text style={styles.sectionHeaderTitleText}>Danh Mục</Text>
        <View style={styles.sectionHeaderNavigationContainer}>
          <Text style={styles.sectionHeaderNavigationText}>Tất cả</Text>
          <Icon name="navigate-next" type="material" size={20} />
        </View>
      </TouchableOpacity>
      {/* List Items */}
      <FlatList
        horizontal
        style={{ paddingLeft: spacing[4] }}
        keyExtractor={(catagory) => catagory.cartId}
        data={catagoriesData}
        renderItem={({ item }) => <CategoriesRenderItem name={item.name} image={item.image} />}
      />
      {/* Section Special */}
      {/* Special Header */}
      <TouchableOpacity
        onPress={() => navigation.navigate(screens.Categories01Screen)}
        style={styles.sectionHeaderContainer}
      >
        <Text style={styles.sectionHeaderTitleText}>Đặc Biệt</Text>
        <View style={styles.sectionHeaderNavigationContainer}>
          <Text style={styles.sectionHeaderNavigationText}>Tất cả</Text>
          <Icon name="navigate-next" type="material" size={20} />
        </View>
      </TouchableOpacity>
      {/* Special Items */}
      <FlatList
        horizontal
        style={{ paddingLeft: spacing[4] }}
        keyExtractor={(item) => item.productId}
        data={specialData}
        refreshing={false}
        onRefresh={async () => {
          console.log("Waiting for reload Specail List")
          await getSpecialData(userId, catagoriesData)
        }}
        onEndReachedThreshold={1}
        onEndReached={() => {
          console.log("End Reached")
        }}
        renderItem={({ item }) => <SpecialRenderItem product={item} />}
      />
      {/* Section Search */}
      <View style={{ marginHorizontal: spacing[4], marginVertical: spacing[4] }}>
        <SearchControlPanel/>
        {/* Search Item */}
        {searchItemData.map((item) => {
          return (
            <SearchRenderItem
              product={item}
              key={item.productId}
              navigateTo={() => navigation.navigate(screens.ProductDetailScreen, { product: item })}
              counterClick={(value: number) => setNumberItemInCart(numberItemsInCart + value)}
            />
          )
        })}
      </View>
    </ScrollView>
  )
}

//props
const mapStateToProps = (state) => ({
  cartData: state.cart,
})

export default connect(mapStateToProps, null)(Browse02Screen)
