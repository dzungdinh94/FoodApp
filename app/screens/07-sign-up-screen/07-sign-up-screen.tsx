import React, { useState, useEffect } from 'react';
import auth from '@react-native-firebase/auth';
import { observer } from "mobx-react-lite"
import { Alert, ViewStyle } from "react-native"
import { Button, Screen, Text, AuthInput } from "../../components"
import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color, spacing } from "../../theme"
import { View } from "react-native"
import { ScrollView, TextInput, TouchableOpacity } from "react-native-gesture-handler"
import screens from "../../navigation/screens"
import styles from "./styles"
import AvatarInput from "../../components/AvatarInput"
import { AuthContext } from "../../navigation"
import firestore from '@react-native-firebase/firestore';

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
  const { signIn } = React.useContext(AuthContext)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [password, setPassword] = useState('')
  const [onAuthStateChanged, setOnAuthStateChanged]= useState(false)
 

  const registerUser = async () => {
    console.log((/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(String(email).toLowerCase())));
    if(email == '' || password==''){
      Alert.alert('Bạn chưa nhập thông tin')
    } else if( !(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(String(email).toLowerCase()))){
      Alert.alert('Email không đúng định dạng')
    } else{
      try {
        await auth().createUserWithEmailAndPassword(
          email,
          password,
        );
        console.log('User account created & signed in!');
        await auth().currentUser.updateProfile({
          displayName: name,
        })
        
        await firestore().collection('user').add({
          id: auth().currentUser.uid,
          email,
          name,
          sdt: phoneNumber,
        })
        signIn({
          token: "resp.token",
          role: "resp.user.type_user",
        })
        // navigation.navigate(screens.SignInScreen)
      } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('That email address is already in use!')
        }
        if (error.code === 'auth/invalid-email') {
          Alert.alert('That email address is invalid!')
        }
        console.error(error);
      }
    }
    
  }
  
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
        <AuthInput title="Nhập Tên" isPassword={false} inputValue={name} setInputValue={setName} />
        {/* Input Email */}
        <AuthInput title="Nhập Email" isPassword={false} inputValue={email} setInputValue={setEmail} />
        {/* Input Phone Number */}
        <AuthInput title="Nhập Phone Number" isPassword={false} inputValue={phoneNumber} setInputValue={setPhoneNumber} />
        {/* Input Password */}
        <AuthInput title="Nhập Mật khẩu" isPassword={true} inputValue={password} setInputValue={setPassword} />

        {/* Sign Up Button */}
        <Button
          text="Đăng kí"
          onPress={
            async () => await registerUser()
            // navigation.navigate(screens.VerificationCodeScreen)
          }
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
