import React from "react"
import { observer } from "mobx-react-lite"
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

const ROOT: ViewStyle = {
  backgroundColor: color.palette.white,
  flex: 1,
  marginHorizontal: 32,
  marginTop: 80,
}

export const VerificationCodeScreen = observer(function VerificationCodeScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()
  // OR
  // const rootStore = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <Screen style={ROOT} preset="scroll">
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
      <Button text="Xác thực" style={styles.button} textStyle={styles.buttonText}></Button>
      <View style={styles.lastTextContentWrapper}>
        <Text style={styles.lastTextContent}>Gửi lại mã xác thực</Text>
        <Text style={styles.lastTextContent}>1:20 phút còn lại</Text>
      </View>
    </Screen>
  )
})
