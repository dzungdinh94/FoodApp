import React from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle, Image, TouchableOpacity } from "react-native"
import { Screen, Text } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"
import styles from "./styles"

import images from "../../../assets/images"
import { Icon } from "react-native-elements"

const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
  flex: 1,
}

export const OrdersDeliveryScreen = observer(function OrdersDeliveryScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()
  // OR
  // const rootStore = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <Screen style={ROOT} preset="scroll">
      <View style={styles.container}>
        <View style={{ alignItems: 'center', }}>
          {/* <Image style={{ marginTop: 8, height: 64, tintColor: 'rgb(147,194,47)', resizeMode: 'contain' }} source={images.shoppingBagIcon} /> */}
          <Icon name="truck-fast" type="material-community" color='rgb(147,194,47)' size={60} />
          <Text style={{ fontSize: 24, lineHeight: 28, fontFamily: 'SegoeUI', fontWeight: 'bold', color: 'black', paddingTop: 40, }} text="Đang ship" />
          <Text style={{ fontSize: 17, lineHeight: 22, fontFamily: 'SegoeUI', fontWeight: 'normal', color: 'rgb(102,102,102)', paddingTop: 8, paddingHorizontal: 59, textAlign: 'center' }} text="Đơn hàng của bạn đang trên đường vận chuyển" />
          <Text style={{ fontSize: 17, lineHeight: 22, fontFamily: 'SegoeUI', fontWeight: '600', color: 'black', paddingTop: 40, }} text="Đơn#: 998001" />
          <Text style={{ fontSize: 15, lineHeight: 20, fontFamily: 'SegoeUI', fontWeight: 'normal', color: 'rgb(102,102,102)', paddingTop: 8, paddingHorizontal: 59, textAlign: 'center', paddingBottom: 24, }} text="25/12/2020 - 3:27 chiều" />

        </View>

        <View style={{ padding: 16, borderRadius: 8, backgroundColor: "white", borderColor: "rgb(239,239,244)", borderWidth: 1, }}>
          <View style={{ flexDirection: "row" }}>
            <View style={{ backgroundColor: "rgb(249,249,249)", height: 40, width: 40, marginRight: 16,  justifyContent:"center", }}>
              <Icon name="map-marker-alt" type="font-awesome-5" color='rgb(147,194,47)' />
            </View>
            <View>
              <Text style={{ fontSize: 15, lineHeight: 20, fontFamily: 'SegoeUI', fontWeight: '600', color: 'black' }} text='Vị trí kho hàng' />
              <Text style={{ fontSize: 12, lineHeight: 16, fontFamily: 'SegoeUI', fontWeight: 'normal', color: 'rgb(138,138,143)' }} text='227 Thanh Xuân Trung' />

            </View>
          </View>

          <View style={{ flexDirection: "row", paddingVertical: 16, }}>
            <View style={{ backgroundColor: "rgb(249,249,249)", height: 40, width: 40, marginRight: 16, justifyContent:"center", }}>
              <Icon name="stopwatch" type="entypo" color='rgb(147,194,47)' />
            </View>
            <View>
              <Text style={{ fontSize: 15, lineHeight: 20, fontFamily: 'SegoeUI', fontWeight: '600', color: 'black' }} text='Ước lượng thời gian' />
              <Text style={{ fontSize: 12, lineHeight: 16, fontFamily: 'SegoeUI', fontWeight: 'normal', color: 'rgb(138,138,143)' }} text='Thời gian di chuyển từ chỗ bạn: 23 min' />

            </View>
          </View>

          <View style={{ flexDirection: "row" }}>
            <View style={{ backgroundColor: "rgb(249,249,249)", height: 40, width: 40, marginRight: 16,  justifyContent:"center", }}>
              <Icon name="phone" type="font-awesome" color='rgb(147,194,47)' />
            </View>
            <View>
              <Text style={{ fontSize: 15, lineHeight: 20, fontFamily: 'SegoeUI', fontWeight: '600', color: 'black' }} text='Gọi điện cho kho' />
              <Text style={{ fontSize: 12, lineHeight: 16, fontFamily: 'SegoeUI', fontWeight: 'normal', color: 'rgb(138,138,143)' }} text='Hãy gọi cho nhân viên kho nếu bạn muốn' />

            </View>
          </View>

        </View>
        <TouchableOpacity style={{ borderRadius: 8, backgroundColor: "rgb(147,194,47)", height: 50, marginTop: 16, alignItems: "center", justifyContent: 'center' }}>
          <Text style={{ fontSize: 17, lineHeight: 22, fontFamily: 'SegoeUI', fontWeight: '600', color: 'white' }} text='Hoàn tất nhận hàng' />
        </TouchableOpacity>

      </View>
    </Screen>
  )
})
