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

const ROOT: ViewStyle = {
  backgroundColor: color.palette.white,
}

export const CheckoutScreen = ({ route, navigation }) => {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()
  // OR
  // const rootStore = useStores()
  let { cartData, isRentDelivery, coupon, totalMoney } = route.params
  const [checkOutData, setCheckOutData] = React.useState({
    cartData,
    isRentDelivery,
    coupon,
    totalMoney,
  })
  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <Screen style={ROOT} preset="scroll">
      {/* Navigation */}
      {/* Navigation Bar */}
      <View style={styles.navigationContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="navigate-before" type="material" size={45} style={{ left: -spacing[4] }} />
        </TouchableOpacity>
        <Text style={{ color: color.palette.gray140, fontSize: 17 }}></Text>
      </View>
      {/* Header */}
      <Text style={styles.headerText}>Bổ sung thông tin đơn hàng</Text>
      {/* Recived Day */}
      <View style={styles.infoContainer}>
        <View>
          <Text style={styles.infoTitle}>Ngày nhân hàng</Text>
          <Text style={styles.infoHighlightDetails}>Thứ năm, 12/12/2020</Text>
          <Text style={styles.infoMoreDetails}>10:00 sáng</Text>
        </View>
        <Icon name="navigate-next" type="material" size={28} color={color.palette.gray200} />
      </View>
      {/* Recived Location */}
      <View style={styles.infoContainer}>
        <View>
          <Text style={styles.infoTitle}>Địa chỉ nhận hàng</Text>
          <Text style={styles.infoHighlightDetails}>Nhà riêng</Text>
          <Text style={styles.infoMoreDetails}>
            Số 35 ngõ Quỳnh, phố Bạch Mai, Hai Bà Trưng, Hà Nội …
          </Text>
        </View>
        <Icon name="navigate-next" type="material" size={28} color={color.palette.gray200} />
      </View>
      {/* Payment method */}
      <View style={styles.infoContainer}>
        <View>
          <Text style={styles.infoTitle}>Phương thức thanh toán</Text>
          <Text style={styles.infoMoreDetails}>Apple Pay</Text>
        </View>
        <Icon name="navigate-next" type="material" size={28} color={color.palette.gray200} />
      </View>
      {/* Cart List */}
      <View style={styles.cartListContainer}>
        <Text style={styles.infoTitle}>Giỏ hàng</Text>
        <Text style={styles.infoHighlightDetails}>Hôm nay</Text>
        {checkOutData.cartData.map((item, index) => (
          <View key={index} style={styles.infoRowDetailsContainer}>
            <Text style={styles.infoMoreDetails}>
              {item.product.name} X {item.quantity}
            </Text>
            <Text style={styles.infoMoreDetails}>{item.quantity * item.product.price} K</Text>
          </View>
        ))}
        <View style={styles.infoRowDetailsContainer}>
          <Text style={styles.infoMoreDetails}>Phí ship</Text>
          <Text style={styles.infoMoreDetails}>{isRentDelivery ? "10K" : "0K"}</Text>
        </View>
        <View style={styles.infoTotalRowContainer}>
          <Text style={styles.infoMoreDetails}>Tổng</Text>
          <Text style={styles.infoTotalMoney}>{checkOutData.totalMoney} K</Text>
        </View>
      </View>
      {/* Coupon */}
      <View style={styles.CouponContainer}>
        <Text style={styles.CouponTitle}>Mã giảm giá</Text>
        <View style={styles.CouponDetailsContainer}>
          <Text style={styles.CounponDetails}>
            {checkOutData.coupon === "" ? "không có" : checkOutData.coupon}
          </Text>
        </View>
      </View>
      {/* Accecpt Button */}
      <Button
        text="Chấp nhận thanh toán"
        onPress={() => navigation.navigate(screens.PaymentScreen)}
        style={styles.button}
        textStyle={styles.buttonContent}
      />
    </Screen>
  )
}
