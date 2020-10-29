import { StyleSheet } from "react-native"
import { color, spacing } from "../../theme"

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing[6],
  },
  //Navigation Bar
  navigationContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  backIconContainer: { left: -spacing[2] },
  navigationText: {
    fontSize: 17,
  },
  inputContainer: {
    marginTop: spacing[4],
  },

  guideText: {
    fontSize: 17,
    color: color.palette.black,
    paddingTop: spacing[7],
    paddingHorizontal: spacing[4],
    textAlign: "center",
  },
  button: {
    paddingVertical: 14,
    backgroundColor: "rgb(147,194,47)",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginTop: spacing[2],
  },
  normal: { fontSize: 17, color: "rgb(102,102,102)", lineHeight: 20 },
  bold: { fontSize: 17, fontWeight: "bold", lineHeight: 20, color: color.palette.black },
  avatarAddContainer: {
    width: 32,
    height: 32,
    borderRadius: 32,
    backgroundColor: "rgb(147,194,47)",
    justifyContent: "center",
    alignItems: "center",
    top: 54,
    left: 54,
  },
  avatarAddContent: { fontSize: 24, color: "white" },
  buttonContent: { fontSize: 17 },
})

export default styles
