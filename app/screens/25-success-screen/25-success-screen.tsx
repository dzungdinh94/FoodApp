import React from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, View, Dimensions, StyleSheet, TouchableOpacity } from "react-native"
import { Screen, Text } from "../../components"
import { useNavigation } from "@react-navigation/native"
import screens from "../../navigation/screens"
// import { useStores } from "../../models"
import { color } from "../../theme"

import AnimatedSuccess from './AnimatedSuccess'
import styles from './styles'

const ROOT: ViewStyle = {
  backgroundColor: color.palette.white,

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
      <View style={styles.container}>
            <View style={styles.thanhcong}>
                <Text style={styles.text}>Thành công!</Text>
            </View>
            <View style={styles.animated}>
                <AnimatedSuccess />
            </View>
            <View style={styles.camon}>
                <Text style={styles.camon1}>Cảm ơn bạn đã mua hàng</Text>
                <Text style={styles.camon2}>Đơn hàng của bạn đã được ghi nhận và đang trong quá trình xử lý</Text>
            </View>
            <View style={styles.button}>
                <TouchableOpacity
                onPress={() => navigation.navigate(screens.OrdersPickupsScreen)}
                 style={styles.touchable1}>
                    <Text style={styles.texttouch1}>Theo dõi đơn hàng</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                onPress={() => navigation.navigate(screens.Browse02Screen)}
                style={styles.touchable2}>
                    <Text style={styles.texttouch2}>Quay lại mua sắm</Text>
                </TouchableOpacity>
            </View>
        </View>
    </Screen>
  )
})
