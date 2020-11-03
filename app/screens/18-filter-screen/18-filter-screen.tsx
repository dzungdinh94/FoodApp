import React from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle } from "react-native"
import { Button, Screen, Text } from "../../components"
import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color, distance, spacing } from "../../theme"
import { Icon } from "react-native-elements"
import { TouchableOpacity } from "react-native-gesture-handler"
import styles from "./styles"
import MultiSlider from "@ptomasroos/react-native-multi-slider"
//import Data

const ROOT: ViewStyle = {
  backgroundColor: color.palette.white,
}

const FilterConditionsRenderItem = ({ value, active }) => {
  return (
    <View style={styles.choiceContainer1}>
      <Text style={styles.choiceValue1}>{value}</Text>
      {active ? (
        <TouchableOpacity style={styles.choiceCircleActive}>
          <Icon name="check" type="font-awesome" color={color.palette.white} size={12} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.choiceCircle}></TouchableOpacity>
      )}
    </View>
  )
}

const FilterCategoriesRenderItem = ({ value, active }) => {
  return (
    <TouchableOpacity style={active ? styles.choiceContainer2Active : styles.choiceContainer2}>
      <Text style={active ? styles.choiceValue2Active : styles.choiceValue2}>{value}</Text>
    </TouchableOpacity>
  )
}

const CustomSliderMarkerLeft = ({ currentValue }) => {
  return (
    <View style={styles.markerStyleLeft}>
      <Text style={styles.sliderLabelLeft}>{currentValue}K</Text>
    </View>
  )
}

const CustomSliderMarkerRight = ({ currentValue }) => {
  return (
    <View style={styles.markerStyleRight}>
      <Text style={styles.sliderLabelRight}>{currentValue}K</Text>
    </View>
  )
}

export const FilterScreen = observer(function FilterScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()
  // OR
  // const rootStore = useStores()

  // Pull in navigation via hook
  const navigation = useNavigation()
  return (
    <Screen style={ROOT} preset="scroll">
      {/* Navigation Bar */}
      <View style={styles.navigationContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="navigate-before" type="material" size={45} style={{ left: -spacing[2] }} />
        </TouchableOpacity>
        <Text style={{ color: color.palette.gray140, fontSize: 17 }}>Nhập lại</Text>
      </View>
      {/* Header Text */}
      <Text style={styles.headerText}>LỌC</Text>
      {/* Main container */}
      <View style={styles.mainContainer}>
        {/* Option 1: Filter Conditions */}
        <View style={styles.optionContainer}>
          <Text style={styles.optionTitle}>Điều kiện lọc</Text>
          <View style={styles.optionChoiceContainer}>
            <FilterConditionsRenderItem value="Phổ biến" active={true} />
            <FilterConditionsRenderItem value="Giá thấp nhất" active={false} />
            <FilterConditionsRenderItem value="Giá cao nhất" active={false} />
            <FilterConditionsRenderItem value="Mặt hàng mới" active={false} />
            <FilterConditionsRenderItem value="Giảm giá" active={false} />
          </View>
        </View>
        {/* Option 2: Categories? */}
        <View style={styles.optionContainer}>
          <Text style={styles.optionTitle}>Danh mục</Text>
          <View style={styles.optionChoiceContainer2}>
            <FilterCategoriesRenderItem value="Trái cây" active={true} />
            <FilterCategoriesRenderItem value="Rau" active={false} />
            <FilterCategoriesRenderItem value="Bánh kẹo" active={false} />
            <FilterCategoriesRenderItem value="Thịt" active={false} />
            <FilterCategoriesRenderItem value="Sữa" active={false} />
            <FilterCategoriesRenderItem value="Đồ uống" active={false} />
            <FilterCategoriesRenderItem value="Chăm sóc cá nhân" active={false} />
            <FilterCategoriesRenderItem value="Gia dụng" active={false} />
          </View>
        </View>
        {/* Option 3:Price Range */}
        <View style={styles.optionContainer}>
          <Text style={styles.optionTitle}>Khoảng giá</Text>
          <View style={styles.optionChoiceContainer}>
            {/* Slider */}
            <MultiSlider
              values={[10, 500]}
              isMarkersSeparated={true}
              sliderLength={distance.windowWidth - 32}
              customMarkerLeft={(e) => {
                return <CustomSliderMarkerLeft currentValue={e.currentValue} />
              }}
              customMarkerRight={(e) => {
                return <CustomSliderMarkerRight currentValue={e.currentValue} />
              }}
              selectedStyle={{ backgroundColor: color.palette.main }}
              unselectedStyle={{ backgroundColor: color.palette.gray200 }}
              min={10}
              max={1000}
              step={10}
            />
          </View>
        </View>
      </View>
      {/* Accecpt Button */}
      <Button
        text="Áp dụng lọc"
        onPress={() => navigation.goBack()}
        style={styles.button}
        textStyle={styles.buttonContent}
      />
    </Screen>
  )
})
