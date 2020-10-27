import React from "react"
import { Text } from "../../components"
// import { useStores } from "../../models"
import { color, spacing } from "../../theme"
import { View } from "react-native"
import { Icon } from "react-native-elements"

import styles from "./styles"
import CustomPicker from "../../components/CustomPicker/CustomPicker"
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
