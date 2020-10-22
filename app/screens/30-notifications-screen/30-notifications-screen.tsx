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

export const NotificationsScreen = observer(function NotificationsScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()
  // OR
  // const rootStore = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <Screen style={ROOT} preset="scroll">
      {/* Navigation Bar*/}
      <View style={styles.navigationContainer}>
        <TouchableOpacity>
          <Icon name="search" type="feather" color={color.palette.black} />
        </TouchableOpacity>
      </View>
      {/* Header */}
      <Text style={styles.headerText}>Thông báo</Text>
      {/* List Notification */}
      <ScrollView>
        {/* Notification Item*/}
        <View style={styles.DetailContainer}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            {/* Image */}
            <View style={styles.ImageContainer}>
              <SimpleImage width={80} height={80} />
            </View>
          </View>
          <View style={styles.NotificationContainer}>
            <Text style={styles.NotificationDetails}>
              Đơn<Text style={styles.NotificationHighlightDetails}> #:999001</Text> đã xử lý xong
              tại kho
            </Text>
            <Text style={styles.NotificationTimeLeft}>34 phút trước</Text>
          </View>
        </View>
        {/* Notification Item*/}
        <View style={styles.DetailContainer}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            {/* Image */}
            <View style={styles.ImageContainer}>
              <SimpleImage width={80} height={80} />
            </View>
          </View>
          <View style={styles.NotificationContainer}>
            <Text style={styles.NotificationDetails}>
              Đơn<Text style={styles.NotificationHighlightDetails}> #:999001</Text> đã xử lý xong
              tại kho
            </Text>
            <Text style={styles.NotificationTimeLeft}>34 phút trước</Text>
          </View>
        </View>
        {/* Notification Item*/}
        <View style={styles.DetailContainer}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            {/* Image */}
            <View style={styles.ImageContainer}>
              <SimpleImage width={80} height={80} />
            </View>
          </View>
          <View style={styles.NotificationContainer}>
            <Text style={styles.NotificationDetails}>
              Bạn đã nhận hàng Đơn
              <Text style={styles.NotificationHighlightDetails}> #: 998001</Text>
              tại cửa hàng
            </Text>
            <Text style={styles.NotificationTimeLeft}>2 tiếng trước</Text>
          </View>
        </View>
        {/* Notification Item*/}
        <View style={styles.DetailContainer}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            {/* Image */}
            <View style={styles.ImageContainer}>
              <SimpleImage width={80} height={80} />
            </View>
          </View>
          <View style={styles.NotificationContainer}>
            <Text style={styles.NotificationDetails}>
              Đừng bỏ lỡ: táo đang giảm giá 30% và hết hạn vào 17h hôm nay
            </Text>
            <Text style={styles.NotificationTimeLeft}>4 tiếng trước</Text>
          </View>
        </View>
        {/* Notification Item*/}
        <View style={styles.DetailContainer}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            {/* Image */}
            <View style={styles.ImageContainer}>
              <SimpleImage width={80} height={80} />
            </View>
          </View>
          <View style={styles.NotificationContainer}>
            <Text style={styles.NotificationDetails}>
              Đừng bỏ lỡ: cà chua đang giảm giá 30% và hết hạn vào 17h hôm nay
            </Text>
            <Text style={styles.NotificationTimeLeft}>4 tiếng trước</Text>
          </View>
        </View>
        {/* Notification Item*/}
        <View style={styles.DetailContainer}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            {/* Image */}
            <View style={styles.ImageContainer}>
              <SimpleImage width={80} height={80} />
            </View>
          </View>
          <View style={styles.NotificationContainer}>
            <Text style={styles.NotificationDetails}>
              Đừng bỏ lỡ: cà chua đang giảm giá 30% và hết hạn vào 17h hôm nay
            </Text>
            <Text style={styles.NotificationTimeLeft}>4 tiếng trước</Text>
          </View>
        </View>
      </ScrollView>
    </Screen>
  )
})
