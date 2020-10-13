import React from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, Text, ImageBackground, CheckBox, View } from "react-native"
import { Screen, Button } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"

const ROOT: ViewStyle = {
  backgroundColor: color.palette.white,
  flex: 1,
}

export const SetLanguageScreen = observer(function SetLanguageScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()
  // OR
  // const rootStore = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <Screen style={ROOT} preset="scroll">
      <Text preset="header" text="SetLanguageScreen" />
      <ImageBackground></ImageBackground>
      <Text>Hi Thuý!</Text>
      <Text>Please select your preferred language to facilitate communication</Text>
      <View>
        <CheckBox /> <Text>English</Text>
        <CheckBox /> <Text>Chinese</Text>
      </View>
      <View>
        <CheckBox /> <Text>Portuguese</Text>
        <CheckBox /> <Text>Spanish</Text>
      </View>
      <View>
        <CheckBox /> <Text>Hindi</Text>
        <CheckBox /> <Text>Arabic</Text>
        <CheckBox /> <Text>Russian</Text>
      </View>
      <View>
        <CheckBox /> <Text>Bulgarian</Text>
        <CheckBox /> <Text>Lithuanian</Text>
      </View>
      <Button text='Select'></Button>
    </Screen>
  )
})
