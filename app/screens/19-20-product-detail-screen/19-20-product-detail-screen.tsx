import React, { useEffect } from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle } from "react-native"
import { Button, Screen, Text } from "../../components"
import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color, spacing, distance } from "../../theme"
import { Icon } from "react-native-elements"
import SimpleImage from "../../components/simpleImage/simple-image"
import { ScrollView, TextInput, TouchableOpacity } from "react-native-gesture-handler"
import screens from "../../navigation/screens"
import styles from "./styles"
import ItemCounter from "../../components/ItemCounter/ItemCounter"
import FlipCard from "react-native-flip-card"
import RadioInput from "../../components/RadioInput"
import FavoriteRenderItem from "../../components/FavoriteRenderItem/FavoriteRenderItem"
import DetailsScreenCarousel from "../../components/DetailsScreenCarousel/DetailsScreenCarousel"
const ROOT: ViewStyle = {
  backgroundColor: color.palette.white,
  flex: 1,
}

import auth from "@react-native-firebase/auth"
import firestore from "@react-native-firebase/firestore"
import { FAVORITES_COLLECTION, getUserIdByEmail } from "../../firebase/firestore"

export const ProductDetailScreen = observer(function ProductDetailScreen({ route }) {
  const item = route.params
  const { name, cartName, price, productId } = item.product
  const tags = ["Khuyến mại"]
  const oldPrice = price
  const [isLike, setIsLike] = React.useState(false)
  const weightChoice = ["200gr", "500gr", "1000gr"]
  const qualityChoice = ["cao cấp", "bình dân"]
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()
  // OR
  // const rootStore = useStores()

  // Pull in navigation via hook
  console.log(isLike)
  async function checkIsProductInFavoriteList(productId) {
    let userId = await getUserIdByEmail(auth().currentUser.email)
    let result = await firestore()
      .collection(FAVORITES_COLLECTION)
      .where("productId", "==", productId)
      .where("userId", "==", userId)
      .get()
    if (result.docs.length > 0) {
      setIsLike(true)
      console.log("true")
      return true
    }
    setIsLike(false)
    console.log("false")
    return false
  }
  useEffect(() => {
    checkIsProductInFavoriteList(productId)
  }, [])

  const navigation = useNavigation()
  return (
    <ScrollView style={ROOT}>
      {/* Navigation Bar*/}
      <View style={styles.navigationContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="navigate-before" type="material" size={40} style={{ left: -spacing[3] }} />
        </TouchableOpacity>
        <Text style={styles.navigationHighLightText}>Thông tin chi tiết sản phẩm</Text>
        <TouchableOpacity>
          <Icon name="dots-horizontal" type="material-community" size={35} />
        </TouchableOpacity>
      </View>
      <View style={styles.productDetailMainContanier}>
        {/* Carousel */}
        <DetailsScreenCarousel product={item.product} isLike={isLike ? true : false} />
        {/* Tags */}
        <View style={styles.tagContainer}>
          {tags.map((tag, index) => (
            <Text key={index} style={styles.tag}>
              {tag}
            </Text>
          ))}
        </View>
        {/* Details */}
        <Text style={styles.detailTypeText}>{cartName}</Text>
        <Text style={styles.detailNameText}>{name}</Text>
        <View style={styles.detailPriceContainer}>
          <Text style={styles.detailOldPriceText}>{oldPrice}K</Text>
          <Text style={styles.detailnowPriceText}>{price}K</Text>
        </View>
        {/* Choice Selected */}
        <View style={styles.groupOptionsContainer}>
          <View style={styles.optionContainer}>
            <Text style={styles.optionValue}>500 gr</Text>
            <Icon name="chevron-small-down" color={color.palette.gray100} type="entypo" size={20} />
          </View>
          <View style={[styles.optionContainer, { marginRight: 0 }]}>
            <Text style={styles.optionValue}>cao cấp</Text>
            <Icon name="chevron-small-down" color={color.palette.gray100} type="entypo" size={20} />
          </View>
        </View>
      </View>
      {/* Descriptions */}
      <View style={styles.DescriptionsConTainer}>
        <Text style={styles.title}>Mô tả</Text>
        <Text style={styles.DescriptionsContext}>
          Có hương vị giống như bắp cải và độ giòn vừa ý. Bổ dưỡng, ít calo và có quanh năm. Một
          loại rau cực kỳ phổ biến, bông cải xanh có thể được sử dụng trong các món xào, súp, thịt
          hầm hoặc ăn kèm.
        </Text>
      </View>

      {/* Related Product */}
      <View style={styles.RelatedProductConTainer}>
        <Text style={styles.title}>Sản phẩm liên quan</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ paddingLeft: spacing[4], top: -spacing[4] }}
        >
          {/* <View style={{ marginRight: spacing[4] }}>
            <FavoriteRenderItem
              onPressItem={() => navigation.navigate(screens.ProductDetailScreen)}
            />
          </View>
          <View style={{ marginRight: spacing[4] }}>
            <FavoriteRenderItem
              onPressItem={() => navigation.navigate(screens.ProductDetailScreen)}
            />
          </View>
          <View style={{ marginRight: spacing[4] }}>
            <FavoriteRenderItem
              onPressItem={() => navigation.navigate(screens.ProductDetailScreen)}
            />
          </View>
          <View style={{ marginRight: spacing[4] }}>
            <FavoriteRenderItem
              onPressItem={() => navigation.navigate(screens.ProductDetailScreen)}
            />
          </View>
          <View style={{ marginRight: spacing[4] }}>
            <FavoriteRenderItem
              onPressItem={() => navigation.navigate(screens.ProductDetailScreen)}
            />
          </View> */}
        </ScrollView>
      </View>

      {/* Add To Cart Button */}
      <Button
        text="Thêm vào giỏ"
        onPress={() => navigation.navigate(screens.ShoppingCartScreen)}
        style={styles.button}
        textStyle={styles.buttonContent}
      />
    </ScrollView>
  )
})
