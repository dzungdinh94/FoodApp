import React from "react"
// import { observer } from "mobx-react-lite"
// import { ViewStyle } from "react-native"
import { Text } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color, spacing } from "../../theme"
import { View } from "react-native"
import { Icon } from "react-native-elements"
// import LinearGradient from "react-native-linear-gradient"
// import SimpleImage from "../../components/simpleImage"
// import Logo from "../../components/logo"
// import { ScrollView } from "react-native"

import styles from "./styles"
import { TouchableOpacity } from "react-native-gesture-handler"
// import screens from "../../navigation/screens"
// import ItemCounter from "../../components/ItemCounter/ItemCounter"
// import SpecialRenderItem from "../../components/SpecialRenderItem/SpecialRenderItem"

const CustomPicker = () => {
  const data = ["Bán chạy", "Giá Cả", "Mới về"]
  const [openList, setOpenList] = React.useState(false)
  const [valueSelect, SetValueSelect] = React.useState(data[0])

  return (
    <View style={{ width: 150, height: 20 }}>
      {openList ? (
        <View style={styles.componentContainerOpen}>
          <TouchableOpacity
            style={styles.chooseItemContainer}
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
        <Text style={styles.selectedValueText}>{valueSelect}</Text>
      )}
      {/* Expand Button Icon */}
      <View style={styles.expandButton}>
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

export default CustomPicker
