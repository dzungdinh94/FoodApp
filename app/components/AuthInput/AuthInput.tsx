import React from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, TextStyle, View } from "react-native"
import { Screen, Text } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color, spacing } from "../../theme"
import { TextInput } from "react-native-gesture-handler"

const ROOT: ViewStyle = {
  paddingBottom: spacing[5],
}
const TITLE: TextStyle = { fontSize: 17, color: "rgb(140,140,140)" }

export const AuthInput = ({ title, isPassword }) => {
  const [inputValue, setInputValue] = React.useState("")
  const [IsFocusInput, SetIsFocusInPut] = React.useState(false)
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()
  // OR
  // const rootStore = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <View style={ROOT}>
      <Text style={TITLE}>{title}</Text>
      <TextInput
        value={inputValue}
        onChangeText={(change) => setInputValue(change)}
        style={{
          color: "black",
          fontSize: 17,
          borderBottomWidth: 1,
          paddingVertical: spacing[2],
          borderColor: IsFocusInput || inputValue !== "" ? "rgb(147,194,47)" : "rgb(239,239,239)",
        }}
        onFocus={() => SetIsFocusInPut(true)}
        onEndEditing={() => SetIsFocusInPut(false)}
        secureTextEntry={isPassword}
      />
    </View>
  )
}