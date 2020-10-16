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
  flex: 1,
}

export const CheckoutScreen = observer(function CheckoutScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()
  // OR
  // const rootStore = useStores()

  // Pull in navigation via hook
  const navigation = useNavigation()
  return (
    <Screen style={ROOT} preset="scroll">
      {/* Navigation */}
      {/* Navigation Bar */}
      <View style={styles.navigationContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="navigate-before" type="material" size={40} />
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
        <Icon name="navigate-next" type="material" size={40} color={color.palette.gray200} />
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
        <Icon name="navigate-next" type="material" size={40} color={color.palette.gray200} />
      </View>
      {/* Payment method */}
      <View style={styles.infoContainer}>
        <View>
          <Text style={styles.infoTitle}>Phương thức thanh toán</Text>
          <Text style={styles.infoMoreDetails}>Apple Pay</Text>
        </View>
        <Icon name="navigate-next" type="material" size={40} color={color.palette.gray200} />
      </View>
      {/* Cart List */}
      <View style={styles.cartListContainer}>
        <Text style={styles.infoTitle}>Giỏ hàng</Text>
        <Text style={styles.infoHighlightDetails}>Hôm nay</Text>
        <View style={styles.infoRowDetailsContainer}>
          <Text style={styles.infoMoreDetails}>Mù tạt xanh X 1</Text>
          <Text style={styles.infoMoreDetails}>15K</Text>
        </View>
        <View style={styles.infoRowDetailsContainer}>
          <Text style={styles.infoMoreDetails}>Cà rốt Organic x 1</Text>
          <Text style={styles.infoMoreDetails}>20K</Text>
        </View>
        <View style={styles.infoRowDetailsContainer}>
          <Text style={styles.infoMoreDetails}>Táo Organic x 1</Text>
          <Text style={styles.infoMoreDetails}>25K</Text>
        </View>
        <View style={styles.infoRowDetailsContainer}>
          <Text style={styles.infoMoreDetails}>Phí ship</Text>
          <Text style={styles.infoMoreDetails}>10K</Text>
        </View>
        <View style={styles.infoTotalRowContainer}>
          <Text style={styles.infoMoreDetails}>Tổng</Text>
          <Text style={styles.infoTotalMoney}>60K</Text>
        </View>
      </View>
      {/* Coupon */}
      <View style={styles.CouponContainer}>
        <Text style={styles.CouponTitle}>Mã giảm giá</Text>
        <View style={styles.CouponDetailsContainer}>
          <Text style={styles.CounponDetails}>không có</Text>
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
})
