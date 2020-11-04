import React from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { Screen, Text } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"
import auth from "@react-native-firebase/auth"
import { FB_signOut } from "../../firebase/auth"
import { Button } from "react-native-elements"
import { AuthContext } from "../../navigation"

const ROOT: ViewStyle = {
  backgroundColor: color.palette.white,
  flex: 1,
}

export const AccountScreen = observer(function AccountScreen() {
  const { signOut } = React.useContext(AuthContext)

  function onAuthStateChanged(user) {
    if (!user) {
      signOut()
    }
  }

  React.useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged)
    return subscriber // unsubscribe on unmount
  }, [])
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()
  // OR
  // const rootStore = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <Screen style={ROOT} preset="scroll">
      <Text preset="header" text="AccountScreen" />
      <Text>Welcome {auth().currentUser.email}</Text>
      <Button onPress={FB_signOut} title="Sign Out" />
    </Screen>
  )
})
