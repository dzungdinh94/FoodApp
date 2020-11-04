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
import { updateProfile } from "../../firebase/userProfileCollection"
import auth from "@react-native-firebase/auth"
import { AuthContext } from "../../navigation"

const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
  flex: 1,
}

export const SetLanguageScreen = observer(function SetLanguageScreen() {
  const { signIn } = React.useContext(AuthContext)
  const [disableButton, setDisableButton] = React.useState(false)
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()
  // OR
  // const rootStore = useStores()

  // Pull in navigation via hook
  const navigation = useNavigation()
  //Radio Input Controller
  //useState
  const [languageDataState, setLanguageDataState] = React.useState(languageData)
  const displayName = React.useState(auth().currentUser.displayName)
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

  function gotoApp() {
    signIn({
      token: "resp.token",
      role: "resp.user.type_user",
    })
  }

  const handleOnPressButton = async () => {
    setDisableButton(true)
    let response = await updateProfile(auth().currentUser.email, { languageDataState })
    if (response) {
      gotoApp()
    } else {
      setDisableButton(false)
      console.log("Có lỗi xảy ra không cập nhật được")
    }
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
          <Text style={styles.header}>Xin chào! {displayName}</Text>
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
            text={disableButton ? "Đang xử lý ..." : "Lựa chọn và Hoàn Tất Đăng Ký"}
            style={disableButton ? styles.buttonDisable : styles.button}
            onPress={handleOnPressButton}
            textStyle={styles.buttonContent}
          />
        </View>
      </View>
    </Screen>
  )
})
