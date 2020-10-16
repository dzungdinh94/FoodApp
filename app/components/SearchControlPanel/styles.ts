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
    marginTop: spacing[4],
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
})

export default styles
