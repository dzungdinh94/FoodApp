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
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: "black",
  },
  avatarWrapper: {
    paddingTop: 64,
  },
  firstText: {
    fontFamily: "SegoeUI-Bold",
    fontSize: 28,
  },
  firstTextWrapper: {
    marginTop: 16,
    marginBottom: 32,
  },
  checkboxText: {
    fontSize: 15,
    fontFamily: "SegoeUI-Regular",
    color: "rgb(102,102,102)",
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
      <Text>Please select your preferred language to facilitate communication</Text>
      <View style={styles.checkboxWrapper}>
        <CheckBox
          title="English"
          checked={language == "English" ? true : false}
          size={20}
          textStyle={styles.checkboxText}
          checkedIcon="check-circle"
          uncheckedIcon="circle"
          checkedColor="#93c22f"
          onIconIconPress={() => {
            setLanguage("English")
          }}
          //containerStyle={{marginHorizontal:10}}
        />
        <CheckBox
          title="Chinese"
          checked={language == "Chinese" ? true : false}
          size={20}
          textStyle={styles.checkboxText}
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
          title="Portuguese"
          checked={language == "Portuguese" ? true : false}
          size={20}
          textStyle={styles.checkboxText}
          checkedIcon="check-circle"
          uncheckedIcon="circle"
          checkedColor="#93c22f"
          onIconPress={() => {
            setLanguage("Portuguese")
          }}
        />
        <CheckBox
          title="Spanish"
          checked={language == "Spanish" ? true : false}
          size={20}
          textStyle={styles.checkboxText}
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
          title="Hindi"
          checked={language == "Hindi" ? true : false}
          size={20}
          textStyle={styles.checkboxText}
          checkedIcon="check-circle"
          uncheckedIcon="circle"
          checkedColor="#93c22f"
          onIconPress={() => {
            setLanguage("Hindi")
          }}
        />
        <CheckBox
          title="Arabic"
          checked={language == "Arabic" ? true : false}
          size={20}
          textStyle={styles.checkboxText}
          checkedIcon="check-circle"
          uncheckedIcon="circle"
          checkedColor="#93c22f"
          onIconPress={() => {
            setLanguage("Arabic")
          }}
        />
        <CheckBox
          title="Russian"
          checked={language == "Russian" ? true : false}
          size={20}
          textStyle={styles.checkboxText}
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
          title="Bulgarian"
          checked={language == "Bulgarian" ? true : false}
          size={20}
          textStyle={styles.checkboxText}
          checkedIcon="check-circle"
          uncheckedIcon="circle"
          checkedColor="#93c22f"
          onIconPress={() => {
            setLanguage("Bulgarian")
          }}
        />
        <CheckBox
          title="Lithuanian"
          checked={language == "Lithuanian" ? true : false}
          size={20}
          textStyle={styles.checkboxText}
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
          onPress={() => {navigation.navigate('Browse01Screen')}}
        ></Button>
      </View>
    </Screen>
  )
})
