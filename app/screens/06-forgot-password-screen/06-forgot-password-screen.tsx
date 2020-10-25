import React from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle,StyleSheet, View } from "react-native"
import { Screen, Text,Header,TextField,Button } from "../../components"
import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"
import { SignInScreen } from "../05-sign-in-screen/05-sign-in-screen"

const ROOT: ViewStyle = {
  backgroundColor: "#ffffff",
  flex: 1,
  // paddingLeft: 32,
  // paddingRight: 32,
  minHeight: 734,
}
const styles = StyleSheet.create({
  Warning:{
    color: "#000000",
    fontSize: 17,
    marginTop: 40,
    marginRight: 16,
    marginLeft: 16,
    textAlign: "center",
    lineHeight: 22,
    letterSpacing: 0,
  },
  View: {
    flex: 1,
    paddingLeft: 32,
    paddingRight: 32,
  },
  Form: {
    borderBottomColor: "#EFEFF4",
    borderBottomWidth: 1.5,
    marginTop:18,
  },
  ButtonConfirm: {
    backgroundColor : "#93C22F",
    marginTop: 38,
    height: 50,
    borderRadius: 8,
  },
  textStyle: {
    color: "#000000",
    fontSize: 17
  },
  inputStyle:{
    color: "#000000"
  }
})
export const ForgotPasswordScreen = observer(function ForgotPasswordScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()
  // OR
  // const rootStore = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()

  const navigation = useNavigation()


  return (
    <Screen style={ROOT} preset="scroll">
      <Header leftIcon="back" titleStyle={styles.textStyle} headerText="Khôi phục mật khẩu" onLeftPress={()=>navigation.navigate("SignInScreen")}/>
      <View style={styles.View}>
      <Text style={styles.Warning} text="Hãy nhập email của bạn và chúng tôi sẽ gửi vào email của bạn hướng dẫn cách khôi phục" />
      <TextField inputStyle={styles.inputStyle} style={styles.Form} placeholder="Email" label="Email"/>
      <Button textStyle={{fontSize:17}} style={styles.ButtonConfirm} text="Gửi mail hướng dẫn" />
      </View>
    </Screen>
  )
})
