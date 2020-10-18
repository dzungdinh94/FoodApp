import React from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, TouchableOpacity, View, FlatList } from "react-native"
import { Screen, Text } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"

import { Icon } from 'react-native-elements'
import styles from "./styles"

import Dot from "../../components/dot"
import OrderItem from "../../components/order-item"
import {order} from './data'


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

  const renderItemOrder = ({ item }) => (
    <OrderItem status={item.status} orderNumber={item.orderNumber} createdAt={item.createdAt} deliveryMethod={item.deliveryMethod} products={item.products} />
  );

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
            <TouchableOpacity style={{ flex: 1, flexDirection: "row", borderRightWidth: 1, borderRightColor: "rgb(239,239,244)", justifyContent: "center", alignItems: "center", padding: 12 }}>
              <Dot type="dangxuly" />
              <Text style={{ color: "rgb(102,102,102)" }} text="Đang xử lý"  ></Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flex: 1, flexDirection: "row", borderRightWidth: 1, borderRightColor: "rgb(239,239,244)", justifyContent: "center", alignItems: "center", padding: 12 }}>
              <Dot type="huy" />
              <Text style={{ color: "rgb(102,102,102)" }} text="Hủy"  ></Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flex: 1, flexDirection: "row", justifyContent: "center", alignItems: "center", padding: 12 }}>
              <Dot type="hoanthanh" />
              <Text style={{ color: "rgb(102,102,102)" }} text="Hoàn thành"  ></Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* FLAT LIST */}
        <FlatList
          data={order}
          renderItem={renderItemOrder}
          keyExtractor={item => item.id.toString()}
        />


      </View>

    </Screen>
  )
})
