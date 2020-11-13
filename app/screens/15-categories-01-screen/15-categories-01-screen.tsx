import React, { useEffect, useState } from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle } from "react-native"
import { Screen, Text } from "../../components"
import { NavigationContainer, useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color, spacing } from "../../theme"
import { Icon, Image } from "react-native-elements"
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler"
import screens from "../../navigation/screens"
import styles from "./styles"
import { getAllDataFromCollection } from "../../firebase/firestoreFunction"
import { CATEGORIES_COLLECTION } from "../../firebase/firestore/allCollectionName"

const ROOT: ViewStyle = {
  backgroundColor: color.palette.white,
  flex: 1,
}

const CatagoryItemRender = ({ title, total, image, cartId }) => {
  const navigation = useNavigation()
  return (
    <View
      style={{
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      {/* Part1:Image*/}
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        {/* Image */}
        <View
          style={{
            width: 80,
            height: 80,
            backgroundColor: color.palette.gray200,
            borderRadius: 8,
            marginRight: 10,
            overflow: "hidden",
          }}
        >
          <Image source={image} style={{ width: 100, height: 100 }} />
        </View>
      </View>
      {/*Part2: Counter */}
      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          flexGrow: 1,
          borderBottomWidth: 1,
          borderColor: color.palette.gray230,
          height: "100%",
          alignItems: "center",
          paddingVertical: 28,
        }}
      >
        {/* Details */}
        <View>
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
          <Text style={{ color: color.palette.gray140, fontSize: 13, lineHeight: 18 }}>
            {total} mặt hàng
          </Text>
        </View>
        <Icon
          name="navigate-next"
          type="material"
          size={26}
          onPress={() => {
            navigation.navigate(screens.Browse03Screen, { cartId: cartId })
          }}
          color={color.palette.gray200}
          style={{ paddingRight: spacing[2] }}
        />
      </View>
    </View>
  )
}

export const Categories01Screen = observer(function Categories01Screen() {
  const [catagoriesData, setCatagoriesData] = useState([])
  const navigation = useNavigation()

  useEffect(() => {
    let result
    async function getData() {
      result = await getAllDataFromCollection(CATEGORIES_COLLECTION)
      setCatagoriesData(result)
    }
    getData()
  }, [])
  return (
    <ScrollView style={ROOT}>
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
        <View style={{ flex: 1 }}>
          {catagoriesData.map((value) => {
            const { name, image, cartId, total } = value
            return (
              <CatagoryItemRender
                key={cartId}
                cartId={cartId}
                title={name}
                total={total}
                image={image}
              />
            )
          })}
        </View>
      </View>
    </ScrollView>
  )
})
