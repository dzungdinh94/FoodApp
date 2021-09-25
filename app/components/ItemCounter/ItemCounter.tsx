
import React, { useState } from "react"
import { View, Text, TouchableOpacity } from "react-native"
import { Icon } from "react-native-elements"
import {connect,useDispatch} from 'react-redux'
//Styles Import
import { color, spacing } from "../../theme"
//Main Function
const ItemCounter = ({item,onClickAdd, onClickRemove, startValue}) => {
  const dispatch = useDispatch()
  const addProduct = () => {
    dispatch({
      type: "ADD_PRODUCT",
      payload:item
    })
  }
  const removeProduct = () => {
    dispatch({
      type:"REMOVE_PRODUCT",
      payload:item
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
          onPress = {()=>{
            setCount(1)
            onClickAdd()  
            addProduct()
          }
         
          }
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
              removeProduct()
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
           onPress = {()=>{
             setCount(count + 1),
             onClickAdd(),
             addProduct()
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
const mapStatetoProps = (state) => ({
  Product: state.data.Product
})
export default connect(mapStatetoProps,null)(ItemCounter)
