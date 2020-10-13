import { StyleSheet } from "react-native"
import { color } from "../../theme"

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    height: "100%",
    paddingHorizontal: 32,
    backgroundColor: "white",
  },
  header: {
    fontSize: 40,
    width: 330,
    paddingVertical: 40,
    paddingTop: 60,
    fontWeight: "bold",
    color: color.palette.black,
  },
  forgotPassStyle: { fontSize: 17, color: "rgb(0,0,0)", paddingBottom: 16 },
  registerLinkStyle: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    paddingBottom: 32,
  },
  avatarInputContainer: {
    width: 86,
    height: 86,
    borderRadius: 86,
    backgroundColor: "rgb(200,200,200)",
    position: "absolute",
    top: 64,
    right: 0,
  },
  guideText: { fontSize: 17, color: "rgb(102,102,102)", paddingBottom: 36 },
  button: {
    height: 50,
    backgroundColor: "rgb(147,194,47)",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginTop: 16,
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
