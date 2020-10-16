import React from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, View, ScrollView, ImageBackground} from "react-native"
import {Screen, Text } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"
import Item from './item'
import {Icon} from 'react-native-elements'
import styles from './styles'
const ROOT: ViewStyle = {
  backgroundColor: color.palette.white,
  flex: 1,
}

export const FavoritesScreen = observer(function FavoritesScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()
  // OR
  // const rootStore = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <Screen style={ROOT} preset="scroll">
      <ScrollView>

      <View >
        <View style={styles.headerContainer}>
        <Icon name="search" type='evilicon' color='black'/>
        
        <Text style={[styles.text,styles.findText]}>Chỉnh sửa</Text>
        <Text style={[styles.text,styles.title]}>Danh sách yêu thích</Text>
        
        <View style={[styles.flexRow]}>
          <Text style={[styles.text,styles.category, styles.leftCategory]}>Sắp xếp</Text>
          <Text style={[styles.text, styles.category]}>Lọc</Text>
        </View>
        </View>
        <View style={[styles.flexItem,styles.flexRow]}>
          <Item itemname="Bông cải xanh" itemprice='20K'/>
          <Item itemname="Đu đủ" itemprice='20K'/>
          <Item itemname="Chuối" itemprice='20K'/>
          <Item itemname="Cà rốt" itemprice='20K'/>
          <Item itemname="Bông cải xanh" itemprice='20K'/>
          <Item itemname="Bông cải xanh" itemprice='20K'/>
          <Item itemname="Bông cải xanh" itemprice='20K'/>
          <Item itemname="Bông cải xanh" itemprice='20K'/>
          <Item itemname="Bông cải xanh" itemprice='20K'/>
          
        </View>
      </View>
      </ScrollView>

    </Screen>
  )
})
