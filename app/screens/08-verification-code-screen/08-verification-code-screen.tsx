import React from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle } from "react-native"
import { Button, Screen, Text, AuthInput } from "../../components"
import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"
import styles from "./styles"
import screens from "../../navigation/screens"

const ROOT: ViewStyle = {
  backgroundColor: color.palette.white,
  flex: 1,
  paddingLeft: 32,
  paddingRight: 32,
  minHeight: 734,
}
// const styles = StyleSheet.create({
//   XacThuc: {
//     fontSize: 40,
//     color: "#000000",
//     marginTop: 56,
//     fontWeight: "bold",
//     textAlign:"left",
//     marginRight: 100
//   },
//   Warning: {
//     fontSize: 17,
//     color: "#666666",
//     marginTop: 6,
//     paddingRight: 50
//   },
//   Confirm: {
//     borderBottomColor: "#EFEFF4",
//     borderBottomWidth: 1.5,
//     marginTop:40
//   },
//   ButtonConfirm: {
//     backgroundColor : "#93C22F",
//     height: 50,
//     marginTop: 24,
//     borderRadius:8
//   },
//   Text: {
//     fontSize: 17,
//     color: "#666666",
//   },
//   ConfirmAgain:{
//     flex: 1,
//     marginTop : 24,
//     justifyContent:"space-between",
//     flexDirection: "row",
//   }
// })

export const VerificationCodeScreen = observer(function VerificationCodeScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()
  // OR
  // const rootStore = useStores()

  // Pull in navigation via hook
  const navigation = useNavigation()
  return (
    <Screen style={ROOT} preset="scroll">
      <View style={styles.container}>
        {/* Section 1- Welcome */}
        <View>
          {/* Welcome Title */}
          <Text style={styles.header}>Xác thực lại số của bạn</Text>
          {/* Guide Text */}
          <Text style={styles.guideText} text="Chúng tôi sẽ gửi mã xác thực tới số mobile" />

          {/* Verification Code Input */}
          <View style={styles.inputsContainer}>
            <AuthInput title="Nhập mã xác thực" isPassword={false} />
          </View>

          {/* Verification Button */}
          <Button
            text="Xác thực"
            onPress={() => navigation.navigate(screens.SetLanguageScreen)}
            style={styles.button}
            textStyle={styles.buttonContent}
          />

          {/* Section 2- Countdown TIme Resend */}
          <View style={styles.resendContainer}>
            <Text style={styles.normalText}>Gửi lại mã xác thực</Text>
            <Text style={styles.normalText}>1:20 phút còn lại</Text>
          </View>
        </View>
      </View>
    </Screen>
  )
})
