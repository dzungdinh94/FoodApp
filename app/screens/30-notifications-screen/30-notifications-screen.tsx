import React from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { View,Screen, Text } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"
import styles from './styles'
import {Icon} from 'react-native-elements'
import {Each} from './eachnoti'
const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
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
      <View style={styles.search}>
        <Icon name="ei-search" type='evilicon'/>
        
      </View>
      <Text style={styles.title}>Thông báo</Text>
      <Each notitext="Đơn#: 999001 đã xử lý xong tại kho" time="34 phút trước"/>
      <Each notitext="Bạn đã nhận hàng Đơn#: 998001 tại cửa hàng" time="2 tiếng trước"/>
      <Each notitext="Đừng bỏ lỡ: táo đang giảm giá 30% và hết hạn vào 17h hôm nay" time="4 tiếng trước"/>
      <Each notitext="Đừng bỏ lỡ: táo đang giảm giá 30% và hết hạn vào 17h hôm nay" time="4 tiếng trước"/>
      <Each notitext="Đừng bỏ lỡ: táo đang giảm giá 30% và hết hạn vào 17h hôm nay" time="4 tiếng trước"/>
    </Screen>
  )
})




