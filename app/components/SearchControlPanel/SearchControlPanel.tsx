import React from "react"
import { Text } from "../../components"
// import { useStores } from "../../models"
import { color, spacing } from "../../theme"
import { View, TouchableOpacity } from "react-native"
import { Icon } from "react-native-elements"

import styles from "./styles"
import CustomPicker from "../../components/CustomPicker/CustomPicker"
const SearchControlPanel = () => {
  const data = ["Bán chạy", "Giá cả", "Mới về"]
  const [openList, setOpenList] = React.useState(false)
  const [valueSelect, SetValueSelect] = React.useState(data[0])
  return (
    <View style={styles.searchControlPanelContainer}>
      {/* Selected Search */}
      <View style={styles.searchCP_SelectedContainer}>
        <View style={styles.searchCP_SelectedItemContainerDisplay}>
          {/* formsort */}
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
              switch (title) {
                case 'Bán chạy':
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
                case 'Giá cả':
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
                case 'Mới về':
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
                break;
                default:
                  console.log("end")
              }

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
          size={15}
          color={color.palette.lightGrey}
          onPress={() => (openList ? setOpenList(false) : setOpenList(true))}
        />
      </View>
    </View>
           {/* formsort */}
          {/* <CustomPicker /> */}
        </View>
      </View>
      {/* Sort Button */}
      <View style={styles.sortButtonContainer}>
        <Icon name="sort" type="font-awesome" size={20} color={color.palette.lightGrey} />
        <Text style={styles.sortButtonText}>Sắp xếp</Text>
      </View>
      {/* Filter Button */}
      <View style={styles.filterButtonContainer}>
        <Icon name="filter" type="font-awesome-5" size={14} color={color.palette.lightGrey} />
        <Text style={styles.filterButtonText}>Lọc</Text>
      </View>
    </View>
  )
}

export default SearchControlPanel
