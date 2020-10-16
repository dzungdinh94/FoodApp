import { StyleSheet } from "react-native"
import { color } from "../../theme"

const styles = StyleSheet.create({
  imageContainer: {
    width: 122,
    height: 122,
    borderRadius: 8,
    backgroundColor: color.palette.lighterGrey,
    marginRight: 15,
    marginBottom: 10,
  },
  favoriteToggleContainer: { left: 84 },
  text: { color: color.palette.lightGrey, fontSize: 13, lineHeight: 18 },
  highlightText: { color: "black", fontSize: 15, fontWeight: "bold" },
})

export default styles
