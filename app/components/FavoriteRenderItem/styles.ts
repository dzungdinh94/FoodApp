import { StyleSheet } from "react-native"
import { color, spacing } from "../../theme"

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: spacing[4],
  },
  imageContainer: {
    borderTopRightRadius: spacing[2],
    borderTopLeftRadius: spacing[2],
    backgroundColor: color.palette.lighterGrey,
    overflow: "hidden",
  },
  favoriteToggleContainer: { left: 124 },
  DetailContainer: {
    borderBottomRightRadius: spacing[2],
    borderBottomLeftRadius: spacing[2],
    paddingVertical: spacing[2],
    paddingLeft: spacing[4],
    backgroundColor: color.palette.white,
    borderWidth: 1,
    borderColor: color.palette.gray230,
  },
  nameText: { color: color.palette.black, fontSize: 15 },
  priceText: { color: color.palette.gray100, fontSize: 15, marginTop: spacing[1] },
})

export default styles
