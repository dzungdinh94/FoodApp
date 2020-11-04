import React from "react"
import { observer } from "mobx-react-lite"
import { TextInput, View, ViewStyle } from "react-native"
import { Button, Screen, Text, AuthInput } from "../../components"
import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"
import styles from "./styles"
import screens from "../../navigation/screens"
import auth from "@react-native-firebase/auth"
import { updateProfile, verifyPhoneCode } from "../../firebase/userProfileCollection"

const ROOT: ViewStyle = {
  backgroundColor: color.palette.white,
  flex: 1,
}

export const VerificationCodeScreen = observer(function VerificationCodeScreen() {
  // If null, no SMS has been sent
  const [user, setUser] = React.useState("")
  const [phoneNumber, setPhoneNumber] = React.useState("")
  const [confirm, setConfirm] = React.useState(null)
  const [code, setCode] = React.useState("")
  const [message, setMessage] = React.useState("")
  const [disableButton, setDisableButton] = React.useState(false)
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()
  // OR
  // const rootStore = useStores()

  // Pull in navigation via hook
  const navigation = useNavigation()

  // Handle the verify phone button press
  async function updatePhoneNumber(phoneNumber) {
    setDisableButton(true)
    const confirmation = await updateProfile(auth().currentUser.email, { phoneNumber })
    console.log(confirmation)
    setConfirm(confirmation)
    setDisableButton(false)
  }

  // Handle confirm code button press
  async function pressConfirmCode() {
    try {
      setDisableButton(true)
      let result = await verifyPhoneCode(code)
      if (result) {
        setMessage(`Kết nối thành công với điện thoại`)
        console.log(message)
        setDisableButton(false)
        navigation.navigate(screens.SetLanguageScreen)
      } else {
        setMessage(`Nhập sai vui lòng nhập lại`)
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Screen style={ROOT} preset="scroll">
      <View style={styles.container}>
        {/* Section 1- Welcome */}
        <View>
          {/* Welcome Title */}
          <Text style={styles.header}>Xác thực lại số của bạn</Text>
          {/* Guide Text */}
          <Text style={styles.guideText} text="Chúng tôi sẽ gửi mã xác thực tới số mobile" />
          {!confirm ? (
            <>
              {/* Verification Code Input */}
              <View style={styles.inputsContainer}>
                <AuthInput
                  title="Nhập số điện thoại"
                  isPassword={false}
                  inputValue={phoneNumber}
                  setInputValue={setPhoneNumber}
                />
              </View>
              {/* Verification Button */}
              <Button
                text={disableButton ? "Đang lưu số điện thoại ..." : "Lưu số điện thoại này"}
                onPress={() => updatePhoneNumber(phoneNumber)}
                style={disableButton ? styles.buttonDisable : styles.button}
                textStyle={styles.buttonContent}
              />
            </>
          ) : (
            <>
              {/* Verification Code Input */}
              <View style={styles.inputsContainer}>
                <AuthInput
                  title="Nhập mã xác thực"
                  isPassword={false}
                  inputValue={code}
                  setInputValue={setCode}
                />
              </View>
              {/* Verification Button */}
              <Button
                text={disableButton ? "Đang xác thực ..." : "Xác thực"}
                onPress={pressConfirmCode}
                style={disableButton ? styles.buttonDisable : styles.button}
                textStyle={styles.buttonContent}
              />
              {/* Section 2- Countdown TIme Resend */}
              <View style={styles.resendContainer}>
                <Text style={styles.normalText}>{message}</Text>
                {/* <Text style={styles.normalText}>1:20 phút còn lại</Text> */}
              </View>
            </>
          )}
          {/* Phone Input */}
        </View>
      </View>
    </Screen>
  )
})
