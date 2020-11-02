import React, {useState} from "react"
import { observer } from "mobx-react-lite"
import { Alert, ViewStyle } from "react-native"
import { Button, Screen, Text, AuthInput } from "../../components"
import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color, spacing } from "../../theme"
import { View } from "react-native"
import { ScrollView, TextInput, TouchableOpacity } from "react-native-gesture-handler"
import styles from "./styles"
import { Icon } from "react-native-elements"
import screens from "../../navigation/screens"
import auth from '@react-native-firebase/auth';
const ROOT: ViewStyle = {
  backgroundColor: color.palette.white,
  flex: 1,
  // paddingLeft: 32,
  // paddingRight: 32,
  minHeight: 734,
}
export const ForgotPasswordScreen = observer(function ForgotPasswordScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()
  // OR
  // const rootStore = useStores()

  // Pull in navigation via hook
  const navigation = useNavigation()
  const [isLoaded,isLoading] = useState(false)
  const [email,setEmail] = useState('')
  const getInputEmail = (text) => {
      setEmail(text)
  }
  const forgotPassword = async () => {
    if(email==''){
      Alert.alert("Bạn chưa nhập email")
    }else{
      isLoading(true)
      await auth().sendPasswordResetEmail(email).then(()=>{
        Alert.alert('Kiểm tra mail của bạn')
        navigation.navigate('SignInScreen')
      }).catch((error)=>{
        console.log(error)
      })
      
      
    }
  }
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
          <AuthInput title="Email" isPassword={false} value={email} handleClick={getInputEmail}/>
        </View>
        {/* Button */}
        <Button
          text="Đăng kí"
          onPress={forgotPassword}
          style={styles.button}
          textStyle={styles.buttonContent}
        />
      </View>
    </Screen>
  )
})
