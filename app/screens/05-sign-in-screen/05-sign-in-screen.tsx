import React from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, StyleSheet, } from "react-native"
import { Button, FormRow, Screen,Text, TextField } from "../../components"
import { useNavigation } from "@react-navigation/native"
import { useStores } from "../../models"
import { color } from "../../theme"
import screens from "../../navigation/screens"
import { AuthContext } from "../../navigation"
import { Checkbox } from "react-native-paper"

const ROOT: ViewStyle = {
  backgroundColor: "#ffffff",
  flex: 1,
  paddingLeft: 32,
  paddingRight: 32,
}

const styles = StyleSheet.create({
  ChaoMungTroLai: {
    fontSize: 40,
    color: "#000000",
    marginTop: 56,
  },
  DangNhapDeTiepTuc: {
    fontSize: 17,
    color: "#666666",
    marginTop: 52,
    marginBottom: 32
  },
  GoReg: {
    marginTop: 56,
    color: "#000000",
    fontSize: 20,
    textAlign: "center"
  },
  ButtonSign: {
    backgroundColor : "#93C22F",
    height: 50,
  },
  Form: {
    marginVertical: 16,
    borderBottomColor: "#93C22F",
    borderBottomWidth: 1
  },
  QuenMatKhau: {
    fontSize: 20,
    color: "#000000",
    marginVertical: 24,
  }
})

export const SignInScreen = observer(function SignInScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()
  // OR
  // const rootStore = useStores()

  // Pull in navigation via hook
  const navigation = useNavigation()
  const { signIn } = React.useContext(AuthContext)

  const gotoApp = () => {
    signIn({
      token: "resp.token",
      role: "resp.user.type_user",
    })
  }
  return (
    <Screen style={ROOT} preset="scroll">
      <Text style={styles.ChaoMungTroLai} text="Chào mừng trở lại " />
      <Text style={styles.DangNhapDeTiepTuc} text="Đăng nhập để tiếp tục " />
      <TextField style={styles.Form} placeholder="Tên đăng nhập" label="Tên đăng nhập"/>
      <TextField style={styles.Form} placeholder="Mật khẩu" label="Mật khẩu"/>
      <Text style={styles.QuenMatKhau} text="Quên mật khẩu ?  " />
      <Button textStyle={{fontSize:17}} style={styles.ButtonSign} text="Đăng nhập" onPress={gotoApp} />
      <Text style={styles.GoReg} text="Chưa có tài khoản? Hãy đăng kí  " />
    </Screen>
  )
})
