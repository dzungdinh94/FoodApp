import React, { useState } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { Text } from "../../components"
import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color, spacing } from "../../theme"
import { View } from "react-native"
import { Icon } from "react-native-elements"
import LinearGradient from "react-native-linear-gradient"
import SimpleImage from "../../components/simpleImage"
import Logo from "../../components/logo"
import { ScrollView } from "react-native"

import styles from "./style"
import { TouchableOpacity } from "react-native-gesture-handler"
import screens from "../../navigation/screens"
import ItemCounter from "../../components/ItemCounter/ItemCounter"
import SpecialRenderItem from "../../components/SpecialRenderItem/SpecialRenderItem"
import SearchControlPanel from "../../components/SearchControlPanel/SearchControlPanel"
import firestore from '@react-native-firebase/firestore'

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
const CategoriesRenderItem = ({ title, price }) => {
  return (
    <LinearGradient
      colors={[color.palette.gray200, color.palette.gray200, color.palette.black]}
      style={{
        width: 138,
        height: 188,
        borderRadius: 8,
        marginRight: 15,
      }}
    >
      <SimpleImage width={138} height={188} />
      <View style={{ position: "absolute", bottom: 14, left: spacing[4] }}>
        <Text style={{ color: "white", fontSize: 17, fontWeight: "bold" }}>{title}</Text>
        <Text style={{ color: "white", fontSize: 11, marginTop: spacing[1] }}>Giá từ {price} đ</Text>
      </View>
    </LinearGradient>
  )
}

const SearchRenderItem = ({ navigateTo, counterClick, type, title, price }) => {
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
          }}
        >
          <SimpleImage width={80} height={80} />
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
          <Text style={{ color: color.palette.lightGrey, fontSize: 13, lineHeight: 18 }}>{type}</Text>
          <Text
            style={{
              color: "black",
              fontSize: 15,
              lineHeight: 20,
              fontWeight: "bold",
            }}
          >
            {title}
          </Text>
          {(price < 1000)? <Text style={{
              color: color.palette.lightGrey,
              fontSize: 13,
              lineHeight: 18,
              marginTop: spacing[1],
            }}>{price} triệu</Text> : 
        <Text style={{
          color: color.palette.lightGrey,
          fontSize: 13,
          lineHeight: 18,
          marginTop: spacing[1],
        }}>{price} đ</Text>
        }
        </View>

        {/* Counter Indicator */}
        <ItemCounter
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

export const Browse02Screen = observer(function Browse02Screen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()
  // OR
  // const rootStore = useStores()

  // Pull in navigation via hook
  const navigation = useNavigation()
  const [CategoryItem, setCate] = useState([])
  const [Value,setValue] = useState([])
  const Category = async () => {
    const result = []
    const getData = await firestore().collection('category').get()
    for (let data of getData.docs) {
      result.push(data.data())
      result.sort((a, b) => a.id - b.id)
    }
    //  console.log(result)
    setCate(result)
  }
  const [speclist, setlist] = useState([])
  const SpecialList = async () => {
    const list = []
    const get = await firestore().collection('Product').get()
    for (let item of get.docs) {
      list.push(item.data())
      // list.sort((a, b) => a.id - b.id)
    }
    // console.log(list)
   
    setlist(list)
  }
  React.useEffect(() => { Category() }, [])
  React.useEffect(() => { SpecialList() }, [])
  const [numberItemsInCart, setNumberItemInCart] = React.useState(0)
  return (
    <ScrollView style={ROOT}>
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
                <Text style={styles.badgetCartText}>{numberItemsInCart}</Text>
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
      <ListFood
        title="Danh Mục"
        renderItem={() => CategoryItem.map((value) => {
          const { id, name, price } = value
          return <CategoriesRenderItem key={id} title={name} price={price} />
        })}
        marginHorizontal={16}
        navigateTo={() => navigation.navigate(screens.Categories01Screen)}
      />
      {/* Section Special */}
      <ListFood
        title="Đặc Biệt"
        renderItem={() => speclist.map((val) => {
          const { id, name, price, categoryID } = val
          for (let item of CategoryItem) {
            if (item.id === categoryID) {
              return <SpecialRenderItem key={id} type={item.name} title={name} price={price} />
            }
          }

        })

        }
        marginHorizontal={16}
        // navigateTo={() => navigation.navigate(screens.ProductDetailScreen)}
      />
      {/* Section Search */}
      <View style={{ marginHorizontal: spacing[4], marginVertical: spacing[4] }}>
        <SearchControlPanel/>
        {/* Search Item */}
        <View>
          {speclist.map((vals) => {
            const { id, name, price, categoryID } = vals
            for (let x of CategoryItem) {
              if (x.id === categoryID)
                return <SearchRenderItem
                  navigateTo={() => navigation.navigate(screens.ProductDetailScreen)}
                  counterClick={(value: number) => setNumberItemInCart(numberItemsInCart + value)}
                  key={id} type={x.name} title={name} price={price}
                />
            }
          })}

        </View>
      </View>
    </ScrollView>
  )
})
