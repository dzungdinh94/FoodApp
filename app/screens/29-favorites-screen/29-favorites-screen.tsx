import React from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, View, FlatList, ScrollView} from "react-native"
import { Screen, Text } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color, spacing } from "../../theme"
import styles from './styles'
import { Icon } from 'react-native-elements';



// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"

import Item from "./item"


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
        <View style={styles.header}>
          <View style={styles.headerContainer}>
            <View style={[styles.flexRow, styles.justifySpaceBetween, styles.center]}>
              <Text style={[styles.text, styles.findText]}>Chỉnh sửa</Text>
              <Icon name="search" type="evilicon" color="black" />
            </View>
            <Text style={[styles.text, styles.title]}>Danh sách yêu thích</Text>

            <View style={[styles.flexRow]}>
              <View style={[styles.flexRow, styles.center,styles.typeContainer]}>
                <Icon name="arrow-down" type="octicon" iconStyle={[styles.iconTop,styles.iconTopLeft]} />
                <Icon name="arrow-up" type="octicon" iconStyle={styles.iconTop} />
                <Text style={[styles.text, styles.category, styles.leftCategory]}>Sắp xếp</Text>
              </View>
              <View style={[styles.flexRow, styles.center,styles.typeContainer]}>
                <Icon name="filter" type="font-awesome-5" iconStyle={[styles.iconTopLeft,styles.iconTop]} />
                <Text style={[styles.text, styles.category]}>Lọc</Text>
              </View>
            </View>
          </View>
          <View style={[styles.flexItem, styles.flexRow]}>
            <Item itemname="Bông cải xanh" itemprice="20K" />
            <Item itemname="Đu đủ" itemprice="20K" />
            <Item itemname="Chuối" itemprice="20K" />
            <Item itemname="Cà rốt" itemprice="20K" />
            <Item itemname="Bông cải xanh" itemprice="20K" />
            <Item itemname="Bông cải xanh" itemprice="20K" />
            <Item itemname="Bông cải xanh" itemprice="20K" />
            <Item itemname="Bông cải xanh" itemprice="20K" />
            <Item itemname="Bông cải xanh" itemprice="20K" />
          </View>
        </View>
      </ScrollView>
    </Screen>
  )
})
//done