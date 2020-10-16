import React from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle } from "react-native"
import { Button, Screen, Text } from "../../components"
import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color, spacing } from "../../theme"
import { Icon } from "react-native-elements"
import SimpleImage from "../../components/simpleImage/simple-image"
import { ScrollView, TextInput, TouchableOpacity } from "react-native-gesture-handler"
import screens from "../../navigation/screens"
import styles from "./styles"
import ItemCounter from "../../components/ItemCounter/ItemCounter"

const StartCartData = [
  {
    name: "Mù tạt xanh",
    type: "Rau",
    quantity: 1,
    unit: "cây",
    price: 15,
  },
  {
    name: "Cà rốt organic",
    type: "Rau",
    quantity: 2,
    unit: "củ",
    price: 20,
  },
  {
    name: "Táo organic",
    type: "Hoa quả",
    quantity: 1,
    unit: "quả",
    price: 20,
  },
]
const ROOT: ViewStyle = {
  backgroundColor: color.palette.white,
  flex: 1,
  paddingLeft: spacing[4],
}

const CartItem = ({ itemData, handleClickButton }) => {
  let temp = itemData.quantity
  const [quantity, setQuantity] = React.useState(temp)
  return (
    <View
      style={{
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: spacing[3],
        borderBottomWidth: 0.7,
        borderColor: color.palette.lighterGrey,
      }}
    >
      {/* Part1:Image*/}
      <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }}>
        {/* Image */}
        <View
          style={{
            width: 80,
            height: 80,
            backgroundColor: "rgb(200,200,200)",
            borderRadius: 8,
            marginRight: 10,
          }}
        >
          <SimpleImage width={80} height={80} />
        </View>
      </TouchableOpacity>
      {/*Part2: Counter */}
      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          flexGrow: 1,
          paddingRight: spacing[4],
          height: "100%",
          alignItems: "center",
        }}
      >
        {/* Details */}
        <View>
          <Text style={{ color: color.palette.lightGrey, fontSize: 13, lineHeight: 18 }}>
            {itemData.type}
          </Text>
          <Text
            style={{
              color: "black",
              fontSize: 15,
              lineHeight: 20,
              fontWeight: "bold",
            }}
          >
            {itemData.name}
          </Text>
          <Text style={{ color: color.palette.lightGrey, fontSize: 13, lineHeight: 18 }}>
            SL : {quantity} {itemData.unit}
          </Text>
        </View>
        {/* Counter Indicator */}
        <View style={{ alignItems: "flex-end" }}>
          <Text style={{ color: color.palette.black, fontWeight: "bold" }}>
            {quantity * itemData.price} K
          </Text>
          <ItemCounter
            onClickAdd={() => {
              handleClickButton(quantity + 1), setQuantity(quantity + 1)
            }}
            onClickRemove={() => {
              handleClickButton(quantity - 1), setQuantity(quantity - 1)
            }}
            startValue={itemData.quantity}
          />
        </View>
      </View>
    </View>
  )
}
//RadioInputCart
const RadioInputCart = ({ title, selected, onClick }) => {
  return (
    <View style={styles.container}>
      {/* Value */}
      <Text style={selected ? styles.radioValueTextSelected : styles.radioValueTextUnSelected}>
        {title}
      </Text>
      {/* Touch Circle */}
      <TouchableOpacity
        style={[
          styles.circle,
          {
            borderColor: selected ? color.palette.main : color.palette.black,
            backgroundColor: selected ? color.palette.main : color.palette.white,
          },
        ]}
        onPress={() => {
          onClick(title)
        }}
      >
        {selected ? (
          <Icon name="check" type="font-awesome" color={color.palette.white} size={12} />
        ) : null}
      </TouchableOpacity>
    </View>
  )
}

//MAIN EXPORT FUNCTION
export const ShoppingCartScreen = observer(function ShoppingCartScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()
  // OR
  // const rootStore = useStores()
  const [cartData, setCartData] = React.useState(StartCartData)
  const [totalMoney, setTotalMoney] = React.useState(0)
  const [isRentDelivery, setIsRentDelivery] = React.useState(true)
  const ReCountTotalMoney = (data: { quantity: number; price: number }[], deliveryCost: number) => {
    let sum = 0
    data.map((value: { quantity: number; price: number }) => (sum += value.quantity * value.price))
    sum += deliveryCost
    setTotalMoney(sum)
  }
  const ClickRentDelivery = () => {
    setIsRentDelivery(true)
    ReCountTotalMoney(cartData, 10)
  }

  const ClickSelfDelivery = () => {
    setIsRentDelivery(false)
    ReCountTotalMoney(cartData, 0)
  }

  const handleCartData = (stateData, { action, props: { id, changeValue } }) => {
    let cloneData = []
    switch (action) {
      case "updateQuantity":
        stateData.map((value) => {
          value.name === id
            ? cloneData.push({ ...value, quantity: changeValue })
            : cloneData.push(value)
        })
        break
      default:
        break
    }
    setCartData(cloneData)
    ReCountTotalMoney(cloneData, isRentDelivery ? 10 : 0)
  }

  const handleClickCounter = (name, changevalue) => {
    handleCartData(cartData, {
      action: "updateQuantity",
      props: { id: name, changeValue: changevalue },
    })
  }

  // Pull in navigation via hook
  const navigation = useNavigation()
  //First time run
  React.useEffect(() => {
    ReCountTotalMoney(cartData, isRentDelivery ? 10 : 0)
  }, [])
  return (
    <ScrollView style={ROOT}>
      {/* Navigation Bar */}
      <View style={styles.navigationContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="close" type="material" size={32} />
        </TouchableOpacity>
        <Text style={{ color: color.palette.gray140, fontSize: 17, paddingRight: spacing[4] }}>
          Edit
        </Text>
      </View>
      {/* Content */}
      <View style={styles.contentContainer}>
        {/* Header */}
        <Text style={styles.headerText}>Giỏ hàng</Text>
        {/* List Item */}
        {cartData.map((value) => (
          <CartItem
            key={value.name}
            itemData={value}
            handleClickButton={(quantity) => handleClickCounter(value.name, quantity)}
          />
        ))}
      </View>
      {/* Coupon Input */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: color.palette.gray250,
          borderRadius: spacing[3],
          paddingLeft: spacing[4],
          marginRight: spacing[4],
          marginTop: spacing[4],
        }}
      >
        <Text>Mã khuyến mại</Text>
        <TextInput
          style={{ marginLeft: spacing[4], paddingLeft: spacing[4] }}
          placeholder="Nhập mã nếu có"
        />
      </View>

      {/* Deliver Options */}
      <View
        style={{
          paddingRight: spacing[4],
          marginTop: spacing[4],
          borderBottomWidth: 1,
          borderColor: color.palette.gray230,
          paddingBottom: spacing[2],
        }}
      >
        {/* Options Choose */}
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <RadioInputCart
            title="Tự vận chuyển"
            selected={!isRentDelivery}
            onClick={ClickSelfDelivery}
          />
          <RadioInputCart title="Thuê ship" selected={isRentDelivery} onClick={ClickRentDelivery} />
          {/* <Text>Tự vận chuyển</Text>
          <Text>Thuê ship</Text> */}
        </View>
        {/* Deliver Price */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: spacing[7],
          }}
        >
          <Text>Phí ship</Text>
          <Text>{isRentDelivery ? "10K" : "0K"}</Text>
        </View>
      </View>
      {/* Total Money */}
      <View
        style={{ paddingRight: spacing[4], flexDirection: "row", justifyContent: "space-between" }}
      >
        <View
          style={{
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <Text style={{ fontSize: 17, marginVertical: spacing[1] }}>Tổng tiền</Text>
          <Text style={{ fontSize: 13, color: color.palette.gray140 }}>3 mặt hàng</Text>
        </View>
        <View
          style={{
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <Text style={{ fontSize: 17, fontWeight: "bold", marginVertical: spacing[1] }}>
            {totalMoney}K
          </Text>
          <Text style={{ fontSize: 13, color: color.palette.gray140 }}>Đã gồm thuế</Text>
        </View>
      </View>
      {/* Checkout Button */}

      <Button
        text="Chấp nhận mua hàng"
        onPress={() => navigation.navigate(screens.CheckoutScreen)}
        style={styles.button}
        textStyle={styles.buttonContent}
      />
    </ScrollView>
  )
})
