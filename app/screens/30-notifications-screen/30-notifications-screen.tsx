import React from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle,View } from "react-native"
import { Screen, Text } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"
import Each from  './eachnoti.js'
import {Icon} from 'react-native-elements'
import styles from './styles'
const ROOT: ViewStyle = {
  backgroundColor: color.palette.darkWhite,
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
    <Screen style={ROOT} preset="scroll" style={styles.container}>
      <View style={[styles.search]}>
      <Icon name="search" type="evilicon" color="black" iconStyle={{marginTop: 12,fontWeight: 'bold'}} />

        
      </View>
      <Text style={styles.title}>Thông báo</Text>
      <Each where=" đã xử lý xong tại kho" ordernum="#: 999001" notitext="Đơn" time="34 phút trước"/>
      <Each where=' tại cửa hàng' ordernum='#: 998001' notitext="Bạn đã nhận hàng Đơn" time="2 tiếng trước"/>
      <Each notitext="Đừng bỏ lỡ: táo đang giảm giá 30% và hết hạn vào 17h hôm nay" time="4 tiếng trước"/>
      <Each notitext="Đừng bỏ lỡ: táo đang giảm giá 30% và hết hạn vào 17h hôm nay" time="4 tiếng trước"/>
      <Each notitext="Đừng bỏ lỡ: táo đang giảm giá 30% và hết hạn vào 17h hôm nay" time="4 tiếng trước"/>
    </Screen>
  )
})
//done