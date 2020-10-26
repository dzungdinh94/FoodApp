import React from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { Button, Screen, Text, AuthInput } from "../../components"
import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color, spacing } from "../../theme"
import { View } from "react-native"
import { ScrollView, TextInput, TouchableOpacity } from "react-native-gesture-handler"
import styles from "./styles"
import { Icon } from "react-native-elements"
import screens from "../../navigation/screens"

const ROOT: ViewStyle = {
  backgroundColor: color.palette.white,
  flex: 1,
  // paddingLeft: 32,
  // paddingRight: 32,
  minHeight: 734,
}
// const styles = StyleSheet.create({
//   Warning:{
//     color: "#000000",
//     fontSize: 17,
//     marginTop: 40,
//     marginRight: 16,
//     marginLeft: 16,
//     textAlign: "center",
//     lineHeight: 22,
//     letterSpacing: 0,
//   },
//   View: {
//     flex: 1,
//     paddingLeft: 32,
//     paddingRight: 32,
//   },
//   Form: {
//     borderBottomColor: "#EFEFF4",
//     borderBottomWidth: 1.5,
//     marginTop:18,
//   },
//   ButtonConfirm: {
//     backgroundColor : "#93C22F",
//     marginTop: 38,
//     height: 50,
//     borderRadius: 8,
//   },
//   textStyle: {
//     color: "#000000",
//     fontSize: 17
//   },
//   inputStyle:{
//     color: "#000000"
//   }
// })
export const ForgotPasswordScreen = observer(function ForgotPasswordScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()
  // OR
  // const rootStore = useStores()

  // Pull in navigation via hook
  const navigation = useNavigation()
  return (
    <Screen style={ROOT} preset="scroll">
      {/* Navigation Bar */}

      <View style={styles.navigationContainer}>
        <TouchableOpacity style={styles.backIconContainer} onPress={() => navigation.goBack()}>
          <Icon name="navigate-before" type="material" size={45} />
        </TouchableOpacity>
        <Text style={styles.navigationText}>Khôi phục mật khẩu</Text>
        <View>
          <Icon name="navigate-before" type="material" size={45} color={color.palette.white} />
        </View>
      </View>
      {/* Main Screen */}
      <View style={styles.container}>
        {/* Guide Text */}
        <Text
          style={styles.guideText}
          text="Hãy nhập email của bạn và chúng tôi sẽ gửi vào email của bạn hướng dẫn cách khôi phục"
        />
        {/* Input */}
        <View style={styles.inputContainer}>
          <AuthInput title="Email" isPassword={false} />
        </View>
        {/* Button */}
        <Button
          text="Đăng kí"
          onPress={() => navigation.navigate(screens.VerificationCodeScreen)}
          style={styles.button}
          textStyle={styles.buttonContent}
        />
      </View>
    </Screen>
  )
})
