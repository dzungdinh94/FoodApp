import React from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, View, StyleSheet, FlatList, TouchableOpacity, Dimensions } from "react-native"
import { Text } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"
import { Icon } from "react-native-elements"
import screens from "../../navigation/screens"

const ROOT: ViewStyle = {
  backgroundColor: color.palette.white,
  flex: 1,
}


const deviceheight = Dimensions.get("window").height
const devicewidth = Dimensions.get("window").width
const marginItem = 16
const itemWidth = (devicewidth - marginItem * 3) / 2

const styles = StyleSheet.create({
  headerWrapper: {
    height: deviceheight * 44 / 802,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center'
  },
  headerText: {
    color: "black",
    marginLeft:16,
    fontSize: 25,
    
  },
  headerIcon: {
    display: "flex",
    flexDirection: "row",
  },
  adsWrapper: {
    width: 326,
    backgroundColor: "rgba(0,0,0,0.2)",
    marginTop: 16,
    borderRadius: 8,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  smallText: {
    fontFamily: "SegoeUI-Regular",
    fontSize: 12,
    color: "rgb(255,255,255)",
  },
  hugeText: {
    fontFamily: "SegoeUI-Bold",
    fontSize: 28,
    color: "rgb(255,255,255)",
  },
  mediumText: {
    fontFamily: "SegoeUI-Bold",
    fontSize: 17,
    color: "rgb(147,194,47)",
  },
  categoryText: {
    fontFamily: "SegoeUI-Regular",
    fontSize: 13,
    marginVertical: 8,
    color: color.palette.black,
  },
  categoryWrapper: {
    display: "flex",
    flexDirection: "column",
  },
  iconWrapperNormal: {
    width: 48,
    height: 48,
    borderRadius: 50,
    marginTop: 8,
    borderStyle: "solid",
    backgroundColor: "rgb(239,239,244)",
    marginHorizontal: 8,
    display: "flex",
    justifyContent: "center",
  },
  iconWrapperPress: {
    width: 48,
    height: 48,
    borderRadius: 50,
    marginTop: 8,
    borderStyle: "solid",
    backgroundColor: "rgb(147,194,47)",
    marginHorizontal: 8,
    display: "flex",
    justifyContent: "center",
  },
  categoryTextWrapper: {
    display: "flex",
    alignItems: "center",
  },
})

const dataAds = [
  {
    id: 1,
    smallText: "Trái cây & Rau",
    hugeText: "Càng mua càng rẻ",
    mediumText: "Mức giảm giá tới 30%",
  },
  {
    id: 2,
    smallText: "Trái cây & Rau",
    hugeText: "Càng mua càng rẻ",
    mediumText: "Mức giảm giá tới 30%",
  },
  {
    id: 3,
    smallText: "Trái cây & Rau",
    hugeText: "Càng mua càng rẻ",
    mediumText: "Mức giảm giá tới 30%",
  },
  {
    id: 4,
    smallText: "Trái cây & Rau",
    hugeText: "Càng mua càng rẻ",
    mediumText: "Mức giảm giá tới 30%",
  },
]

const foodCategories = [
  {
    id: 1,
    name: "Trái cây",
    iconName: "carrot",
  },
  {
    id: 2,
    name: "Rau",
    iconName: "lemon",
  },
  {
    id: 3,
    name: "Bánh",
    iconName: "birthday-cake",
  },
  {
    id: 4,
    name: "Thịt",
    iconName: "bacon",
  },
  {
    id: 5,
    name: "Sữa",
    iconName: "cheese",
  },
  {
    id: 6,
    name: "Trái cây 123",
    iconName: "carrot",
  },
  {
    id: 7,
    name: "Rau 123",
    iconName: "lemon",
  },
  {
    id: 8,
    name: "Bánh 123",
    iconName: "birthday-cake",
  },
  {
    id: 9,
    name: "Thịt 123",
    iconName: "bacon",
  },
  {
    id: 10,
    name: "Sữa 123",
    iconName: "cheese",
  },
]

const listItemCategory = [
  {
    title: "son7",
    price: 50000,
    state: false
  },
  {
    title: "son7",
    price: 50000,
    state: false
  },
  {
    title: "son7",
    price: 50000,
    state: false
  },
  {
    title: "son7",
    price: 50000,
    state: false
  },
  {
    title: "son7",
    price: 50000,
    state: false
  },
]

export const Browse01Screen = observer(function Browse01Screen({ navigation }) {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()
  // OR
  // const rootStore = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  const [category, setCategory] = React.useState("Trái cây")
  const [state,setState] = React.useState(false)
  const renderItemAds = ({ item }) => {
    return (
      <View style={styles.adsWrapper}>
        <Text style={styles.smallText}>{item.smallText}</Text>
        <Text style={styles.hugeText}>{item.hugeText}</Text>
        <Text style={styles.mediumText}>{item.mediumText}</Text>
      </View>
    )
  }

  const renderItemFoodCategories = ({ item }) => {
    return (
      <View>
        <TouchableOpacity
          style={category == item.name ? styles.iconWrapperPress : styles.iconWrapperNormal}
        >
          <Icon
            name={item.iconName}
            type="font-awesome-5"
            onPress={() => {
              setCategory(item.name)
            }}
            color={category == item.name ? "rgb(255,255,255)" : "rgb(200,199,204)"}
          />
        </TouchableOpacity>
        <View style={styles.categoryTextWrapper}>
          <Text style={styles.categoryText}>{item.name}</Text>
        </View>
      </View>
    )
  }

  const renderItem = ({ item, index }) => {
    let marginStyle = {}
    if (index % 2 === 0) {
      marginStyle = { marginRight: 8 }
    } else {
      marginStyle = { marginLeft: 8 }
    }
    
    return (
      <View
        style={[
          {
            width: itemWidth,
            marginBottom: 16,
            borderRadius: 8,
            borderColor: "rgb(239,239,244)",
            borderWidth: 1,
          },
          marginStyle,
        ]}
      >
        <View
          style={{
            aspectRatio: 1,
            backgroundColor: 'rgb(200,199,204)',
            
          }}
        >
          <Icon
            name='heart'
            type='ionicon'
            containerStyle={item.state == false ? {width: 20, height: 20, backgroundColor:'white', borderRadius:50, padding:5, position:'absolute', top:0, right:0, margin: 8} : {width: 20, height: 20, backgroundColor:'red', borderRadius:50, padding:5,position:'absolute', top:0, right:0, margin: 8}}
            size={10}
            iconStyle={item.state == false ? {color:'rgb(200,199,204)'} : {color:'white'}}
            onPress={() => {
              item.state = !item.state
              setState(!state)
            }}
          />
        </View>
        <View style={{ marginLeft: 16 }}>
          <Text style={{ fontSize: 15, color: "black", marginTop: 8 }}> {item.title} </Text>
          <Text style={{ fontSize: 15, color: "rgb(102,102,102)", marginTop: 4, marginBottom: 8 }}>
            {item.price}d
          </Text>
        </View>
      </View>
    )
  }

  return (
    <View style={{ backgroundColor: color.palette.white, flex: 1, paddingTop: 8 }}>
      <View style={styles.headerWrapper}>
        <Text style={styles.headerText}>Smart Life</Text>
        <View style={styles.headerIcon}>
          <TouchableOpacity>
            <Icon name="search" onPress={()=>navigation.navigate(screens.SearchScreen)} containerStyle={{width:19, height:19, marginRight: 16}}/>
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="shopping-cart" onPress={() => navigation.navigate(screens.ShoppingCartScreen)} containerStyle={{width:19, height:19, marginRight: 16}}/>
          </TouchableOpacity>
          
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <View style={{ flex: 2 }}>
          <FlatList
            contentContainerStyle={{paddingLeft:16}}
            data={dataAds}
            renderItem={renderItemAds}
            keyExtractor={(item) => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <View style={{ flex: 1, marginVertical: 16 }}>
          <FlatList
            contentContainerStyle={{paddingLeft:16}}
            data={foodCategories}
            renderItem={renderItemFoodCategories}
            keyExtractor={(item) => item.id}
            horizontal={true}
            style={{ width: "100%" }}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
      <View style={{ alignItems: "center",flex: 1, }}>
        <FlatList
          style={{ flex: 1, marginHorizontal: marginItem }}
          data={listItemCategory}
          numColumns={2}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  )
})
