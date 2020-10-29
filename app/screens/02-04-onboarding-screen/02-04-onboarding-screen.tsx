import React from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle } from "react-native"
import { Button, Screen, Text } from "../../components"
import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"
import LinearGradient from "react-native-linear-gradient"
import Logo from "../../components/logo"
import OnBoardingCarousel from "../../components/OnBoardingCarousel"

import styles from "./styles"
import { TouchableOpacity } from "react-native-gesture-handler"
import screens from "../../navigation/screens"
import { images } from "../../../assets/images"
import { Image } from "react-native"

// const styles = StyleSheet.create({
//   FormButton: {
//     flexDirection: 'row',
//     marginTop: 94,
    
//   },
//   ButtonSignUp: {
//     backgroundColor: "#93C22F",
//     flex: 1,
//     height: 50,
//     borderColor: "#93C22F",
//     borderWidth: 1,
//     borderRadius: 8,
//     marginLeft: 32,
//     marginRight: 16,
//   },
//   ButtonSignIn: {
//     backgroundColor: "transparent",
//     flex: 1,
//     height: 50,
//     borderColor: "#FFFFFF",
//     borderWidth: 1,
//     borderRadius: 8,
//     marginRight: 32
//   },
//   TextStyle: {
//     fontSize: 17,
//     color: "#FFFFFF"
//   },
//   linearGradient: {
//     flex: 1,
//   },
//   Img: {
//     position: "relative",
//     marginLeft: 60,
//     marginTop: 92,
//   },
//   Formtext: {
//     marginLeft: 32,
//     marginTop: 40,
//     marginRight: 32,
//   },
// })
export const OnboardingScreen = observer(function OnboardingScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()
  // OR
  // const rootStore = useStores()

  // Pull in navigation via hook
  const navigation = useNavigation()
  return (
    <Screen style={styles.container} preset="scroll">
      <View style={styles.navigationBar}>
        <TouchableOpacity style={styles.cancelButton}>
          <Text style={styles.cancelText}>Hủy</Text>
        </TouchableOpacity>
      </View>
      {/* Background */}
      <LinearGradient
        colors={["rgba(100,100,100,0.3)", "rgba(50,50,50,0.5)", "rgba(0,0,0,0.90)"]}
        style={styles.background}
      />
      <Image source={images.splashBackground} style={styles.imageBackground} />
      {/* Logo */}
      <View style={styles.logoContainer}>
        <Logo width={246} height={128} />
      </View>

      {/* OnBoardingCarousel */}
      <OnBoardingCarousel />
      {/* SignInUpButton */}
      <View style={styles.buttonContainer}>
        <Button
          text="Đăng ký"
          onPress={() => navigation.navigate(screens.SignUpScreen)}
          style={styles.buttonSignIn}
          textStyle={styles.buttonSignInContent}
        />
        <Button
          text="Đăng nhập"
          onPress={() => navigation.navigate(screens.SignInScreen)}
          style={styles.buttonSignUp}
          textStyle={styles.buttonSignUpContent}
        />
      </View>

      {/* PolicyPrivacyText */}
      <View style={styles.PolicyPrivacyContainer}>
        <Text style={styles.PolicyPrivacyText}>
          Băng cách đồng ý gia nhập, bạn đã chấp nhận
          <TouchableOpacity style={styles.textLinkContainer}>
            <Text style={styles.textLink}>Điều khoản sử dụng</Text>
          </TouchableOpacity>{" "}
          và{" "}
          <TouchableOpacity style={styles.textLinkContainer}>
            <Text style={styles.textLink}>Chính sách bảo mật</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </Screen>
  )
})
