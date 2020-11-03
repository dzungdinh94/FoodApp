import { StyleSheet } from "react-native"
import { color, spacing, fontSize } from "../../theme"

const styles = StyleSheet.create({
  searchBoxContainer: {
    paddingVertical: spacing[2],
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: spacing[4],
  },
  searchBoxInputContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginRight: spacing[6],
    paddingHorizontal: spacing[2],
    backgroundColor: color.palette.gray240,
    borderRadius: spacing[3],
  },
  searchBoxInput: {
    fontSize: fontSize[3],
    color: color.palette.black,
    backgroundColor: color.palette.gray240,
    marginHorizontal: spacing[2],
    lineHeight: 17,
    paddingBottom: spacing[1],
    paddingTop: spacing[2],
    flex: 1,
  },
  searchBoxCancelText: {
    fontSize: fontSize[3],
    color: color.palette.gray140,
  },
  menuTypeFood: { paddingVertical: spacing[3], paddingLeft: spacing[4] },
  catagoriesItemActive: {
    fontSize: fontSize[1],
    paddingVertical: spacing[1],
    paddingHorizontal: spacing[3],
    borderRadius: spacing[3],
    marginRight: spacing[2],
    color: color.palette.white,
    backgroundColor: color.palette.main,
  },
  catagoriesItem: {
    fontSize: fontSize[1],
    paddingVertical: spacing[1],
    paddingHorizontal: spacing[3],
    borderRadius: spacing[3],
    marginRight: spacing[2],
    color: color.palette.gray100,
    backgroundColor: color.palette.gray240,
  },
  listItem: { borderTopWidth: 1, borderTopColor: color.palette.gray240, paddingLeft: spacing[4] },
  //Search Item Style
  searchItemBontainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: spacing[4],
    borderBottomWidth: 1,
    borderColor: color.palette.gray240,
  },
  searchItemDetailsContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    flexGrow: 1,
    paddingRight: spacing[4],
    height: 64,
    alignItems: "center",
  },
  searchItemTypeText: {
    color: color.palette.main,
    fontSize: 13,
    lineHeight: 16,
    textAlignVertical: "top",
  },
  searchItemNameText: {
    color: "black",
    fontSize: 15,
    lineHeight: 16,
  },
  searchItemPriceText: { color: color.palette.lightGrey, fontSize: 13, lineHeight: 18 },
  searchItemImageContainer: {
    width: 64,
    height: 64,
    backgroundColor: color.palette.gray200,
    borderRadius: spacing[2],
    marginRight: spacing[4],
  },
})
export default styles
