import { StyleSheet } from "react-native"
import { spacing } from "../../theme"

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    height: "100%",
    paddingHorizontal: spacing[7],
    backgroundColor: "white",
  },
  header: { fontSize: 40, width: 330, paddingVertical: spacing[9], color: "black" },
  forgotPassStyle: { fontSize: 17, color: "rgb(0,0,0)", paddingBottom: spacing[5] },
  registerLinkStyle: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    paddingBottom: spacing[7],
    marginTop: 162,
  },
  guideText: { fontSize: 17, color: "rgb(102,102,102)", paddingBottom: spacing[7] },
  button: {
    height: 50,
    backgroundColor: "rgb(147,194,47)",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  normal: { fontSize: 17, color: "rgb(102,102,102)", lineHeight: 20 },
  bold: { fontSize: 17, fontWeight: "bold", lineHeight: 20, color: "black" },
  buttonContent: { fontSize: 17 },
})

export default styles
