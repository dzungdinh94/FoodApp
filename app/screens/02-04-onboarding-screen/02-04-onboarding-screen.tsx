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
        colors={["rgba(100,100,100,0.3)", "rgba(50,50,50,0.5)", "rgba(0,0,0,0.95)"]}
        style={styles.background}
      />
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
