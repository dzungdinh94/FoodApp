import React from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { Button, Screen, Text, AuthInput } from "../../components"
import { useNavigation } from "@react-navigation/native"
import { useStores } from "../../models"
import { color } from "../../theme"
import screens from "../../navigation/screens"
import { AuthContext } from "../../navigation"
import styles from "./styles"
import { View } from "react-native"
import { TextInput } from "react-native-gesture-handler"
import { TouchableOpacity } from "react-native"

const ROOT: ViewStyle = {
  backgroundColor: color.palette.white,
  flex: 1,
  justifyContent: "space-between",
  paddingHorizontal: 32,
}
// const AuthInput = ({ title, isPassword }) => {
//   const [inputValue, setInputValue] = React.useState("")
//   const [IsFocusInput, SetIsFocusInPut] = React.useState(false)
//   return (
//     <View style={{ paddingBottom: 16 }}>
//       <Text style={{ fontSize: 17, color: "rgb(140,140,140)" }}>{title}</Text>
//       <TextInput
//         value={inputValue}
//         onChangeText={(change) => setInputValue(change)}
//         style={{
//           color: "black",
//           fontSize: 17,
//           borderBottomWidth: 1,
//           paddingVertical: 5,
//           borderColor: IsFocusInput || inputValue !== "" ? "rgb(147,194,47)" : "rgb(239,239,239)",
//         }}
//         onFocus={() => SetIsFocusInPut(true)}
//         onEndEditing={() => SetIsFocusInPut(false)}
//         secureTextEntry={isPassword}
//       />
//     </View>
//   )
// }

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
      <View>
        <Text preset="header" text="05SignInScreen" />
        {/* Welcome Title */}
        <Text style={styles.header}>Chào mừng trở lại</Text>
        {/* Guide Text */}
        <Text style={styles.guideText} text="Đăng nhập để tiếp tục" />
        {/* Input Username */}
        <AuthInput title="Tên đăng nhập" isPassword={false} />
        {/* Input Password */}
        <AuthInput title="Mật khẩu" isPassword={true} />
        {/* Forgot Password */}
        <TouchableOpacity onPress={() => navigation.navigate(screens.ForgotPasswordScreen)}>
          <Text style={styles.forgotPassStyle}>Quên mật khẩu?</Text>
        </TouchableOpacity>
        {/* Button đăng ký */}
        <Button
          text="Đăng nhập"
          onPress={gotoApp}
          style={styles.button}
          textStyle={styles.buttonContent}
        />
      </View>
      {/* Section 2- Register Help */}
      <View style={styles.registerLinkStyle}>
        <Text style={styles.normal}>Chưa có tài khoản?</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(screens.SignUpScreen)
          }}
        >
          <Text style={styles.bold}> Hãy đăng ký</Text>
        </TouchableOpacity>
      </View>
    </Screen>
  )
})
