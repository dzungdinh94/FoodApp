import { StyleSheet } from "react-native"
import { color, spacing } from "../../theme"

const styles = StyleSheet.create({
  //Navigation Bar
  navigationContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  contentContainer: { paddingLeft: spacing[4], flex: 1 },
  headerText: {
    fontWeight: "bold",
    fontSize: 34,
    marginBottom: spacing[2],
    color: color.palette.black,
  },
})

export default styles
