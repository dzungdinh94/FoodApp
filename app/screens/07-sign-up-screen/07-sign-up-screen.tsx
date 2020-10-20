import React from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { Button, Screen, Text, AuthInput } from "../../components"
import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color, spacing } from "../../theme"
import { View } from "react-native"
import { ScrollView, TextInput, TouchableOpacity } from "react-native-gesture-handler"
import screens from "../../navigation/screens"
import styles from "./styles"
import AvatarInput from "../../components/AvatarInput"

const ROOT: ViewStyle = {
  backgroundColor: color.palette.white,
  paddingHorizontal: spacing[6],
  justifyContent: "space-between",
  minHeight: 734,
}

export const SignUpScreen = observer(function SignUpScreen() {
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
        <AuthInput title="Nhập Tên" isPassword={false} />
        {/* Input Email */}
        <AuthInput title="Nhập Email" isPassword={false} />
        {/* Input Password */}
        <AuthInput title="Nhập Mật khẩu" isPassword={true} />

        {/* Sign Up Button */}
        <Button
          text="Đăng kí"
          onPress={() => navigation.navigate(screens.VerificationCodeScreen)}
          style={styles.button}
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
