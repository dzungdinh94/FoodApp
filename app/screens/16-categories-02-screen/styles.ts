import { StyleSheet } from "react-native"
import { color, fontSize, spacing, distance } from "../../theme"

const itemSize =
  distance.windowHeight < distance.windowWidth
    ? distance.windowWidth / 3 - 24
    : distance.windowWidth / 2 - 24

const styles = StyleSheet.create({
  //Navigation Bar
  navigationContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: spacing[4],
  },
  contentContainer: { flex: 1 },
  headerText: {
    fontWeight: "bold",
    fontSize: 34,

    color: color.palette.black,
    paddingLeft: spacing[4],
  },
  //list Item
  listItemContainer: {
    backgroundColor: color.palette.gray250,
    paddingLeft: spacing[4],
    marginTop: spacing[2],
    paddingBottom: spacing[4],
    flexDirection: "row",
    flexWrap: "wrap",
  },

  itemContainer: {
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: color.palette.white,
    borderColor: color.palette.gray240,
    borderWidth: 1,
    width: itemSize,
    height: itemSize,
    borderRadius: spacing[2],
    marginTop: spacing[4],
    marginRight: spacing[4],
  },
  itemName: {
    color: color.palette.black,
    fontSize: fontSize[3],
    fontWeight: "bold",
    marginTop: spacing[4],
  },
  itemAmount: { color: color.palette.gray140, fontSize: fontSize[2], marginTop: spacing[1] },
})

export default styles
