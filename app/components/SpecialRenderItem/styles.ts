import { StyleSheet } from "react-native"
import { color, spacing } from "../../theme"

const styles = StyleSheet.create({
  imageContainer: {
    width: 122,
    height: 122,
    borderRadius: 8,
    backgroundColor: color.palette.lighterGrey,
    marginRight: spacing[4],
    marginBottom: spacing[2],
  },
  favoriteToggleContainer: { left: 84, zIndex: 1 },
  text: { color: color.palette.lightGrey, fontSize: 13, lineHeight: 18, marginTop: spacing[1] },
  highlightText: { color: "black", fontSize: 15, fontWeight: "bold" },
})

export default styles
