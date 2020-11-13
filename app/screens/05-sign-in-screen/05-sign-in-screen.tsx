import React, {useState, useEffect } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { Button, Screen, Text,AuthInput} from "../../components"
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
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const ROOT: ViewStyle = {
  backgroundColor: color.palette.white,
  paddingHorizontal: 32,
}

function User({ userId }) {
  useEffect(() => {
    const subscriber = firestore()
      .collection('Users')
      .doc(userId)
      .onSnapshot(documentSnapshot => {
        console.log('User data: ', documentSnapshot.data());
      });

    // Stop listening for updates when no longer required
    return () => subscriber();
  }, [userId]);
}
// const styles = StyleSheet.create({
//   ChaoMungTroLai: {
//     fontSize: 40,
//     color: "#000000",
//     marginTop: 56,
//   },
//   DangNhapDeTiepTuc: {
//     fontSize: 17,
//     color: "#666666",
//     marginTop: 64,
//     marginBottom: 16
//   },
//   GoReg: {
//     marginTop: 150,
//     color: "#000000",
//     fontSize: 17,
//     textAlign: "center"
//   },
//   ButtonSign: {
//     backgroundColor : "#93C22F",
//     height: 50,
//     marginTop: 24,
//     borderRadius:8
//   },
//   Form: {
//     borderBottomColor: "#93C22F",
//     borderBottomWidth: 1,
//     marginTop:24
//   },
//   QuenMatKhau: {
//     fontSize: 17,
//     color: "#000000",
//     marginTop:24
//   },
//   inputStyle:{
//     color: "#000000"
//   }
// })

export const SignInScreen = observer(function SignInScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()
  // OR
  // const rootStore = useStores()

  // Pull in navigation via hook
  const navigation = useNavigation()
  const { signIn } = React.useContext(AuthContext)

  const gotoApp = () => {
    signIn({
      token: "resp.token",
      role: "resp.user.type_user",
    })
  }
  
    // If null, no SMS has been sent
    const [confirm, setConfirm] = useState(null);

    const [code, setCode] = useState('');
  
    // Handle the button press
    async function signInWithPhoneNumber(phoneNumber) {
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      setConfirm(confirmation);
    }
  
    async function confirmCode() {
      try {
        await confirm.confirm(code);
        gotoApp();
      } catch (error) {
        console.log('Invalid code.');
      }
    }
  if (!confirm) {
  return (
    <Screen style={ROOT} preset="scroll">
      <View>
        {/* Welcome Title */}
        <Text style={styles.header}>Chào mừng trở lại</Text>
        {/* Guide Text */}
        <Text style={styles.guideText} text="Đăng nhập để tiếp tục" />
        {/* Input Username */}
        <AuthInput title="Tên đăng nhập" isPassword={false} />
        {/* Input Password */}
        <AuthInput title="Mật khẩu" isPassword={true} />
        {/* Forgot Password */}
        <TouchableOpacity onPress={() => navigation.navigate(screens.ForgotPasswordScreen)}>
          <Text style={styles.forgotPassStyle}>Quên mật khẩu?</Text>
        </TouchableOpacity>
        {/* Button đăng ký */}
        <Button
          text="Đăng nhập"
          onPress={() => signInWithPhoneNumber('+84 836 659 980')}
          style={styles.button}
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
  );
  }
  return (
    <>
      <TextInput value={code} onChangeText={text => setCode(text)} />
      <Button text="Confirm Code" onPress={() => confirmCode()} />
    </>
  );
})
