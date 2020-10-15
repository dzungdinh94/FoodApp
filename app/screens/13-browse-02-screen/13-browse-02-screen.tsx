import React from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { Screen, Text } from "../../components"
import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color, spacing } from "../../theme"
import { View } from "react-native"
import { Icon } from "react-native-elements"
import LinearGradient from "react-native-linear-gradient"
import SimpleImage from "../../components/simpleImage"
import FavoriteToogle from "../../components/FavoriteToogle/FavoriteToogle"
import Logo from "../../components/logo"
import { ScrollView } from "react-native"

import styles from "./styles"
import { TouchableOpacity } from "react-native-gesture-handler"
import screens from "../../navigation/screens"
import ItemCounter from "../../components/ItemCounter/ItemCounter"
import { Picker } from "@react-native-community/picker"

const ROOT: ViewStyle = {
  backgroundColor: color.palette.white,
  flex: 1,
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
      colors={["rgba(100,100,100,0.15)", "rgba(100,100,100,0.15)", "rgba(0,0,0,1)"]}
      style={{
        width: 138,
        height: 188,
        borderRadius: 8,
        marginRight: 15,
      }}
    >
      <SimpleImage width={138} height={188} />
      <View style={{ top: 140, left: 13 }}>
        <Text style={{ color: "white", fontSize: 17, fontWeight: "bold" }}>Trái cây</Text>
        <Text style={{ color: "white", fontSize: 11 }}>Giá từ 5.000đ</Text>
      </View>
    </LinearGradient>
  )
}

const RenderItem2 = () => {
  return (
    <View>
      {/* Images */}
      <View
        style={{
          width: 122,
          height: 122,
          borderRadius: 8,
          backgroundColor: color.palette.lighterGrey,
          marginRight: 15,
          marginBottom: 10,
        }}
      >
        <SimpleImage width={122} height={122} />
        <View style={{ left: 84 }}>
          <FavoriteToogle />
        </View>
      </View>
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
        <Text style={{ color: color.palette.lightGrey, fontSize: 13, lineHeight: 18 }}>
          Giá từ 5.000đ
        </Text>
      </View>
    </View>
  )
}
const RenderItem3 = () => {
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
      <View style={{ flexDirection: "row", alignItems: "center" }}>
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
      </View>
      {/*Part2: Counter */}
      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          flexGrow: 1,
          borderBottomWidth: 0.7,
          borderColor: color.palette.lighterGrey,
          height: "100%",
          alignItems: "center",
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
          <Text style={{ color: color.palette.lightGrey, fontSize: 13, lineHeight: 18 }}>
            Giá từ 5.000đ
          </Text>
        </View>
        {/* Counter Indicator */}
        <ItemCounter />
      </View>
    </View>
  )
}
const ListFood = ({ title, renderItem, marginHorizontal }) => {
  return (
    <View
      style={{
        marginTop: 24,
      }}
    >
      {/* List Header */}
      <View
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
          <Text style={{ fontSize: 12 }}>Tất cả</Text>
          <Icon name="navigate-next" type="material" size={20} />
        </View>
      </View>
      {/* List Item */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ paddingLeft: marginHorizontal === null ? 0 : marginHorizontal }}
      >
        {renderItem()}
        {renderItem()}
        {renderItem()}
        {renderItem()}
      </ScrollView>
    </View>
  )
}

const SearchControlPanel = () => {
  return (
    <View style={styles.searchControlPanelContainer}>
      {/* Selected Search */}
      <View style={styles.searchCP_SelectedContainer}>
        <View style={styles.searchCP_SelectedItemContainerDisplay}>
          <CustomPicker />
        </View>
      </View>
      {/* Sort Button */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          borderColor: "rgb(230,230,230)",
          borderRightWidth: 1,
          flex: 3,
          paddingVertical: 12,
        }}
      >
        <Icon name="sort" type="font-awesome" size={20} color={color.palette.lightGrey} />
        <Text
          style={{
            color: color.palette.lightGrey,
            fontSize: 15,
            lineHeight: 20,
            marginLeft: 5,
          }}
        >
          Sắp xếp
        </Text>
      </View>
      {/* Filter Button */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          flex: 3,
          paddingVertical: 12,
        }}
      >
        <Icon name="filter" type="font-awesome-5" size={14} color={color.palette.lightGrey} />
        <Text
          style={{
            color: color.palette.lightGrey,
            fontSize: 15,
            lineHeight: 20,
            marginLeft: 5,
          }}
        >
          Lọc
        </Text>
      </View>
    </View>
  )
}

const CustomPicker = () => {
  const data = ["Bán chạy", "Giá Cả", "Mới về"]
  const [openList, setOpenList] = React.useState(false)
  const [valueSelect, SetValueSelect] = React.useState(data[0])

  return (
    <View style={{ width: 150, height: 20 }}>
      {openList ? (
        <View
          style={{
            backgroundColor: color.palette.gray240,
            width: 100,
            borderRadius: spacing[2],
            top: -spacing[2],
            borderWidth: 0.7,
            borderColor: color.palette.gray200,
          }}
        >
          <TouchableOpacity
            style={{
              paddingLeft: spacing[4],
              paddingVertical: spacing[2],
              borderBottomWidth: 0.7,
              borderColor: color.palette.gray200,
            }}
            onPress={() => {
              SetValueSelect(valueSelect), setOpenList(false)
            }}
          >
            <Text style={{ color: color.palette.black }}>{valueSelect}</Text>
          </TouchableOpacity>
          {data.map((title) => {
            if (title !== valueSelect) {
              return (
                <TouchableOpacity
                  key={title}
                  style={{
                    paddingLeft: spacing[4],
                    paddingVertical: spacing[2],
                    borderBottomWidth: 0.7,
                    borderColor: color.palette.gray200,
                  }}
                  onPress={() => {
                    SetValueSelect(title), setOpenList(false)
                  }}
                >
                  <Text style={{ color: color.palette.black }}>{title}</Text>
                </TouchableOpacity>
              )
            } else return null
          })}
        </View>
      ) : (
        <Text style={{ color: color.palette.black, paddingLeft: spacing[4] }}>{valueSelect}</Text>
      )}
      <View style={{ position: "absolute", right: spacing[4] }}>
        <Icon
          name="angle-down"
          type="font-awesome-5"
          size={20}
          color={color.palette.lightGrey}
          onPress={() => (openList ? setOpenList(false) : setOpenList(true))}
        />
      </View>
    </View>
  )
}

export const Browse02Screen = observer(function Browse02Screen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()
  // OR
  // const rootStore = useStores()

  // Pull in navigation via hook
  const navigation = useNavigation()
  return (
    <ScrollView style={ROOT}>
      {/* Section Header */}
      <LinearGradient colors={GRADIENT_VALUE} style={{ width: "100%" }}>
        {/* Header */}
        <View style={styles.headerContainer}>
          {/* Logo */}
          <Logo width={130} height={60} />
          {/* Group Icon */}
          <View style={styles.groupIconContainer}>
            <Icon name="search" type="feather" style={{ marginRight: 16 }} color="white" />
            <View>
              <TouchableOpacity onPress={() => navigation.navigate(screens.ShoppingCartScreen)}>
                <Icon name="shopping-cart" type="feather" size={22} color="white" />
              </TouchableOpacity>
              {/* Badge shopping cart */}
              <View style={styles.badgetCartContainer}>
                <Text style={styles.badgetCartText}>2</Text>
              </View>
            </View>
          </View>
        </View>
        {/* Header Image */}
        <View style={{ width: 375, height: 448 }}>
          <SimpleImage width={375} height={448} />
          <View style={{ top: 260, left: 16 }}>
            <View style={styles.carouselBadgeContainer}>
              <Text style={styles.carouselBadgeContent}>1/5</Text>
            </View>
            <Text style={styles.carouselContentTypeOfFood}>Trái cây & Rau</Text>
            <Text style={styles.carouselContentTitle}>
              Được sản xuất từ các trang trại theo quy trình an toàn
            </Text>
            <Text style={styles.carouselContentBuyNow}>Mua ngay</Text>
          </View>
        </View>
      </LinearGradient>
      {/* Section List */}
      <ListFood
        title="Danh Mục"
        renderItem={() => <CategoriesRenderItem />}
        marginHorizontal={16}
      />
      {/* Section Special */}
      <ListFood title="Đặc Biệt" renderItem={() => <RenderItem2 />} marginHorizontal={16} />
      {/* Section Search */}
      <View style={{ marginHorizontal: spacing[4] }}>
        <SearchControlPanel />
        {/* Search Item */}
        <View>
          <RenderItem3 />
          <RenderItem3 />
          <RenderItem3 />
        </View>
      </View>
    </ScrollView>
  )
})
