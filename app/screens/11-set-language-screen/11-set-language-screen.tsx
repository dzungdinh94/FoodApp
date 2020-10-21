import React from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, Text, View, StyleSheet } from "react-native"
import { CheckBox } from "react-native-elements"
import { Screen, Button } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"
import { check } from "prettier"
const ROOT: ViewStyle = {
  backgroundColor: color.palette.white,
  flex: 1,
  marginHorizontal: 32,
}

const styles = StyleSheet.create({
  checkboxWrapper: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 18,
    marginHorizontal: 0,
    width: "100%",
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: "black",
  },
  avatarWrapper: {
    paddingTop: 32,
  },
  firstText: {
    fontFamily: "SegoeUI-Bold",
    fontSize: 28,
  },
  firstTextWrapper: {
    marginTop: 16,
    marginBottom: 32,
  },
  checkboxTextNormal: {
    fontSize: 17,
    fontFamily: "SegoeUI-Regular",
    color: "rgb(102,102,102)",
    fontWeight: "normal",
    marginLeft: 8,
    marginRight: 20,
  },
  checkboxTextPress: {
    fontSize: 17,
    fontFamily: "SegoeUI-Regular",
    color: "rgb(102,102,102)",
    fontWeight: "bold",
    marginLeft: 8,
    marginRight: 20,
  },
  button: {
    width: "100%",
    height: 50,
    borderRadius: 8,
    backgroundColor: "rgb(147,194,47)",
  },
  buttonWrapper: {
    marginTop: 32,
  },
  secondTextWrapper: {
    marginBottom: 32,
  },
  secondTextContent: {
    fontFamily: "SegoeUI-Regular",
    fontSize: 17,
    color: "rgb(102,102,102)",
  },
})

export const SetLanguageScreen = observer(function SetLanguageScreen({ navigation }) {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()
  // OR
  // const rootStore = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  const [language, setLanguage] = React.useState("English")

  return (
    <Screen style={ROOT} preset="scroll">
      <Text preset="header" text="SetLanguageScreen" />
      <View style={styles.avatarWrapper}>
        <View style={styles.avatar}></View>
      </View>
      <View style={styles.firstTextWrapper}>
        <Text style={styles.firstText}>Hi Thuý!</Text>
      </View>
      <View style={styles.secondTextWrapper}>
        <Text style={styles.secondTextContent}>
          Please select your preferred language to facilitate communication
        </Text>
      </View>
      <View style={styles.checkboxWrapper}>
        <CheckBox
          containerStyle={{
            marginLeft: 0,
            paddingHorizontal: 0,
            paddingVertical: 0,
            borderColor: color.palette.white,
            backgroundColor: color.palette.white,
          }}
          title="English"
          checked={language == "English" ? true : false}
          size={20}
          textStyle={language == "English" ? styles.checkboxTextPress : styles.checkboxTextNormal}
          checkedIcon="check-circle"
          uncheckedIcon="circle"
          checkedColor="#93c22f"
          onIconPress={() => {
            setLanguage("English")
          }}
        />
        <CheckBox
          containerStyle={{
            marginLeft: 0,
            paddingHorizontal: 0,
            paddingVertical: 0,
            borderColor: color.palette.white,
            backgroundColor: color.palette.white,
          }}
          title="Chinese"
          checked={language == "Chinese" ? true : false}
          size={20}
          textStyle={language == "Chinese" ? styles.checkboxTextPress : styles.checkboxTextNormal}
          checkedIcon="check-circle"
          uncheckedIcon="circle"
          checkedColor="#93c22f"
          onIconPress={() => {
            setLanguage("Chinese")
          }}
        />
      </View>
      <View style={styles.checkboxWrapper}>
        <CheckBox
          containerStyle={{
            marginLeft: 0,
            paddingHorizontal: 0,
            paddingVertical: 0,
            borderColor: color.palette.white,
            backgroundColor: color.palette.white,
          }}
          title="Portuguese"
          checked={language == "Portuguese" ? true : false}
          size={20}
          textStyle={
            language == "Portuguese" ? styles.checkboxTextPress : styles.checkboxTextNormal
          }
          checkedIcon="check-circle"
          uncheckedIcon="circle"
          checkedColor="#93c22f"
          onIconPress={() => {
            setLanguage("Portuguese")
          }}
        />
        <CheckBox
          containerStyle={{
            marginLeft: 0,
            paddingHorizontal: 0,
            paddingVertical: 0,
            borderColor: color.palette.white,
            backgroundColor: color.palette.white,
          }}
          title="Spanish"
          checked={language == "Spanish" ? true : false}
          size={20}
          textStyle={language == "Spanish" ? styles.checkboxTextPress : styles.checkboxTextNormal}
          checkedIcon="check-circle"
          uncheckedIcon="circle"
          checkedColor="#93c22f"
          onIconPress={() => {
            setLanguage("Spanish")
          }}
        />
      </View>
      <View style={styles.checkboxWrapper}>
        <CheckBox
          containerStyle={{
            marginLeft: 0,
            paddingHorizontal: 0,
            paddingVertical: 0,
            borderColor: color.palette.white,
            backgroundColor: color.palette.white,
          }}
          title="Hindi"
          checked={language == "Hindi" ? true : false}
          size={20}
          textStyle={language == "Hindi" ? styles.checkboxTextPress : styles.checkboxTextNormal}
          checkedIcon="check-circle"
          uncheckedIcon="circle"
          checkedColor="#93c22f"
          onIconPress={() => {
            setLanguage("Hindi")
          }}
        />
        <CheckBox
          containerStyle={{
            marginLeft: 0,
            paddingHorizontal: 0,
            paddingVertical: 0,
            borderColor: color.palette.white,
            backgroundColor: color.palette.white,
          }}
          title="Arabic"
          checked={language == "Arabic" ? true : false}
          size={20}
          textStyle={language == "Arabic" ? styles.checkboxTextPress : styles.checkboxTextNormal}
          checkedIcon="check-circle"
          uncheckedIcon="circle"
          checkedColor="#93c22f"
          onIconPress={() => {
            setLanguage("Arabic")
          }}
        />
        <CheckBox
          containerStyle={{
            marginLeft: 0,
            paddingHorizontal: 0,
            paddingVertical: 0,
            borderColor: color.palette.white,
            backgroundColor: color.palette.white,
          }}
          title="Russian"
          checked={language == "Russian" ? true : false}
          size={20}
          textStyle={language == "Russian" ? styles.checkboxTextPress : styles.checkboxTextNormal}
          checkedIcon="check-circle"
          uncheckedIcon="circle"
          checkedColor="#93c22f"
          onIconPress={() => {
            setLanguage("Russian")
          }}
        />
      </View>
      <View style={styles.checkboxWrapper}>
        <CheckBox
          containerStyle={{
            marginLeft: 0,
            paddingHorizontal: 0,
            paddingVertical: 0,
            borderColor: color.palette.white,
            backgroundColor: color.palette.white,
          }}
          title="Bulgarian"
          checked={language == "Bulgarian" ? true : false}
          size={20}
          textStyle={language == "Bulgarian" ? styles.checkboxTextPress : styles.checkboxTextNormal}
          checkedIcon="check-circle"
          uncheckedIcon="circle"
          checkedColor="#93c22f"
          onIconPress={() => {
            setLanguage("Bulgarian")
          }}
        />
        <CheckBox
          containerStyle={{
            marginLeft: 0,
            paddingHorizontal: 0,
            paddingVertical: 0,
            borderColor: color.palette.white,
            backgroundColor: color.palette.white,
          }}
          title="Lithuanian"
          checked={language == "Lithuanian" ? true : false}
          size={20}
          textStyle={
            language == "Lithuanian" ? styles.checkboxTextPress : styles.checkboxTextNormal
          }
          checkedIcon="check-circle"
          uncheckedIcon="circle"
          checkedColor="#93c22f"
          onIconPress={() => {
            setLanguage("Lithuanian")
          }}
        />
      </View>
      <View style={styles.buttonWrapper}>
        <Button
          text="Select"
          style={styles.button}
          textStyle={{ fontFamily: "SegoeUI-Semibold", fontSize: 17 }}
          onPress={() => {
            navigation.navigate("Browse01Screen")
          }}
        ></Button>
      </View>
    </Screen>
  )
})
