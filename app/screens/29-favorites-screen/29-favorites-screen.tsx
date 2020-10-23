import React from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, View, FlatList, Dimensions } from "react-native"
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

let DATA = [{
  name: 'Bông cải xanh',
  price: '20k'
},
{
  name: 'Đu đủ',
  price: '20k'
},
{
  name: 'Chuối',
  price: '20k'
},
{
  name: 'Cà rốt organic',
  price: '20k'
},
{
  name: 'Bông cải xanh',
  price: '20k'
},
{
  name: 'Bông cải xanh',
  price: '20k'
},
{
  name: 'Bông cải xanh',
  price: '20k'
},]


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
            color={color.palette.lightGrey}
          />
          <Text style={styles.textSort}>Sắp xếp</Text>
        </View>
        <View style={styles.sort}>
          <Icon
            name="filter"
            type="foundation"
            size={19}
            color={color.palette.lightGrey}
          />
          <Text style={styles.textSort}>Lọc</Text>
        </View>
      </View>

      <Screen preset="scroll" style={styles.listLike}>
        <FlatList
        onEndReachedThreshold={1}
          numColumns={2}
          data={DATA}
          renderItem={({ item, index }) => {
            return (
              <View key={index} style={styles.background}>
                <View style={styles.mask}>
                  <Icon style={{ margin: 4 }}
                    name="heart-circle"
                    type="ionicon"
                    color={'rgb(252, 31, 74)'}
                    size={21}
                  />
                </View>

                  <Text style={styles.textMask}>{item.name}</Text>
                  <Text style={[styles.textMask, { color: color.palette.lightGrey }]}>{item.price}</Text>
                
              </View>
            )

          }}

        ></FlatList>
      </Screen>


    </Screen>
  )
})
