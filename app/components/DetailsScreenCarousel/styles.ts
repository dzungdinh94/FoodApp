import { StyleSheet } from "react-native"
import { color, spacing } from "../../theme"

const styles = StyleSheet.create({
  imageContainer: {
    borderRadius: spacing[2],
    backgroundColor: color.palette.lighterGrey,
    marginBottom: spacing[4],
  },
  favoriteToggleContainer: { left: 80 },
  DetailContainer: {
    borderRadius: spacing[2],
    paddingBottom: spacing[2],
    paddingLeft: spacing[4],
    backgroundColor: color.palette.white,
    borderWidth: 1,
    borderColor: color.palette.gray230,
  },
  nameText: { color: color.palette.black, fontSize: 15 },
  priceText: { color: color.palette.gray100, fontSize: 15 },
})

export default styles
