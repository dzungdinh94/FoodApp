import { StyleSheet } from "react-native"
import { color, spacing } from "../../theme"

const styles = StyleSheet.create({
  //Search Control Panel
  searchControlPanelContainer: {
    flexDirection: "row",
    borderRadius: spacing[3],
    backgroundColor: color.palette.gray250,
    borderColor: color.palette.gray230,
    borderWidth: 1,
    zIndex: 10,
  },
  searchCP_SelectedContainer: {
    flex: 5,
    paddingVertical: spacing[3],
    borderColor: color.palette.gray230,
    borderRightWidth: 1,
  },
  searchCP_SelectedItemContainerDisplay: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  searchCP_SelectedItemContainer: {
    position: "absolute",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    backgroundColor: color.palette.gray250,
    borderColor: color.palette.gray230,
    top: 26,
    borderWidth: 1,
  },
  //Sort Button
  sortButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderColor: color.palette.gray230,
    borderRightWidth: 1,
    flex: 3,
    paddingVertical: spacing[3],
  },
  sortButtonText: {
    color: color.palette.lightGrey,
    fontSize: 15,
    lineHeight: 20,
    marginLeft: spacing[2],
  },
  //Filter Button
  filterButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flex: 3,
    paddingVertical: spacing[3],
  },
  filterButtonText: {
    color: color.palette.lightGrey,
    fontSize: 15,
    lineHeight: 20,
    marginLeft: spacing[2],
  },
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
