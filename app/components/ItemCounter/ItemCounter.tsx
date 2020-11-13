import React, { useState } from "react"
import { View, Text, TouchableOpacity } from "react-native"
import { Icon } from "react-native-elements"
import { useDispatch } from "react-redux"

//Styles Import
import { color, spacing } from "../../theme"
import { remove } from "../../utils/storage"
//
//Main Function
const ItemCounter = ({ product, onClickAdd, onClickRemove, startValue }) => {
  //Redux
  const dispatch = useDispatch()
  const addItemToCart = (product) => {
    dispatch({
      type: "ADD_PRODUCT_TO_CART",
      payload: product,
    })
  }
  const removeItemFromCart = (product) => {
    dispatch({
      type: "REMOVE_PRODUCT_FROM_CART",
      payload: product,
    })
  }
  let startValueTemp = startValue ? startValue : 0
  const [count, setCount] = useState(startValueTemp)
  //MAIN RENDER
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {count === 0 ? (
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: color.palette.main,
            paddingHorizontal: 5,
            paddingVertical: 2,
            borderRadius: 20,
          }}
          onPress={() => {
            setCount(1)
            onClickAdd()
            addItemToCart(product)
          }}
        >
          <Text style={{ color: color.palette.main, fontSize: 13 }}>Thêm vào giỏ</Text>
        </TouchableOpacity>
      ) : (
        <View
          style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}
        >
          <TouchableOpacity
            onPress={() => {
              setCount(count - 1 < 0 ? 0 : count - 1)
              onClickRemove()
              removeItemFromCart(product)
            }}
          >
            <Icon
              reverse={true}
              name="minus"
              type="font-awesome-5"
              color="white"
              reverseColor={color.palette.lighterGrey}
              size={9}
              containerStyle={{
                borderColor: color.palette.lighterGrey,
                borderWidth: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            />
          </TouchableOpacity>
          <Text>{count}</Text>
          <TouchableOpacity
            onPress={() => {
              setCount(count + 1), onClickAdd(), addItemToCart(product)
            }}
          >
            <Icon
              reverse={true}
              name="plus"
              type="font-awesome-5"
              color={color.palette.main}
              reverseColor="white"
              size={9}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  )
}
//props
const mapStateToProps = () => {}
export default ItemCounter
