import React from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle,View, StyleSheet } from "react-native"
import { Screen, Text } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"
import { Icon } from 'react-native-elements'

const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
  flex: 1,
}

const styles = StyleSheet.create({

})
export const Browse01Screen = observer(function Browse01Screen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()
  // OR
  // const rootStore = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <Screen style={ROOT} preset="scroll">
      <Text preset="header" text="Browse01Screen" />
      <View>
        <Text>Smart Life</Text>
        <View>
          <Icon 
            name='search'
          />
          <Icon 
            name='shopping-cart'
          />
        </View>
      </View>
      <View>
        <Text>Trái cây & Rau</Text>
        <Text>Càng mua càng rẻ</Text>
        <Text>Mức giảm giá tới 30%</Text>
      </View>
    </Screen>
  )
})
