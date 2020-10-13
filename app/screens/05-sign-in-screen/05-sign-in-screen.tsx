import React from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, StyleSheet } from "react-native"
import { Button, FormRow, Screen, Text, TextField } from "../../components"
import { useNavigation } from "@react-navigation/native"
import { useStores } from "../../models"
import { color } from "../../theme"
import screens from "../../navigation/screens"
import { AuthContext } from "../../navigation"
import { Checkbox } from "react-native-paper"

const ROOT: ViewStyle = {
  backgroundColor: "#FFFFFF",
  flex: 1,
  paddingLeft: 32,
  paddingRight: 12,
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
    marginTop: 32,

  },
  User: {
    fontSize: 17,
    color: "#8A8A8F",
    marginTop : 20,
  },
  PWD: {
    fontSize: 17,
    color: "#8A8A8F",
    marginTop : 20,
  },
  GoReg: {
    marginTop: 30,
    paddingLeft: 10,
    color: "#000000",
    marginLeft: 40,
  },

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
      <Text preset="header" text="05SignInScreen" />
      <Text style={styles.ChaoMungTroLai} text="Chào mừng trở lại " />
      <Text style={styles.DangNhapDeTiepTuc} text="Đăng nhập để tiếp tục " />
      <Text style={styles.User} text="Tên đăng nhập  " />
      <TextField placeholder="Tên đăng nhập"/>
      <Text style={styles.PWD} text="Mật khẩu   " />
      <TextField placeholder="Mật khẩu"/>
      <Text style={styles.PWD} text="Quên mật khẩu ?  " />
      <Button text="login" onPress={gotoApp} />
      <Text style={styles.GoReg} text="Chưa có tài khoản? Hãy đăng kí  " />
    </Screen>
  )
})
