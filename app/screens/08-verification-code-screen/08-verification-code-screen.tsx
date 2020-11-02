import React, {useState} from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle, Alert } from "react-native"
import { Button, Screen, Text, AuthInput } from "../../components"
import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"
import styles from "./styles"
import screens from "../../navigation/screens"
import auth from '@react-native-firebase/auth';
import { update } from "ramda"
const ROOT: ViewStyle = {
  backgroundColor: color.palette.white,
  flex: 1,
  paddingLeft: 32,
  paddingRight: 32,
  minHeight: 734,
}
export const VerificationCodeScreen = observer(function VerificationCodeScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()
  // OR
  // const rootStore = useStores()

  // Pull in navigation via hook
    
  const navigation = useNavigation()
  const [confirm, setConfirm] = useState(null);

  const [code, setCode] = useState('');
  const getCodeOTP = (text) => {
    setCode(text)
  }
  const [phoneNumber,setPhoneNumber] = useState('')
  const getInputPhoneNumber = (text) => {
     setPhoneNumber(text)
  }
  // Handle the button press
  async function signInWithPhoneNumber(phone) {
    const confirmation = await auth().verifyPhoneNumber(phone)
    .on('state_changed', (phoneAuthSnapshot) => {
      console.log('Snapshot state: ', phoneAuthSnapshot.state);
      
    });setConfirm(confirmation)
    const credential = auth.PhoneAuthProvider.credential(confirmation.verificationId, confirmation.code);

// Update user with new verified phone number
    await auth().currentUser.updatePhoneNumber(credential);
    
    setConfirm(confirmation);
  }

  async function confirmCode() {
    try {
      await confirm.confirm(code);
      // await auth().currentUser.updatePhoneNumber({
      //   phoneNumber: phoneNumber
      // })
      Alert.alert('Xác thực thành công')
      navigation.navigate('SignInScreen')
    } catch (error) {
      console.log('Invalid code.');
    }
  }
  if(!confirm){
    return(
      <Screen style={ROOT} preset="scroll">
      <View style={styles.container}>
        {/* Section 1- Welcome */}
        <View>
          {/* Welcome Title */}
          <Text style={styles.header}>Xác thực lại số điện thoại của bạn</Text>
          {/* Guide Text */}
          <Text style={styles.guideText} text="Chúng tôi sẽ gửi mã xác thực tới số mobile" />

          {/* Verification Code Input */}
          <View style={styles.inputsContainer}>
            <AuthInput title="Nhập Số điện thoại" isPassword={false} value={phoneNumber} handleClick={getInputPhoneNumber}/>
          </View>

          {/* Verification Button */}
          <Button
            text="Gửi mã"
            // onPress={() => navigation.navigate(screens.SetLanguageScreen)}
            style={styles.button}
            textStyle={styles.buttonContent}
            onPress={()=>signInWithPhoneNumber(phoneNumber)}
          />
        </View>
      </View>
    </Screen>
  
    )
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

          {/* Verification Code Input */}
          <View style={styles.inputsContainer}>
            <AuthInput title="Nhập mã xác thực" isPassword={false} value={code} handleClick={getCodeOTP}/>
          </View>

          {/* Verification Button */}
          <Button
            text="Xác thực"
            // onPress={() => navigation.navigate(screens.SetLanguageScreen)}
            style={styles.button}
            textStyle={styles.buttonContent}
            onPress={()=>confirmCode()}
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
