import React, { useEffect, useState } from "react"
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
import Searchbar from "../../components/searchbar"
import { order } from './data'

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
  )

  // let myData = [...order]
  const [myData, setMydata] = useState([])
  const [arrayHolder, setArrayHolder] = useState(order)
  const [filterStatus, setFilterStatus] = useState(0)
  const [searchStatus, setSearchStatus] = useState(0)
  const [searchText, setSearchText] = useState('')

  useEffect(() => {
    // Should not ever set state during rendering, so do this in useEffect instead.
    setMydata(order)
  }, [])

  const filter = (status) => {
    if (filterStatus !== status) {
      setArrayHolder(myData.filter((item) => item.status === status))
      setFilterStatus(status)
    } else {
      setArrayHolder(myData)
      setFilterStatus(4)
    }
    console.log(filterStatus)
  }

  useEffect(() => {
    setArrayHolder(myData.filter((item) => item.orderNumber.toString().includes(searchText)))
    console.log(searchText)
  }, [myData, searchText])

  const dismiss = () => {
    setSearchStatus(0)
    // setArrayHolder(myData)
    // setFilterStatus(4)
  }

  const renderSearchBar = () => {
    if (searchStatus === 0) {
      return (
        <TouchableOpacity style={{ flexDirection: "row-reverse" }} onPress={() => setSearchStatus(1)}>
          <Icon name="search" type="AntDesign" style={styles.icon} />
        </TouchableOpacity>
      )
    } else {
      return (
        <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
          <SearchBar
            placeholder="Tìm kiếm"
            // lightTheme
            round
            showCancel={true}
            onChangeText={text => setSearchText(text)}
            value={searchText}
            onClear={dismiss}
            autoCorrect={false}
            containerStyle={{ backgroundColor: "white", borderTopColor: "white", borderBottomColor: "white", flex: 1, paddingLeft: 0, paddingTop: 0 }}
            inputContainerStyle={{ backgroundColor: "rgb(239,239,244)" }}

          />
          <TouchableOpacity onPress={dismiss}><Text text="Hủy" style={{ color: "rgb(102,102,102)", paddingLeft: 33, paddingRight: 16, fontFamily: "SegoeUI", fontSize: 17, fontWeight: "normal" }} /></TouchableOpacity>
        </View>
      )
    }
  }

  return (
    <Screen style={ROOT} preset="scroll">

      <View style={styles.container}>
        <View style={styles.container1}>

          {renderSearchBar()}
          <Searchbar />

          <Text preset="header" text="Đơn hàng của tôi" style={styles.orders} />
          <View style={{ flexDirection: "row", height: 44 }}>
            <TouchableOpacity onPress={() => filter(1)} style={{ flex: 1, flexDirection: "row", borderRightWidth: 1, borderRightColor: "rgb(239,239,244)", justifyContent: "center", alignItems: "center", padding: 12 }}>
              <Dot type={1} />
              <Text style={{ color: "rgb(102,102,102)" }} text="Đang xử lý" ></Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => filter(2)} style={{ flex: 1, flexDirection: "row", borderRightWidth: 1, borderRightColor: "rgb(239,239,244)", justifyContent: "center", alignItems: "center", padding: 12 }}>
              <Dot type={2} />
              <Text style={{ color: "rgb(102,102,102)" }} text="Hủy" ></Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => filter(3)} style={{ flex: 1, flexDirection: "row", justifyContent: "center", alignItems: "center", padding: 12 }}>
              <Dot type={3} />
              <Text style={{ color: "rgb(102,102,102)" }} text="Hoàn thành" ></Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* FLAT LIST */}
        <FlatList
          data={arrayHolder}
          renderItem={renderItemOrder}
          keyExtractor={item => item.index}
        />
      </View>

    </Screen>
  )
})
