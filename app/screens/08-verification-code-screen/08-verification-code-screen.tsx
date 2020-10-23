import React from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle,StyleSheet,View } from "react-native"
import { Screen, Text, TextField,Button } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"
import { findLastIndex } from "ramda"

const ROOT: ViewStyle = {
  backgroundColor: "#ffffff",
  flex: 1,
  paddingLeft: 32,
  paddingRight: 32,
  minHeight: 734,
}
const styles = StyleSheet.create({
  XacThuc: {
    fontSize: 40,
    color: "#000000",
    marginTop: 56,
    fontWeight: "bold",
    textAlign:"left",
    marginRight: 100
  },
  Warning: {
    fontSize: 17,
    color: "#666666",
    marginTop: 6,
    paddingRight: 50
  },
  Confirm: {
    borderBottomColor: "#EFEFF4",
    borderBottomWidth: 1.5,
    marginTop:40
  },
  ButtonConfirm: {
    backgroundColor : "#93C22F",
    height: 50,
    marginTop: 24,
    borderRadius:8
  },
  Text: {
    fontSize: 17,
    color: "#666666",
  },
  ConfirmAgain:{
    flex: 1,
    marginTop : 24,
    justifyContent:"space-between",
    flexDirection: "row",
  }
})

export const VerificationCodeScreen = observer(function VerificationCodeScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()
  // OR
  // const rootStore = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <Screen style={ROOT} preset="scroll">

      <Text style={styles.XacThuc} text="Xác thực lại số của bạn " />
      <Text style={styles.Warning} text="Chúng tôi sẽ gửi mã xác thực tới số mobile " />
      <TextField style={styles.Confirm} placeholder="Nhập mã xác thực" label="Nhập mã xác thực"/>
      <Button textStyle={{fontSize:17}} style={styles.ButtonConfirm} text="Xác thực" />
      <View style={styles.ConfirmAgain}>
        <Text style={styles.Text} text="Gửi lại mã xác thực " />
        <Text style={styles.Text} text="1:20 phút còn lại " />
      </View>
    </Screen>
  )
})
