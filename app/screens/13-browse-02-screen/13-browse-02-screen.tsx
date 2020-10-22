import React from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, View, TouchableOpacity, ScrollView, Image, FlatList } from "react-native"
import { Icon } from 'react-native-elements'
import { Screen, Text } from "../../components"
import { color } from "../../theme"
import style from "./style"
import LikeHeart from '../../components/likeheart'
import ImageBullet from '../../components/image-bullet'
import Cover from '../../components/cover'
import { useNavigation } from "@react-navigation/native"
import { ListItem, SpecialList } from "../data/data"
const ROOT: ViewStyle = {
  backgroundColor: color.palette.background,
  flex: 1
}

export const Browse02Screen = observer(function Browse02Screen() {
  const navigation = useNavigation()
  
  const renderSpecialList = ({ item, index }) => {
    return (
      <View>
          
          <Image source={require('../../image/header.png')} style={style.Image} />
          <LikeHeart/>
       
        <View style={style.title}>
          <Text style={style.textgray} text={item.title} />
          <Text style={style.textblack} text={item.item} />
          <Text style={style.textgray} text={item.price} />
        </View>
      </View>
    )
  }
  const renderListItem = ({ item, index }) => {
    return (
      <View style={style.listitem}>
        <View style={style.buy}>
          <Image source={require('../../image/header.png')} style={style.buyitem} />
          <View style={{flex:1, flexDirection:'row', justifyContent:'space-between'}}>
          <View style={style.titlebuy}>
            <Text style={style.textgray} text={item.title} />
            <Text style={style.textblack} text={item.item} />
            <Text style={style.textgray} text={item.price} />
          </View>
          <TouchableOpacity>
            <Text style={style.buttonbuy} text="Thêm vào giỏ" />
          </TouchableOpacity>            
          </View>

        </View>
      </View>

    )
  }
  return (
    <Screen style={ROOT} preset="scroll">
      <ScrollView>
        <Cover />

        <View>
          <View style={style.textHead}>
            <Text style={style.item}>Danh mục</Text>
            <TouchableOpacity style={{flexDirection: 'row',justifyContent:'flex-end' }}>
              <Text style={style.textRight} onPress={() => { navigation.navigate('Categories02Screen') }}>Tất cả</Text>

              <Icon name='navigate-next' type='MaterialIcons' color='gray' />
            </TouchableOpacity>

          </View>
          <ScrollView horizontal={true}>
            <View>
              <ImageBullet />
              <View style={style.bullettext}>
                <Text style={style.textbullet} text="Trái cây" />
                <Text style={style.textwhite} text="Giá từ 5.000đ" />
              </View>
            </View>
            <View>
              <ImageBullet />
              <View style={style.bullettext}>
                <Text style={style.textbullet} text="Rau" />
                <Text style={style.textwhite} text="Giá từ 3.000đ" />
              </View>
            </View>
            <View>
              <ImageBullet />
              <View style={style.bullettext}>
                <Text style={style.textbullet} text="Bánh" />
                <Text style={style.textwhite} text="Giá từ 5.000đ" />
              </View>
            </View>
          </ScrollView>
        </View>
        <View>
          <View style={style.textHead}>
            <Text style={style.item}>Đặc biệt</Text>
            <TouchableOpacity style={{ display: 'flex', flexDirection: 'row' }}>
              <Text style={{ color: 'gray' }}>Tất cả</Text>
              <Icon name='navigate-next' type='MaterialIcons' color='gray' />
            </TouchableOpacity>

          </View>
          <FlatList
            horizontal={true}
            data={SpecialList}
            renderItem={renderSpecialList}
          />
        </View>
        {/* last item 2 */}

        <View>
          <View style={style.controlbar}>
            <TouchableOpacity style={{ display: 'flex', flexDirection: 'row' }}>
              <Text style={style.controlitem}>Bán chạy</Text>
              <Icon name='down' type='antdesign' color='gray' size={10} marginLeft={20} marginTop={15} />
            </TouchableOpacity>
            <TouchableOpacity style={{ display: 'flex', flexDirection: 'row' }}>
              <Icon name='sort' type='font-awesome' color='gray' size={12} marginRight={10} marginTop={15} />
              <Text style={style.controlitem}>Sắp xếp</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ display: 'flex', flexDirection: 'row' }}>
              <Text style={style.controlitem}>Lọc</Text>
              <Icon name='filter' type='fontisto' color='gray' size={10} marginLeft={20} marginTop={15} />
            </TouchableOpacity>
          </View>
          <View>
          </View>
          <FlatList
            data={ListItem}
            renderItem={renderListItem}
          />
        </View>
        {/* last item 2.2 */}

      </ScrollView>
    </Screen>
  )
})
