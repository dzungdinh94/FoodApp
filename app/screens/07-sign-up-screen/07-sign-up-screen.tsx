import React from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { Button, Screen, Text } from "../../components"
import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"
import { View } from "react-native"
import { TextInput, TouchableOpacity } from "react-native-gesture-handler"
import screens from "../../navigation/screens"
import styles from "./styles"
const AuthInput = ({ title, isPassword }) => {
  const [inputValue, setInputValue] = React.useState("")
  const [IsFocusInput, SetIsFocusInPut] = React.useState(false)
  return (
    <View style={{ paddingBottom: 16 }}>
      <Text style={{ fontSize: 17, color: "rgb(140,140,140)" }}>{title}</Text>
      <TextInput
        value={inputValue}
        onChangeText={(change) => setInputValue(change)}
        style={{
          color: "black",
          fontSize: 17,
          borderBottomWidth: 1,
          paddingVertical: 5,
          borderColor: IsFocusInput || inputValue !== "" ? "rgb(147,194,47)" : "rgb(239,239,239)",
        }}
        onFocus={() => SetIsFocusInPut(true)}
        onEndEditing={() => SetIsFocusInPut(false)}
        secureTextEntry={isPassword}
      />
    </View>
  )
}
const ROOT: ViewStyle = {
  backgroundColor: color.palette.white,
  flex: 1,
  justifyContent: "space-between",
  paddingHorizontal: 32,
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
    <Screen style={ROOT} preset="scroll">
      <View>
        {/* Welcome Title */}
        <Text style={styles.header}>Xin chào!</Text>
        {/* AvatarInput */}
        <View style={styles.avatarInputContainer}>
          <View style={styles.avatarAddContainer}>
            <Text style={styles.avatarAddContent}>+</Text>
          </View>
        </View>
        {/* Guide Text */}
        <Text style={styles.guideText} text="Đăng nhập để tiếp tục" />
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
    </Screen>
  )
})
