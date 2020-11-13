import React, { useState } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, Alert } from "react-native"
import { Button, Screen, Text, AuthInput } from "../../components"
import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color, spacing } from "../../theme"
import { View } from "react-native"
import { ScrollView, TextInput, TouchableOpacity } from "react-native-gesture-handler"
import screens from "../../navigation/screens"
import styles from "./styles"
import AvatarInput from "../../components/AvatarInput"
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
const ROOT: ViewStyle = {
  backgroundColor: color.palette.white,
  paddingHorizontal: spacing[6],
  justifyContent: "space-between",
}
export const SignUpScreen = observer(function SignUpScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()
  // OR
  // const rootStore = useStores()

  // Pull in navigation via hook
    const navigation = useNavigation()
    const [userName, setName] = useState('')
    const getInputUserName = (text) => {
      setName(text)
    }
    const [email, setEmail] = useState('')
    const getInputEmail = (text) => {
         setEmail(text)
    }
    // const [phoneNumber,setPhoneNumber] = useState('')
    // const getInputPhoneNumber = (text) => {
    //   setPhoneNumber(text)
    // }
    const [password,setPwd] = useState('')
    const getInputPwd = (text) => {
          setPwd(text)
    }
    const [isLoaded, isLoading] = useState(false)
    const validateEmail = (email) => {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }
    const validatePassword = (password) => {
      const newPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
      return newPassword.test(password);
    }
    const validateUserName = (username) => {
      const nameRegex = /^[a-zA-Z\-]+$/
      return nameRegex.test(username)
    }
    const registerUser = async () => {
      if(userName ==='' && password === '' && email === ''){
        Alert.alert('Bạn chưa nhập email/tên hoặc mật khẩu')
      }
      else{
         isLoading(true)
         try{
           await auth().createUserWithEmailAndPassword(email,password)
           await auth().currentUser.updateProfile({
             displayName: userName
           })
          //  Alert.alert('User registered successfully !')
          const uid = await auth().currentUser.uid;
          const save = await firestore().collection('user').doc(id).set({
          name: userName,
          email: email,
          // phoneNumber: phoneNumber,
         });
        //  await auth().currentUser.sendEmailVerification();
         Alert.alert('Đăng kí thành công')
         navigation.navigate('SignInScreen')
         }catch(error){
            console.log(error)
         }

       
      }
    }
    if(!isLoaded){
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
          <AuthInput title="Nhập Tên" isPassword={false} value={userName} handleClick={getInputUserName}/>
          {/* Input Email */}
          <AuthInput title="Nhập Email" isPassword={false} value={email} handleClick={getInputEmail}/>
          {/* Input PhoneNumber */}
          {/* <AuthInput title="Nhập Số điện thoại" isPassword={false} value={phoneNumber} handleClick={getInputPhoneNumber}/> */}
          {/* Input Password */}
          <AuthInput title="Nhập Mật khẩu" isPassword={true} value={password} handleClick={getInputPwd}/>

          {/* Sign Up Button */}

          <Button
            text="Đăng kí"
            onPress={registerUser}

            style={styles.button}
            textStyle={styles.buttonContent} />

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
          }
})