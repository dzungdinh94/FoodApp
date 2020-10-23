import React from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, StyleSheet } from "react-native"
import { Screen, Text, TextField , Button, Header} from "../../components"
import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"
import { Navigation } from "swiper"

const ROOT: ViewStyle = {
  backgroundColor: "#ffffff",
  flex: 1,
  paddingLeft: 32,
  paddingRight: 32,
  minHeight: 734,
}
const styles = StyleSheet.create({
  XinChao: {
    fontSize: 40,
    color: "#000000",
    marginTop: 64,
    fontWeight: "bold",
  },
  DangKiDeThamGia: {
    fontSize: 17,
    color: "#666666",
    marginTop: 59,
    marginBottom: 16,
  },
  GoSign: {
    color: "#000000",
    fontSize: 16,
    textAlign: "center",
    marginTop: 80,
    fontWeight: "200"
  },
  ButtonReg: {
    backgroundColor : "#93C22F",
    marginTop: 38,
    height: 50
  },
  Form: {
    borderBottomColor: "#93C22F",
    borderBottomWidth: 1,
    marginTop: 24,
  },
  inputStyle:{
    color: "#000000"
  }
})

export const SignUpScreen = observer(function SignUpScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()
  // OR
  // const rootStore = useStores()

  // Pull in navigation via hook
  const navigation = useNavigation()
  return (
    <Screen style={ROOT} preset="scroll">
      <Text style={styles.XinChao} text="Xin chào! " />
      <Text style={styles.DangKiDeThamGia} text="Đăng kí để tham gia " />
      <TextField inputStyle={styles.inputStyle} style={styles.Form} placeholder="Email" label = "Email"/>
      <TextField inputStyle={styles.inputStyle} style={styles.Form} placeholder="Tên đăng nhập" label = "Tên đăng nhập"/>
      <TextField inputStyle={styles.inputStyle} style={styles.Form} placeholder="Mật khẩu" label = "Mật khẩu"/>
      <Button textStyle={{fontSize:17}} style={styles.ButtonReg} text="Đăng kí" />
      <Text style={styles.GoSign}>
        Đã có tài khoản?
        <Text style={{fontSize: 16, color: '#666666', fontWeight:'bold'}}
              onPress={() => navigation.navigate("SignInScreen")}>
              Đăng nhập
            </Text>
      </Text>
    </Screen>
  )
})
