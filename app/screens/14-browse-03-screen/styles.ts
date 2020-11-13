import { color, fontSize, spacing } from "../../theme"
import { StyleSheet, Dimensions } from "react-native"
export default StyleSheet.create({
  //HEADER
  headerContainer: {
    marginHorizontal: spacing[4],
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  leftSideHeaderContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  rightSideHeaderContainer: { flexDirection: "row", alignItems: "center" },
  //bagetCart
  badgetCartContainer: {
    position: "absolute",
    top: -8,
    right: -8,
    backgroundColor: color.palette.angry,
    width: 18,
    height: 18,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  badgetCartText: { color: color.palette.white, fontSize: 11 },
  //SEARCH BAR
  searchBarContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  searchBoxInputContainer: {
    fontSize: fontSize[3],
    color: color.palette.black,
    backgroundColor: color.palette.gray240,
    marginHorizontal: spacing[4],
    lineHeight: 17,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: spacing[2],
    paddingHorizontal: spacing[1],
  },
  searchBoxInput: {
    fontSize: fontSize[3],
    color: color.palette.black,
    backgroundColor: color.palette.gray240,
    marginHorizontal: spacing[1],
    lineHeight: 17,
    paddingBottom: spacing[1],
    paddingTop: spacing[2],
    flex: 1,
  },

  //CATAGORY
  catagoryTabContainer: {},
  catagoryTabItemTitle: { marginRight: spacing[4], paddingVertical: spacing[3] },
  titleSelected: { borderBottomColor: color.palette.main, borderBottomWidth: 2 },
  titleTextSelected: { fontWeight: "bold" },
  // PRODUCT
  productList: {},
})
