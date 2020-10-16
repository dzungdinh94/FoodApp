import React from "react"
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

export const ProductDetailScreen = observer(function ProductDetailScreen() {
  const tags = ["Khuyến mại", "Bán chạy"]
  const type = "Rau"
  const name = "Bông cải xanh"
  const oldPrice = 30
  const nowPrice = 15
  const weightChoice = ["200gr", "500gr", "1000gr"]
  const qualityChoice = ["cao cấp", "bình dân"]
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()
  // OR
  // const rootStore = useStores()

  // Pull in navigation via hook
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
        <DetailsScreenCarousel />
        {/* Tags */}
        <View style={styles.tagContainer}>
          {tags.map((tag, index) => (
            <Text key={index} style={styles.tag}>
              {tag}
            </Text>
          ))}
        </View>
        {/* Details */}
        <Text style={styles.detailTypeText}>{type}</Text>
        <Text style={styles.detailNameText}>{name}</Text>
        <View style={styles.detailPriceContainer}>
          <Text style={styles.detailOldPriceText}>{oldPrice}K</Text>
          <Text style={styles.detailnowPriceText}>{nowPrice}K</Text>
        </View>
        {/* Choice Selected */}
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
        <ScrollView horizontal style={{ paddingLeft: spacing[4] }}>
          <FavoriteRenderItem
            onPressItem={() => navigation.navigate(screens.ProductDetailScreen)}
          />
          <FavoriteRenderItem
            onPressItem={() => navigation.navigate(screens.ProductDetailScreen)}
          />
          <FavoriteRenderItem
            onPressItem={() => navigation.navigate(screens.ProductDetailScreen)}
          />
          <FavoriteRenderItem
            onPressItem={() => navigation.navigate(screens.ProductDetailScreen)}
          />
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
