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
import { async } from "validate.js"
import {
  FB_SignInEmail,
  FB_signOut,
  FB_SignUpWithEmail,
  TestAccount,
  TestAccount2,
} from "../../firebase/auth"

const ROOT: ViewStyle = {
  backgroundColor: color.palette.white,
  paddingHorizontal: 32,
}

export const SignInScreen = observer(function SignInScreen() {
  const navigation = useNavigation()
  const { signIn } = React.useContext(AuthContext)
  // If null, no SMS has been sent
  const [username, setUsername] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [onProcessSignIn, SetOnProcessSignIn] = React.useState(false)
  const [user, setUser] = React.useState()

  function onAuthStateChanged(user) {
    setUser(user)
    if (user) {
      gotoApp()
    }
  }
  React.useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged)
    console.log(subscriber)
    return subscriber // unsubscribe on unmount
  }, [])
  //Handle Sign In to Swith App
  function gotoApp() {
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
        <AuthInput
          title="Tên đăng nhập"
          isPassword={false}
          inputValue={username}
          setInputValue={setUsername}
        />
        {/* Input Password */}
        <AuthInput
          title="Mật khẩu"
          isPassword={true}
          inputValue={password}
          setInputValue={setPassword}
        />
        {/* Forgot Password */}
        <TouchableOpacity onPress={() => navigation.navigate(screens.ForgotPasswordScreen)}>
          <Text style={styles.forgotPassStyle}>Quên mật khẩu?</Text>
        </TouchableOpacity>
        {/* Button đăng nhập */}
        <Button
          text={!onProcessSignIn ? "Đăng nhập" : "Đang xử lý đăng nhập ..."}
          onPress={async () => {
            SetOnProcessSignIn(true)
            await FB_SignInEmail(username, password)
            SetOnProcessSignIn(false)
          }}
          disabled={onProcessSignIn}
          style={!onProcessSignIn ? styles.button : styles.buttonDisable}
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
