import React from "react"
import { observer } from "mobx-react-lite"
import { FlatList, View, ViewStyle } from "react-native"
import { Button, Screen, Text } from "../../components"
import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"
import AvatarInput from "../../components/AvatarInput"
import RadioInput from "../../components/RadioInput"
import screens from "../../navigation/screens"
import styles from "./styles"
import languageData from "../../data/languageData"

const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
  flex: 1,
}

export const SetLanguageScreen = observer(function SetLanguageScreen() {
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
    <Screen style={ROOT} preset="scroll">
      <View style={styles.container}>
        {/* MAIN VIEW */}
        <View>
          {/* Avatar */}
          <View style={styles.avatarInputContainer}>
            <AvatarInput width={60} height={60} type="none" />
          </View>
          {/* Welcome Title */}
          <Text style={styles.header}>Xin chào Hoàn!</Text>
          {/* Guide Text */}
          <Text style={styles.guideText} text="Lựa chọn loại ngôn ngữ mà bạn muốn sử dụng" />
          {/* Input Language */}
          <FlatList
            style={{ marginBottom: 20 }}
            data={languageDataState}
            renderItem={(value) => {
              const { item } = value
              const { title, selected } = item
              return (
                <View style={{ width: "50%", marginBottom: 16 }}>
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
