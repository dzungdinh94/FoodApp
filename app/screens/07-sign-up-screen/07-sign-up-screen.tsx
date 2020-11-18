import React, { useState } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, Alert } from "react-native"
import { Button, Screen, Text, AuthInput } from "../../components"
import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color, spacing } from "../../theme"
import { View } from "react-native"
import { ScrollView, TextInput, TouchableOpacity } from "react-native-gesture-handler"
import screens from "../../navigation/screens"
import styles from "./styles"

import AvatarInput from "../../components/AvatarInput"
//Firebase function
import auth from "@react-native-firebase/auth"
import firestore from "@react-native-firebase/firestore"
import { FB_SignUpWithEmail } from "../../firebase/auth"

const ROOT: ViewStyle = {
  backgroundColor: color.palette.white,
  paddingHorizontal: spacing[6],
  justifyContent: "space-between",
}
export const SignUpScreen = observer(function SignUpScreen() {
  const [username, setUsername] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [onProcessSignUp, SetOnProcessSignUp] = React.useState(false)
  const navigation = useNavigation()

  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()
  // OR
  // const rootStore = useStores()
  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <ScrollView contentContainerStyle={ROOT}>
      <View>
        {/* Welcome Title */}
        <Text style={styles.header}>Xin chào!</Text>
        {/* AvatarInput */}
        <View style={styles.avatarInputContainer}>
          <AvatarInput width={86} height={86} type="null"></AvatarInput>
        </View>
        {/* Guide Text */}
        <Text style={styles.guideText} text="Đăng ký để tham gia" />
        {/* Input Username */}
        <AuthInput
          title="Nhập Tên"
          isPassword={false}
          inputValue={username}
          setInputValue={setUsername}
        />
        {/* Input Email */}
        <AuthInput
          title="Nhập Email"
          isPassword={false}
          inputValue={email}
          setInputValue={setEmail}
        />
        {/* Input Password */}
        <AuthInput
          title="Nhập Mật khẩu"
          isPassword={true}
          inputValue={password}
          setInputValue={setPassword}
        />

        {/* Sign Up Button */}
        <Button
          text={onProcessSignUp ? "Đang xử lý đăng ký" : "Đăng kí"}
          onPress={async () => {
            SetOnProcessSignUp(true)
            let isSignUpSuccess = await FB_SignUpWithEmail(email, password, username)
            SetOnProcessSignUp(false)
            if (isSignUpSuccess) {
              navigation.navigate(screens.VerificationCodeScreen)
            }
          }}
          disabled={onProcessSignUp}
          style={!onProcessSignUp ? styles.button : styles.buttonDisable}
          textStyle={styles.buttonContent}
        />
      </View>
      {/* Section 2- Register Help */}
      <View style={styles.registerLinkStyle}>
        <Text style={styles.normal}>Đã có tài khoản?</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(screens.SignInScreen)
          }}
        >
          <Text style={styles.bold}> Đăng nhập</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
})
