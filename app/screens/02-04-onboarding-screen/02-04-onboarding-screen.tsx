import React from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, StyleSheet, View, } from "react-native"
import { Screen, Text, Button } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"
import { Checkbox } from "react-native-paper"
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../navigation"
import { SignInScreen } from "../05-sign-in-screen/05-sign-in-screen";
import { SignUpScreen } from "../07-sign-up-screen/07-sign-up-screen";
import { SliderBox } from "react-native-image-slider-box";
import Hyperlink from 'react-native-hyperlink'
const ROOT: ViewStyle = {
  backgroundColor: "#C8C7CC",
  flex: 1,
}

const styles = StyleSheet.create({
  FormButton: {
    flex: 1,
    flexDirection: 'row'
  },
  ButtonSignUp: {
    backgroundColor: "#93C22F",
    height: 50,
    width: 150,
    borderColor: "#93C22F",
    borderWidth: 1,
    borderRadius: 8,
    marginLeft: 32,
    marginRight: 16,
  },
  ButtonSignIn: {
    backgroundColor: "transparent",
    height: 50,
    width: 150,
    borderColor: "#FFFFFF",
    borderWidth: 1,
    borderRadius: 8,
  },
  TextStyle: {
    fontSize: 17,
    color: "#FFFFFF"
  },
  linearGradient: {
    flex: 1,
  },
})
export const OnboardingScreen = observer(function OnboardingScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()
  // OR
  // const rootStore = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  const navigation = useNavigation()

  return (
    <Screen style={ROOT} preset="scroll">
      <LinearGradient
        style={styles.linearGradient}
        colors={['#00000000', '#000000']}>
        <Text preset="header" text="OnboardingScreen" />
        <View style={styles.FormButton}>
          <Button textStyle={styles.TextStyle} style={styles.ButtonSignUp} text="Đăng kí" onPress={() => navigation.navigate("SignUpScreen")} />
          <Button textStyle={styles.TextStyle} style={styles.ButtonSignIn} text="Đăng nhập" onPress={() => navigation.navigate("SignInScreen")} />
        </View>
        <View>
        <Hyperlink
          linkStyle={{ color: '#2980b9', fontSize: 12,  }}
          linkText={url => url === 'https://github.com/obipawan/hyperlink' ? 'Hyperlink' : url}
        >
          <Text style={{ fontSize: 13 }}>
            Make clickable strings cleaner with https://github.com/obipawan/hyperlink
    </Text>
        </Hyperlink>
        </View>
      </LinearGradient>
    </Screen>
  )
})
