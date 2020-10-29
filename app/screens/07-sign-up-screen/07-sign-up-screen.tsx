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
}
// const styles = StyleSheet.create({
//   XinChao: {
//     fontSize: 40,
//     color: "#000000",
//     marginTop: 64,
//     fontWeight: "bold",
//   },
//   DangKiDeThamGia: {
//     fontSize: 17,
//     color: "#666666",
//     marginTop: 59,
//     marginBottom: 16,
//   },
//   GoSign: {
//     color: "#000000",
//     fontSize: 16,
//     textAlign: "center",
//     marginTop: 80,
//     fontWeight: "200"
//   },
//   ButtonReg: {
//     backgroundColor : "#93C22F",
//     marginTop: 38,
//     height: 50
//   },
//   Form: {
//     borderBottomColor: "#93C22F",
//     borderBottomWidth: 1,
//     marginTop: 24,
//   },
//   inputStyle:{
//     color: "#000000"
//   }
// })

export const SignUpScreen = observer(function SignUpScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()
  // OR
  // const rootStore = useStores()

  // Pull in navigation via hook
  const navigation = useNavigation()
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
