import React from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, View, FlatList } from "react-native"
import { Screen, Text } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color, spacing } from "../../theme"
import styles from './styles'
import { Icon } from 'react-native-elements';

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
      <View style={styles.heard}>
        <Text style={styles.textHeard}>Chỉnh sửa</Text>
        <Icon
          name="search1"
          type="antdesign"
          size={19}
        />
      </View>


        <Text style={styles.tittle}>Danh sách yêu thích</Text>

        <View style={styles.sortFilter}>
<View style={styles.sort}>
<Icon
          name="sort"
          type="font-awesome"
          size={19}
          color = {color.palette.lightGrey}
        />
        <Text style={styles.textSort}>Sắp xếp</Text>
</View>
<View style={styles.sort}>
<Icon
          name="filter"
          type="foundation"
          size={19}
          color = {color.palette.lightGrey}
        />
        <Text style={styles.textSort}>Lọc</Text>
</View>
        </View>

    </Screen>
  )
})
