import { StyleSheet } from "react-native"
import { color, spacing } from "../../theme"

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    height: "100%",
    paddingHorizontal: 32,
    backgroundColor: "white",
  },
  header: {
    fontSize: 28,
    lineHeight: 28,
    width: 330,
    marginTop: spacing[5],
    fontWeight: "bold",
    color: color.palette.black,
  },
  forgotPassStyle: { fontSize: 17, color: "rgb(0,0,0)", marginTop: spacing[6] },
  registerLinkStyle: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    paddingBottom: 32,
  },
  avatarInputContainer: {
    width: 60,
    height: 60,
    borderRadius: 60,
    marginTop: spacing[9],
    backgroundColor: "rgb(200,200,200)",
  },
  guideText: { fontSize: 17, color: "rgb(102,102,102)", marginTop: spacing[6] },
  button: {
    height: 50,
    backgroundColor: "rgb(147,194,47)",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginTop: spacing[5],
  },
  normalText: { fontSize: 17, color: "rgb(102,102,102)", lineHeight: 20 },
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
  resendContainer: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingTop: 32,
  },
})

export default styles
