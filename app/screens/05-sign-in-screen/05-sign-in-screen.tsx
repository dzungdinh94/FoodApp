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
import AvatarInput from "../../components/AvatarInput"
import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth"

const ROOT: ViewStyle = {
  backgroundColor: color.palette.white,
  paddingHorizontal: 32,
}

export const SignInScreen = observer(function SignInScreen() {
  // If null, no SMS has been sent
  const [confirm, setConfirm] = React.useState(null)
  const [code, setCode] = React.useState("")
  // Handle the button press
  async function signInWithPhoneNumber(phoneNumber) {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber)
    setConfirm(confirmation)
  }

  async function confirmCode() {
    try {
      await confirm.confirm(code)
    } catch (error) {
      console.log("Invalid code.")
    }
  }

  async function createAccount() {
    try {
      await auth().createUserWithEmailAndPassword("jane.doe@example.com", "SuperSecretPassword!")
      console.log("User account created & signed in!")
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        console.log("That email address is already in use!")
      }

      if (error.code === "auth/invalid-email") {
        console.log("That email address is invalid!")
      }
      console.error(error)
    }
  }

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
        {/* TEST FIRE BASE */}
        {!auth().currentUser ? (
          <Button
            text="Tạo tài khoản mới"
            onPress={() => createAccount()}
            style={styles.button}
            textStyle={styles.buttonContent}
          />
        ) : (
          <>
            <Text>{auth().currentUser.email}</Text>
          </>
        )}
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
