import React, {useState,useEffect} from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle, Alert } from "react-native"
import { Button, Screen, Text, AuthInput } from "../../components"
import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { AuthContext } from "../../navigation"
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
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const [code, setCode] = useState('');
  const getCodeOTP = (text) => {
    setCode(text)
  }

  const [phoneNumber,setPhoneNumber] = useState('')
  const getInputPhoneNumber = (text) => {
     setPhoneNumber(text)
  }
  // Handle the button press
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);
  async function signInWithPhoneNumber(phone) {
    const confirmation = await auth().verifyPhoneNumber(phone,120)
    .on('state_changed', (phoneAuthSnapshot) => {
      console.log('Snapshot state: ', phoneAuthSnapshot.state);
      
      setConfirm(phoneAuthSnapshot.state)
      
    });
    
  
    
// Update user with new verified phone number
    
  }
  const { signIn } = React.useContext(AuthContext)

  const gotoApp = () => {
    signIn({
      token: "resp.token",
      role: "resp.user.type_user",
    })
  }
  // async function confirmCode() {
  //   try {
  //     await confirm.confirm(code);
  //     // await auth().currentUser.updatePhoneNumber({
  //     //   phoneNumber: phoneNumber
  //     // })
  //     Alert.alert('Xác thực thành công')
  //     gotoApp()
  //   } catch (error) {
  //     console.log('Invalid code.');
  //   }
  // }
  // async function confirmCode() {
  //   try {
  //     const credential = auth.PhoneAuthProvider.credential(
  //       confirm.verificationId,
  //       code,
  //     );
  //     await auth().currentUser.updatePhoneNumber(credential);
  //     let userData = await auth().currentUser.linkWithCredential(credential);
     
  //   } catch (error) {
  //     if (error.code == 'auth/invalid-verification-code') {
  //       console.log('Invalid code.');
  //     } else {
  //       console.log('Account linking error'); 
  //     }
  //   }
  // }
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
