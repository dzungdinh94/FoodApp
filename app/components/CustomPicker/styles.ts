import { StyleSheet } from "react-native"
import { color, spacing } from "../../theme"

const styles = StyleSheet.create({
  componentContainerOpen: {
    backgroundColor: color.palette.gray240,
    width: 100,
    borderRadius: spacing[2],
    top: -spacing[2],
    borderWidth: 0.7,
    borderColor: color.palette.gray200,
  },
  chooseItemContainer: {
    paddingLeft: spacing[4],
    paddingVertical: spacing[2],
    borderBottomWidth: 0.7,
    borderColor: color.palette.gray200,
  },
  selectedValueText: { color: color.palette.black, paddingLeft: spacing[4] },
  expandButton: { position: "absolute", right: spacing[4] },
})

export default styles
