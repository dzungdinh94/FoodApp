import React from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, TouchableOpacity, View } from "react-native"
import { Screen, Text } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"

import { Icon } from 'react-native-elements'
import styles from "./styles"
import InputForm from "../../components/input-form"

const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
  flex: 1,
}

export const OrdersScreen = observer(function OrdersScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()
  // OR
  // const rootStore = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <Screen style={ROOT} preset="scroll">



      <View style={styles.container}>
        <View style={styles.container1}>
        <TouchableOpacity style={{
          flexDirection: "row-reverse",
          // height: 100,
          // padding: 20
        }}>
          <Icon name="search" type="AntDesign" style={styles.icon} />
        </TouchableOpacity>
        <Text preset="header" text="Đơn hàng của tôi" style={styles.orders} />
        <View style={{ flexDirection: "row", height: 44 }}>
          <View style={{ flex: 1, flexDirection: "row", borderRightWidth: 1, borderRightColor: "rgb(239,239,244)", justifyContent: "center", alignItems: "center", padding: 12}}>
            <View style={{ backgroundColor: "rgb(84,199,252)", width: 8, height: 8, borderRadius: 50, margin: 6 }} />
            <Text style={{ color: "rgb(102,102,102)" }} text="Đang xử lý"  ></Text>
          </View>
          <View style={{ flex: 1, flexDirection: "row", borderRightWidth: 1, borderRightColor: "rgb(239,239,244)", justifyContent: "center", alignItems: "center", padding: 12 }}>
            <View style={{ backgroundColor: "rgb(239,111,64)", width: 8, height: 8, borderRadius: 50, margin: 6 }} />
            <Text style={{ color: "rgb(102,102,102)" }} text="Hủy"  ></Text>
          </View>
          <View style={{ flex: 1, flexDirection: "row", justifyContent: "center", alignItems: "center", padding: 12 }}>
            <View style={{ backgroundColor: "rgb(147,194,47)", width: 8, height: 8, borderRadius: 50, margin: 6 }} />
            <Text style={{ color: "rgb(102,102,102)" }} text="Hoàn thành"  ></Text>
          </View>
        </View>
      </View>

      <Text preset="header" text="Đơn#: 999001" style={styles.orders} />
      </View>

    </Screen>
  )
})
