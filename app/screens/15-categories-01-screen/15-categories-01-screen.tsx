import React, { useState, useEffect } from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle,Image, FlatList } from "react-native"
import { Screen, Text } from "../../components"
import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color, spacing } from "../../theme"
import { Icon } from "react-native-elements"
import SimpleImage from "../../components/simpleImage/simple-image"
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler"
import screens from "../../navigation/screens"
import styles from "./styles"
import firestore from '@react-native-firebase/firestore'
const ROOT: ViewStyle = {
  backgroundColor: color.palette.white,
  flex: 1,
}

// const CatagoriesData = [
//   { title: "Trái cây", total: "746" },
//   { title: "Rau", total: "926" },
//   { title: "Bánh kẹo", total: "4385" },
//   { title: "Thịt", total: "268" },
//   { title: "Sữa", total: "926" },
//   { title: "Đồ uống", total: "9237" },
//   { title: "Chăm sóc cá nhân", total: "583" },
//   { title: "Hàng ngày", total: "583" },
// ]
const RenderItem3 = ({ title, total,image,onPress }) => {
  return (
    <TouchableOpacity
    onPress={onPress}
    >
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
          }}
        >
          <Image source={{uri: image}} style={{width: 80,
            height: 80,}} />
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
          color={color.palette.gray200}
          style={{ paddingRight: spacing[2] }}
        />
      </View>
    </View>
    </TouchableOpacity>
  )
}

export const Categories01Screen = observer(function Categories01Screen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()
  // OR
  // const rootStore = useStores()

  // Pull in navigation via hook
  const navigation = useNavigation()


  const [CategoriesData, setCategoriesData] = useState([])

  const Categories = () => {
    firestore().collection('Categories').get().then((getData) => {
      let result = []
      for (let data of getData.docs) {
        result.push(data.data())
      }
      setCategoriesData(result)
    })
  }

  useEffect(() => {
    Categories()
  }, [])

  const browse =(id,name)=>{
    navigation.navigate(screens.Browse01Screen,{
      itemId:id,
      itemName:name,
    })
  }
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
          <FlatList
            numColumns={1}
            data={CategoriesData}
            keyExtractor={item => item.id}
            renderItem={({ item, index }) => {
              return (
                <RenderItem3 onPress={()=>browse(item.id,item.name)} key={index} image={item.image} title={item.name} total={item.total} />
              )
            }}
          >
          </FlatList>
        </View>

      </View>

    </ScrollView >
  )
})
