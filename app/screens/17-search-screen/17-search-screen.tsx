import React, { useEffect, useState } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle ,View,TouchableOpacity} from "react-native"
import { Screen, Text} from "../../components"
import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"
import styles from "./styles"
import InputForm from "../../components/inputFrom"
import { Icon } from 'react-native-elements'
const ROOT: ViewStyle = {
  backgroundColor: color.palette.white,
  flex: 1,
}

export const SearchScreen = observer(function SearchScreen() {
  const [inputSearch,setInputSearch]=React.useState('')
  const getInputSearch=(text)=>{
    setInputSearch(text)
}
React.useEffect(() => {
  console.log(inputSearch)
},[inputSearch])
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()
  // OR
  // const rootStore = useStores()

  // Pull in navigation via hook
  const navigation = useNavigation()
  const deleteSearch=()=>{
  }

  return (
    <Screen style={ROOT} preset="scroll">
      {/* <Text preset="header" text="SearchScreen" /> */}
      <View style={styles.container}>
      <View style={styles.btncontainer1}>
        <TouchableOpacity>
          <Icon name='search' type='AntDesign' style={styles.icon} />
        </TouchableOpacity>
        <InputForm title="Tìm kiếm" onPress={getInputSearch}/>
        <TouchableOpacity>
          <Icon name='delete' type='feather' style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={deleteSearch}>
          <Text preset="header" text="Hủy"  style={styles.text}/>
        </TouchableOpacity>
      </View>
      </View>
    </Screen>
  )
})
