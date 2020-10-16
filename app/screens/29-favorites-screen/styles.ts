import { StyleSheet } from "react-native"
import { color, spacing } from "../../theme"

const styles = StyleSheet.create({
  //GLOBAL STYLES
  //Navigation Bar
  navigationContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: spacing[4],
    paddingTop: spacing[2],
  },
  previousButton: { left: -spacing[3] },
  contentContainer: {},
  navigationText: { fontSize: 17, color: color.palette.gray100 },
  //Header
  headerText: {
    alignSelf: "flex-start",
    marginLeft: spacing[4],
    fontWeight: "bold",
    fontSize: 28,
    marginVertical: spacing[3],
    color: color.palette.black,
  },

  //Button
  button: {
    alignSelf: "stretch",
    height: 50,
    backgroundColor: "rgb(147,194,47)",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: spacing[2],
    marginVertical: spacing[4],
    marginHorizontal: spacing[4],
  },
  buttonContent: { fontSize: 17 },
  //END GLOBAL STYLES

  //CUSTOM
  //Sort Control Panel
  SortControlPanelContainer: {
    flexDirection: "row",
    backgroundColor: color.palette.white,
    borderColor: color.palette.gray230,
    borderWidth: 1,
    borderTopWidth: 0,
    zIndex: 10,
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
  //Favorite List
  favoriteListContainer: {
    backgroundColor: color.palette.gray250,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: spacing[4],
    paddingVertical: spacing[2],
  },
})

export default styles
