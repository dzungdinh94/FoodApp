import React, { useState } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, TextInput, Alert } from "react-native"
import { Button, Screen, Text, AuthInput } from "../../components"
import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"
import screens from "../../navigation/screens"
import { AuthContext } from "../../navigation"
import styles from "./styles"
import { View } from "react-native"
// import { TextInput } from "react-native-gesture-handler"
import { TouchableOpacity } from "react-native"
import AvatarInput from "../../components/AvatarInput"
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
const ROOT: ViewStyle = {
  backgroundColor: color.palette.white,
  paddingHorizontal: 32,
}


export const SignInScreen = observer(function SignInScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()
  // OR
  // const rootStore = useStores()

  // Pull in navigation via hook
  // const [isLoaded, isLoading] = useState(false)
  // const [confirm, setConfirm] = useState(null);


  const navigation = useNavigation()
  const [isLoaded,isLoading] = useState(false)
  const [email,setEmail] = useState('')
  const getInputEmail = (text) => {
    setEmail(text)
  }
  const [password, setPwd] = useState('')
  const getInputPwd = (text) => {
    setPwd(text)
  }
    const [code, setCode] = useState('');
  
  const { signIn } = React.useContext(AuthContext)

  const gotoApp = () => {
    signIn({
      token: "resp.token",
      role: "resp.user.type_user",
    })
  }
  const userLogin = async () => {
    if(email =='' && password == '')
    {
      Alert.alert('Bạn chưa nhập Email/Mật khẩu')
    }else{
    isLoading(true)
    try{
      await auth().signInWithEmailAndPassword(email,password)
      await auth().onAuthStateChanged((user)=>{
        console.log(user)
        if(user != null){
          gotoApp()
        }
      })
    }catch(error){
      console.log(error)
    }
  }
  }
 return (
    <Screen style={ROOT} preset="scroll">
      <View>
        {/* Welcome Title */}
        <Text style={styles.header}>Chào mừng trở lại</Text>
        {/* Guide Text */}
        <Text style={styles.guideText} text="Đăng nhập để tiếp tục" />
        {/* Input Username */}
        <AuthInput title="Email" isPassword={false} value={email} handleClick={getInputEmail} />
        {/* Input Password */}
        <AuthInput title="Mật khẩu" isPassword={true} value={password} handleClick={getInputPwd}/>
        {/* Forgot Password */}
        <TouchableOpacity onPress={() => navigation.navigate(screens.ForgotPasswordScreen)}>
          <Text style={styles.forgotPassStyle}>Quên mật khẩu?</Text>
        </TouchableOpacity>
        {/* Button đăng ký */}
      <Button
          text="Đăng nhập"
          // onPress={()=>getData}
          style={styles.button}
          textStyle={styles.buttonContent}
          onPress={userLogin}
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
  ) 

})