import React from "react"
import { observer } from "mobx-react-lite"
import { TextInput, TouchableOpacity, View, ViewStyle } from "react-native"
import { Screen, Text } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color, spacing } from "../../theme"
import styles from "./styles"
import { Icon } from "react-native-elements"
import { useNavigation } from "@react-navigation/native"
import screens from "../../navigation/screens"
import { connect } from "react-redux"
import Logo from "../../components/logo"
//Firebase
import firestore from "@react-native-firebase/firestore"
//Data
import { CatagoriesData } from "../../data/CatagoriesData"
import { FlatList } from "react-native-gesture-handler"
import { PRODUCTS_COLLECTION } from "../../firebase/firestore"
const ROOT: ViewStyle = {
  backgroundColor: color.palette.white,
  flex: 1,
}

const CatagoryTabItemRender = ({ item, isSelected, onClick }) => {
  return (
    <TouchableOpacity
      style={[styles.catagoryTabItemTitle, isSelected ? styles.titleSelected : null]}
      onPress={onClick}
    >
      <Text style={isSelected ? styles.titleTextSelected : null}>{item.title}</Text>
    </TouchableOpacity>
  )
}

const Browse03Screen = ({ cartData, route }) => {
  const cartId = route.params.cartId
  console.log(cartId)
  const [searchText, setSearchText] = React.useState("")
  const [selectedCatagory, setSelectedCatagory] = React.useState(cartId)
  const [productsData, setProductsData] = React.useState([])
  const navigation = useNavigation()
  const CountTotalItemInCartData = () => {
    let total = 0
    cartData.map((item) => (total += item.quantity))
    return total
  }
  const getProductsData = async (catagoryId) => {
    let result = []
    let response = await firestore()
      .collection(PRODUCTS_COLLECTION)
      .where("cartId", "==", catagoryId)
      .limit(4)
      .get()
    for (let doc of response.docs) {
      result.push(doc.data())
    }
    setProductsData(result)
  }
  React.useEffect(() => {
    getProductsData(selectedCatagory)
  }, [])
  return (
    <Screen style={ROOT}>
      {/* Header */}
      <View style={styles.headerContainer}>
        {/* Header - leftSide */}
        <View style={styles.leftSideHeaderContainer}>
          <Icon name="filter" type="font-awesome-5" size={18} color={color.palette.black} />
          {/* Logo */}
          <View style={{ zIndex: -1 }}>
            <Logo width={131} height={71} />
          </View>
        </View>
        {/* Header - rightSide */}
        <View style={styles.rightSideHeaderContainer}>
          <Icon
            name="search"
            type="ionicon"
            color={color.palette.black}
            onPress={() => navigation.navigate(screens.SearchScreen)}
          />
          <View style={{ paddingLeft: spacing[4] }}>
            <Icon
              name="shopping-cart"
              type="feather"
              size={22}
              color={color.palette.black}
              onPress={() => navigation.navigate(screens.ShoppingCartScreen)}
            />
            {/* Badge shopping cart */}
            <View style={styles.badgetCartContainer}>
              <Text style={styles.badgetCartText}>{CountTotalItemInCartData()}</Text>
            </View>
          </View>
        </View>
      </View>
      {/* Search Bar */}
      <View style={styles.searchBarContainer}>
        <View style={styles.searchBoxInputContainer}>
          <Icon name="search" type="ionicon" color={color.palette.gray200} size={17} />
          <TextInput
            style={styles.searchBoxInput}
            value={searchText}
            onChangeText={(value) => {
              setSearchText(value)
            }}
            placeholder="Tìm kiếm"
            placeholderTextColor={color.palette.gray140}
          />
        </View>
      </View>
      {/* Catagories Tab */}
      <View style={styles.catagoryTabContainer}>
        <FlatList
          horizontal
          style={{ paddingLeft: spacing[4] }}
          keyExtractor={(item) => item.title}
          data={CatagoriesData}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <CatagoryTabItemRender
              item={item}
              isSelected={item.cartId == selectedCatagory}
              onClick={() => {
                setSelectedCatagory(item.cartId), getProductsData(item.cartId)
              }}
            />
          )}
        />
      </View>
      {/* Products by Catagories */}
      <View style={styles.productList}>
        <FlatList
          keyExtractor={(item) => item.productId}
          data={productsData}
          renderItem={({ item }) => <Text>{item.name}</Text>}
        />
      </View>
    </Screen>
  )
}

//props
const mapStateToProps = (state) => ({
  cartData: state.cart,
})

export default connect(mapStateToProps, null)(Browse03Screen)
