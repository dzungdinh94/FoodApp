import React from "react"
import { observer } from "mobx-react-lite"
<<<<<<< HEAD
import { View, ViewStyle } from "react-native"
import { Button, Screen, Text, AuthInput } from "../../components"
import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"
import styles from "./styles"
import screens from "../../navigation/screens"
=======
import { ViewStyle } from "react-native"
import { Screen, Text, Button } from "../../components"
import {View, TextInput} from 'react-native'
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"
import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({

  firstText: {
    width: 250,
    height: 106,
  },
  firstTextContent: {
    fontFamily: 'SegoeUI-Bold',
    fontSize: 40,
    color: 'rgb(0,0,0)',
    fontWeight: 'bold',
  },
  secondText:{
    marginBottom: 40
  },
  secondTextContent: {
    fontFamily: 'SegoeUI-Regular',
    fontSize: 17,
    color: 'rgb(102,102,102)'
  },
  thirdTextContent: {
    fontSize: 17,
    fontFamily: 'SegoeUI-Regular',
    color: 'rgb(138,138,143)'
  },
  codeVerifyWrapper:{
    marginTop: 8,
    marginBottom: 36,

  },
  codeVerify: {
    fontSize: 17,
    fontFamily: 'SegoeUI-Regular',
    color: 'rgb(0,0,0)'
  },
  button: {
    width: '100%',
    height: 50,
    borderRadius: 8,
    backgroundColor: 'rgb(147,194,47)',
  },
  lastTextContentWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  lastTextContent:{
    fontSize: 17,
    fontFamily: 'SegoeUI-Regular',
    color: 'rgb(138,138,143)'
  },
  buttonText: {
    fontSize: 17,
    fontFamily: 'SegoeUI-Regular',
    color: 'rgb(255,255,255)'
  }
})
>>>>>>> c4e7cf2c0466c96858475eb39570485e2014f36c

const ROOT: ViewStyle = {
  backgroundColor: color.palette.white,
  flex: 1,
<<<<<<< HEAD
  paddingLeft: 32,
  paddingRight: 32,
  minHeight: 734,
=======
  marginHorizontal: 32,
  marginTop: 80,
>>>>>>> c4e7cf2c0466c96858475eb39570485e2014f36c
}
// const styles = StyleSheet.create({
//   XacThuc: {
//     fontSize: 40,
//     color: "#000000",
//     marginTop: 56,
//     fontWeight: "bold",
//     textAlign:"left",
//     marginRight: 100
//   },
//   Warning: {
//     fontSize: 17,
//     color: "#666666",
//     marginTop: 6,
//     paddingRight: 50
//   },
//   Confirm: {
//     borderBottomColor: "#EFEFF4",
//     borderBottomWidth: 1.5,
//     marginTop:40
//   },
//   ButtonConfirm: {
//     backgroundColor : "#93C22F",
//     height: 50,
//     marginTop: 24,
//     borderRadius:8
//   },
//   Text: {
//     fontSize: 17,
//     color: "#666666",
//   },
//   ConfirmAgain:{
//     flex: 1,
//     marginTop : 24,
//     justifyContent:"space-between",
//     flexDirection: "row",
//   }
// })

export const VerificationCodeScreen = observer(function VerificationCodeScreen({ navigation }) {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()
  // OR
  // const rootStore = useStores()

  // Pull in navigation via hook
  const navigation = useNavigation()
  return (
    <Screen style={ROOT} preset="scroll">
<<<<<<< HEAD
      <View style={styles.container}>
        {/* Section 1- Welcome */}
        <View>
          {/* Welcome Title */}
          <Text style={styles.header}>Xác thực lại số của bạn</Text>
          {/* Guide Text */}
          <Text style={styles.guideText} text="Chúng tôi sẽ gửi mã xác thực tới số mobile" />

          {/* Verification Code Input */}
          <View style={styles.inputsContainer}>
            <AuthInput title="Nhập mã xác thực" isPassword={false} />
          </View>

          {/* Verification Button */}
          <Button
            text="Xác thực"
            onPress={() => navigation.navigate(screens.SetLanguageScreen)}
            style={styles.button}
            textStyle={styles.buttonContent}
          />

          {/* Section 2- Countdown TIme Resend */}
          <View style={styles.resendContainer}>
            <Text style={styles.normalText}>Gửi lại mã xác thực</Text>
            <Text style={styles.normalText}>1:20 phút còn lại</Text>
          </View>
        </View>
=======
      <Text preset="header" text="VerificationCodeScreen" />
      <View style={styles.firstText}>
        <Text style={styles.firstTextContent}>Xác thực lại số của bạn</Text>
      </View>
      <View style={styles.secondText}>
        <Text style={styles.secondTextContent}>Chúng tôi sẽ gửi mã xác thực tới số mobile </Text>
      </View>
      <Text style={styles.thirdTextContent}>Nhập mã xác thực</Text>
      <View style={styles.codeVerifyWrapper}>
        <TextInput style={styles.codeVerify}></TextInput>
      </View>
      <Button text="Xác thực" style={styles.button} textStyle={styles.buttonText} onPress={() => {
        navigation.navigate('SetLanguageScreen')
      }}></Button>
      <View style={styles.lastTextContentWrapper}>
        <Text style={styles.lastTextContent}>Gửi lại mã xác thực</Text>
        <Text style={styles.lastTextContent}>1:20 phút còn lại</Text>
>>>>>>> c4e7cf2c0466c96858475eb39570485e2014f36c
      </View>
    </Screen>
  )
})
