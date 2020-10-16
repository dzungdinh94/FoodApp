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
  alignItems: "center",
  justifyContent: "space-around",
}

export const SuccessScreen = observer(function SuccessScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()
  // OR
  // const rootStore = useStores()

  // Pull in navigation via hook
  const navigation = useNavigation()
  return (
    <Screen style={ROOT} preset="scroll">
      {/* Header */}
      <Text style={styles.headerText}>Thành Công!</Text>
      {/* Animation Image */}
      <View
        style={{ width: 128, height: 128, borderRadius: 128, backgroundColor: color.palette.main }}
      >
        <SimpleImage width={128} height={128} />
      </View>
      {/* Thanks content */}
      <View>
        <Text style={styles.thanksTitle}>Cảm ơn bạn đã mua hàng</Text>
        <Text style={styles.thanksContent}>
          Đơn hàng của bạn đã được ghi nhận và đang trong quá trình xử lý
        </Text>
      </View>
      <View style={styles.GroupButtonContainer}>
        {/* Tracking Button  */}
        <Button
          text="Theo dõi đơn hàng"
          onPress={() => navigation.navigate(screens.OrdersPickupsScreen)}
          style={styles.button}
          textStyle={styles.buttonContent}
        />
        {/* Back To Shop Button  */}
        <Button
          text="Quay lại mua sắm"
          onPress={() => navigation.navigate(screens.Browse02Screen)}
          style={styles.button2}
          textStyle={styles.button2Content}
        />
      </View>
    </Screen>
  )
})
