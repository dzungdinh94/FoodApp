import React from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, TouchableOpacity, View, FlatList } from "react-native"
import { Screen, Text } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"

import { Icon, SearchBar } from 'react-native-elements'
import styles from "./styles"

import Dot from "../../components/dot"
import OrderItem from "../../components/order-item"
import { order } from './data'
import { useEffect, useState } from "react"


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

  useEffect(() => {
    // Should not ever set state during rendering, so do this in useEffect instead.
    setMydata(order);

  });

  // let myData = [...order]
  const [myData, setMydata] = React.useState([])
  const [arrayHolder, setArrayHolder] = React.useState(order)
  const [filterStatus, setFilterStatus] = React.useState(0)
  const [filterStatusx, setFilterStatusx] = React.useState('')

  // const filterProcess = () => {
  //   if (filterStatus !== 1) {
  //     setArrayHolder(myData.filter((item) => item.status == 'dangxuly'))
  //     setFilterStatus(1)
  //   } else setArrayHolder(myData)
  // }
  // const filterWaiting = () => {
  //   if (filterStatus !== 2) {
  //     setArrayHolder(myData.filter((item) => item.status == 'huy'))
  //     setFilterStatus(2)
  //   } else setArrayHolder(myData)

  // }
  // const filterCompleted = () => {
  //   if (filterStatus !== 3) {
  //     setArrayHolder(myData.filter((item) => item.status == 'hoanthanh'))
  //     setFilterStatus(3)
  //   } else setArrayHolder(myData)

  // }

  const filter = (status) => {
    if (filterStatus !== status) {
      setArrayHolder(myData.filter((item) => item.status == status))
      setFilterStatus(status)
    } else {
      setArrayHolder(myData)
      setFilterStatus(4)
    }
    console.log(filterStatus)
  }

  const search = (text) => {
    setArrayHolder(myData.filter((item) => item.orderNumber == text))
    console.log(text)
  }

  const dismiss = () => {

  }

  return (
    <Screen style={ROOT} preset="scroll">



      <View style={styles.container}>
        <View style={styles.container1}>
          <TouchableOpacity style={{ flexDirection: "row-reverse", }}>
            <Icon name="search" type="AntDesign" style={styles.icon} />
          </TouchableOpacity>
          <View style={{ flexDirection: "row" , justifyContent: "center", alignItems: "center"}}>
            <SearchBar
              placeholder="Tìm kiếm"
              // lightTheme
              round
              showCancel={true}
              onChangeText={text => search(text)}
              onClear={dismiss}
              autoCorrect={false}
              cancelButtonTitle="Cancel"
              containerStyle={{ backgroundColor: "white", borderTopColor: "white", borderBottomColor: "white", flex:1, paddingLeft:0}}
              inputContainerStyle={{ backgroundColor: "rgb(239,239,244)" }}

            />
            <TouchableOpacity><Text text="Hủy" style={{ color: "rgb(102,102,102)", paddingLeft: 33, paddingRight: 16, fontFamily:"SegoeUI", fontSize:17, fontWeight:"normal" }} /></TouchableOpacity>
          </View>

          <Text preset="header" text="Đơn hàng của tôi" style={styles.orders} />
          <View style={{ flexDirection: "row", height: 44 }}>
            <TouchableOpacity onPress={() => filter(1)} style={{ flex: 1, flexDirection: "row", borderRightWidth: 1, borderRightColor: "rgb(239,239,244)", justifyContent: "center", alignItems: "center", padding: 12 }}>
              <Dot type={1} />
              <Text style={{ color: "rgb(102,102,102)" }} text="Đang xử lý"  ></Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => filter(2)} style={{ flex: 1, flexDirection: "row", borderRightWidth: 1, borderRightColor: "rgb(239,239,244)", justifyContent: "center", alignItems: "center", padding: 12 }}>
              <Dot type={2} />
              <Text style={{ color: "rgb(102,102,102)" }} text="Hủy"  ></Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => filter(3)} style={{ flex: 1, flexDirection: "row", justifyContent: "center", alignItems: "center", padding: 12 }}>
              <Dot type={3} />
              <Text style={{ color: "rgb(102,102,102)" }} text="Hoàn thành"  ></Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* FLAT LIST */}
        <FlatList
          data={arrayHolder}
          renderItem={renderItemOrder}
          keyExtractor={item => item.id.toString()}
        />


      </View>

    </Screen>
  )
})
