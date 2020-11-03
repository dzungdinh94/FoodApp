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

const GRADIENT_VALUE = [
  "rgba(100,100,100,0.4)",
  "rgba(100,100,100,0.4)",
  "rgba(0,0,0,0.7)",
  "rgba(0,0,0,1)",
]
//RenderItem
const CategoriesRenderItem = () => {
  return (
    <LinearGradient
      colors={[color.palette.gray200, color.palette.gray200, color.palette.black]}
      style={{
        width: 138,
        height: 188,
        borderRadius: 8,
        marginRight: 15,
      }}
    >
      <SimpleImage width={138} height={188} />
      <View style={{ position: "absolute", bottom: 14, left: spacing[4] }}>
        <Text style={{ color: "white", fontSize: 17, fontWeight: "bold" }}>Trái cây</Text>
        <Text style={{ color: "white", fontSize: 11, marginTop: spacing[1] }}>Giá từ 5.000đ</Text>
      </View>
    </LinearGradient>
  )
}

const SearchRenderItem = ({ navigateTo, counterClick }) => {
  return (
    <View
      style={{
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        marginTop: 17,
      }}
    >
      {/* Part1:Image*/}
      <TouchableOpacity onPress={navigateTo} style={{ flexDirection: "row", alignItems: "center" }}>
        {/* Image */}
        <View
          style={{
            width: 80,
            height: 80,
            backgroundColor: "rgb(200,200,200)",
            borderRadius: 8,
            marginRight: 10,
          }}
        >
          <SimpleImage width={80} height={80} />
        </View>
      </TouchableOpacity>
      {/*Part2: Counter */}
      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          flexGrow: 1,
          borderBottomWidth: 1,
          borderColor: color.palette.gray240,
          height: "100%",
          alignItems: "center",
          paddingVertical: spacing[4],
        }}
      >
        {/* Details */}
        <View>
          <Text style={{ color: color.palette.lightGrey, fontSize: 13, lineHeight: 18 }}>Rau</Text>
          <Text
            style={{
              color: "black",
              fontSize: 15,
              lineHeight: 20,
              fontWeight: "bold",
            }}
          >
            Mù tạt xanh
          </Text>
          <Text
            style={{
              color: color.palette.lightGrey,
              fontSize: 13,
              lineHeight: 18,
              marginTop: spacing[1],
            }}
          >
            5.000đ
          </Text>
        </View>
        {/* Counter Indicator */}
        <ItemCounter
          onClickAdd={() => counterClick(1)}
          onClickRemove={() => counterClick(-1)}
          startValue={0}
        />
      </View>
    </View>
  )
}

const ListFood = ({ title, renderItem, marginHorizontal, navigateTo }) => {
  return (
    <View
      style={{
        marginTop: 24,
      }}
    >
      {/* List Header */}
      <TouchableOpacity
        onPress={navigateTo}
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 13,
          paddingHorizontal: marginHorizontal === null ? 0 : marginHorizontal,
        }}
      >
        <Text
          style={{
            fontSize: 17,
            fontWeight: "bold",
            color: color.palette.black,
          }}
        >
          {title}
        </Text>
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Text style={{ fontSize: 12, color: color.palette.gray100 }}>Tất cả</Text>
          <Icon name="navigate-next" type="material" size={20} />
        </View>
      </TouchableOpacity>
      {/* List Item */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ paddingLeft: marginHorizontal === null ? 0 : marginHorizontal }}
      >
        <TouchableOpacity onPress={navigateTo}>{renderItem()}</TouchableOpacity>
        <TouchableOpacity onPress={navigateTo}>{renderItem()}</TouchableOpacity>
        <TouchableOpacity onPress={navigateTo}>{renderItem()}</TouchableOpacity>
        <TouchableOpacity onPress={navigateTo}>{renderItem()}</TouchableOpacity>
      </ScrollView>
    </View>
  )
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
          <View style={{flex:1, flexDirection:'row'}}>
          <View style={style.titlebuy}>
            <Text style={style.textgray} text={item.title} />
            <Text style={style.textblack} text={item.item} />
            <Text style={style.textgray} text={item.price} />
          </View>
          <TouchableOpacity style={{flex:1,justifyContent:'flex-end',alignItems:'flex-end'}}>
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
            <TouchableOpacity style={style.titleHead}>
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
            <TouchableOpacity style={style.titleHead}>
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
