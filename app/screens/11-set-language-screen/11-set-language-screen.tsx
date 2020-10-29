import React from "react"
import { observer } from "mobx-react-lite"
import { FlatList, View, ViewStyle } from "react-native"
import { Button, Screen, Text } from "../../components"
import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color, spacing } from "../../theme"
import AvatarInput from "../../components/AvatarInput"
import RadioInput from "../../components/RadioInput"
import screens from "../../navigation/screens"
import styles from "./styles"
import languageData from "../../data/languageData"

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
  const navigation = useNavigation()
  //Radio Input Controller
  //useState
  const [languageDataState, setLanguageDataState] = React.useState(languageData)
  //Function Handle Choose
  const HandleChoose = (title) => {
    let tempData = []
    languageDataState.map((value) =>
      value.title === title
        ? tempData.push({ ...value, selected: true })
        : tempData.push({ ...value, selected: false }),
    )
    setLanguageDataState(tempData)
  }
  return (
    <Screen style={ROOT} preset="fixed">
      <View style={styles.container}>
        {/* MAIN VIEW */}
        <View>
          {/* Avatar */}
          <View style={styles.avatarInputContainer}>
            <AvatarInput width={60} height={60} type="none" />
          </View>
          {/* Welcome Title */}
          <Text style={styles.header}>Xin chào!</Text>
          {/* Guide Text */}
          <Text style={styles.guideText} text="Lựa chọn loại ngôn ngữ mà bạn muốn sử dụng" />
          {/* Input Language */}
          <FlatList
            style={{ marginTop: spacing[7] }}
            data={languageDataState}
            renderItem={(value) => {
              const { item } = value
              const { title, selected } = item
              return (
                <View style={{ marginRight: spacing[4], marginBottom: spacing[4] }}>
                  <RadioInput title={title} selected={selected} onClick={HandleChoose} />
                </View>
              )
            }}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
          />

          {/* Choose Button */}
          <Button
            text="Lựa chọn"
            onPress={() => navigation.navigate(screens.SignInScreen)}
            style={styles.button}
            textStyle={styles.buttonContent}
          />
        </View>
      </View>
    </Screen>
  )
})
