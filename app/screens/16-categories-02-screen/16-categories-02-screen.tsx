import React from "react"
import { observer } from "mobx-react-lite"
import { ScrollView, ViewStyle, View, Image, TouchableOpacity, TextStyle } from "react-native"
import { Screen, Text } from "../../components"
import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"
import style from './style'
import { Header } from '../../components'
const ROOT: ViewStyle = {
  backgroundColor: color.palette.background,
  flex: 1,
}
export const Categories02Screen = observer(function Categories02Screen() {
  const navigation = useNavigation()

  return (
    <Screen style={ROOT} preset="scroll">
      <Header leftIcon='back' headerText='Back' onLeftPress={() => { navigation.navigate('Browse02Screen') }} />
      <ScrollView >
        <Text style={style.header}>Danh mục</Text>
        <View style={style.container}>

          <View style={style.cover}>
            <Image source={require('../../image/traicay.png')} style={style.Image} />
            <Text style={style.name}>Trái cây</Text>
            <Text style={style.price}>746 mặt hàng</Text>
          </View>


          <View style={style.cover}>
            <Image source={require('../../image/rau.png')} style={style.Image} />
            <Text style={style.name}>Rau</Text>
            <Text style={style.price}>926 mặt hàng</Text>
          </View>

        {/* </View>

        <View style={style.container}> */}
          <View>
            <View style={style.cover}>
              <Image source={require('../../image/banhkeo.png')} style={style.Image} />
              <Text style={style.name}>Bánh kẹo</Text>
              <Text style={style.price}>4385 mặt hàng</Text>
            </View>
          </View>
          <View>
            <View style={style.cover}>
              <Image source={require('../../image/thit.png')} style={style.Image} />
              <Text style={style.name}>Thịt</Text>
              <Text style={style.price}>268 mặt hàng</Text>
            </View>
          </View>
        {/* </View>

        <View style={style.container}> */}
          <View>
            <View style={style.cover}>
              <Image source={require('../../image/sua.png')} style={style.Image} />
              <Text style={style.name}>Sữa</Text>
              <Text style={style.price}>926 mặt hàng</Text>
            </View>
          </View>
          <View>
            <View style={style.cover}>
              <Image source={require('../../image/douong.png')} style={style.Image} />
              <Text style={style.name}>Đồ uống</Text>
              <Text style={style.price}>725 mặt hàng</Text>
            </View>
          </View>
        {/* </View>

        <View style={style.container}> */}
          <View>
            <View style={style.cover}>
              <Image source={require('../../image/cscn.png')} style={style.Image} />
              <Text style={style.name}>Chăm sóc cá nhân</Text>
              <Text style={style.price}>9237 mặt hàng</Text>
            </View>
          </View>
          <View>
            <View style={style.cover}>
              <Image source={require('../../image/rau.png')} style={style.Image} />
              <Text style={style.name}>Gia dụng</Text>
              <Text style={style.price}>583 mặt hàng</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </Screen>
  )
})
