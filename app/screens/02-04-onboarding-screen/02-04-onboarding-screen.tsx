import React from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, StyleSheet, View, Image, Linking } from "react-native"
import { Screen, Text, Button, Wallpaper } from "../../components"
import OnBoardingCarousel from "../../components/OnBoardingCarousel/OnBoardingCarousel"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"
import { Checkbox } from "react-native-paper"
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../navigation"
import { SignInScreen } from "../05-sign-in-screen/05-sign-in-screen";
import { SignUpScreen } from "../07-sign-up-screen/07-sign-up-screen";
import { SliderBox } from "react-native-image-slider-box";
import Hyperlink from 'react-native-hyperlink'
const ROOT: ViewStyle = {
  backgroundColor: "#C8C7CC",
  flex: 1,
  // flexDirection: 'row',
  minHeight: 734,
  minWidth: 375
}

const styles = StyleSheet.create({
  FormButton: {
    flexDirection: 'row',
    marginTop: 94,
    
  },
  ButtonSignUp: {
    backgroundColor: "#93C22F",
    flex: 1,
    height: 50,
    borderColor: "#93C22F",
    borderWidth: 1,
    borderRadius: 8,
    marginLeft: 32,
    marginRight: 16,
  },
  ButtonSignIn: {
    backgroundColor: "transparent",
    flex: 1,
    height: 50,
    borderColor: "#FFFFFF",
    borderWidth: 1,
    borderRadius: 8,
    marginRight: 32
  },
  TextStyle: {
    fontSize: 17,
    color: "#FFFFFF"
  },
  linearGradient: {
    flex: 1,
  },
  Img: {
    position: "relative",
    marginLeft: 60,
    marginTop: 92,
  },
  Formtext: {
    marginLeft: 32,
    marginTop: 40,
    marginRight: 32,
  }
})
export const OnboardingScreen = observer(function OnboardingScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()
  // OR
  // const rootStore = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  const navigation = useNavigation()

  return (
    <Screen style={ROOT} preset="scroll">
      <LinearGradient
        style={styles.linearGradient}
        colors={['#00000000', '#000000']}>
        <Image source={require('/MindX/FoodApp/app/picture/logo-removebg-preview.png')} style={styles.Img} />
        <OnBoardingCarousel></OnBoardingCarousel>
        <View style={styles.FormButton}>
          <Button textStyle={styles.TextStyle} style={styles.ButtonSignUp} text="Đăng kí" onPress={() => navigation.navigate("SignUpScreen")} />
          <Button textStyle={styles.TextStyle} style={styles.ButtonSignIn} text="Đăng nhập" onPress={() => navigation.navigate("SignInScreen")} />
        </View>
        <View style = {styles.Formtext}>
          <Text style={{textAlign: 'center',fontWeight: '100'}}>
            <Text style ={{fontSize: 13}}>
            &nbsp; Bằng cách đồng ý và gia nhập {" "}
            </Text>
            <Text style={{fontSize: 13, color: '#C8C7CC', fontWeight:'bold'}}
              onPress={() => Linking.openURL('http://google.com')}>
              Điều khoản sử dụng 
            </Text>
            <Text style ={{fontSize: 13, fontWeight: '100'}}> và &nbsp;</Text>
            <Text style={{fontSize: 13, color: '#C8C7CC',fontWeight:'bold' }}
              onPress={() => Linking.openURL('http://google.com')}>
              Chính sách bảo mật
            </Text>
          </Text>
        </View>
      </LinearGradient>
    </Screen>
  )
})
