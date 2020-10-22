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
  backgroundColor: color.palette.gray250,
}

export const OrdersDeliveryScreen = observer(function OrdersDeliveryScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()
  // OR
  // const rootStore = useStores()

  // Pull in navigation via hook
  const navigation = useNavigation()
  return (
    <Screen style={ROOT} preset="scroll">
      {/* Navigation Bar*/}
      <View style={styles.navigationContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="navigate-before" type="material" size={45} style={{ left: -spacing[3] }} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="dots-horizontal" type="material-community" size={35} />
        </TouchableOpacity>
      </View>
      {/* Icon */}
      <Icon
        name="truck-fast"
        type="material-community"
        size={80}
        color={color.palette.main}
        style={styles.IconContainer}
      />
      {/* Status */}
      <View style={styles.StatusContainer}>
        {/* Status Title */}
        <Text style={styles.StatusTitle}>Đang ship</Text>
        {/* Status Details */}
        <Text style={styles.StatusContent}>Đơn hàng của bạn đang trên đường vận chuyển</Text>
      </View>
      {/* Order */}
      <View style={styles.OrderContainer}>
        {/* Order Code */}
        <Text style={styles.OrderTitle}>Đơn#: 999001</Text>
        {/* Order Details */}
        <Text style={styles.OrderContent}>27/12/2020 - 3:27 chiều</Text>
      </View>

      {/* List Details */}
      <View style={styles.ListDetailsContainer}>
        {/* #1:Store Location */}
        <View style={styles.DetailContainer}>
          <Icon
            name="location-pin"
            type="material"
            color={color.palette.main}
            style={styles.DetailIcon}
          />
          <View style={styles.infoContainer}>
            <View>
              <Text style={styles.infoHighlightDetails}>Vị trí kho hàng</Text>
              <Text style={styles.infoMoreDetails}>227 Thanh Xuân Trung</Text>
            </View>
            <Icon name="navigate-next" type="material" size={30} color={color.palette.gray200} />
          </View>
        </View>
        {/* #2:Estimated */}
        <View style={styles.DetailContainer}>
          <Icon name="timer" type="material" color={color.palette.main} style={styles.DetailIcon} />
          <View style={styles.infoContainer}>
            <View>
              <Text style={styles.infoHighlightDetails}>Ước lượng thời gian</Text>
              <Text style={styles.infoMoreDetails}>
                Thời gian di chuyển từ chỗ bạn:{" "}
                <Text style={styles.infoHighLightMoreDetails}>23 min</Text>
              </Text>
            </View>
          </View>
        </View>
        {/* #3:Call Store */}
        <View style={styles.DetailContainer}>
          <Icon name="phone" type="material" color={color.palette.main} style={styles.DetailIcon} />
          <View style={styles.infoContainer}>
            <View>
              <Text style={styles.infoHighlightDetails}>Gọi điện cho kho</Text>
              <Text style={styles.infoMoreDetails}>Hãy gọi cho nhân viên kho nếu bạn muốn</Text>
            </View>
          </View>
        </View>
      </View>
      {/* Pickup Done Button*/}
      <Button
        text="Hoàn tất nhận hàng"
        onPress={() => navigation.navigate(screens.Browse02Screen)}
        style={styles.button}
        textStyle={styles.buttonContent}
      />
    </Screen>
  )
})
