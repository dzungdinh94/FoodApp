import { StyleSheet, Dimensions } from "react-native"
import { color, distance, paddingValue, spacing } from "../../theme"
const { width: windowWidth, height: windowHeight } = Dimensions.get("window")
const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "white",
  },
  background: {
    height: "100%",
    width: windowWidth,
    position: "absolute",
    zIndex: 0,
  },
  logoContainer: { height: 128, marginTop: 60, zIndex: -2 },
  imageBackground: {
    position: "absolute",
    width: distance.windowWidth,
    height: "100%",
    opacity: 0.3,
    zIndex: -1,
  },
  navigationBar: {
    alignSelf: "stretch",
    marginTop: spacing[3],
    marginRight: spacing[4],
    zIndex: 1,
  },
  cancelButton: {
    alignItems: "flex-end",
  },
  cancelText: { color: color.palette.white, fontSize: 17 },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 35,
    marginTop: 102,
  },
  buttonSignIn: {
    paddingVertical: paddingValue.button,
    backgroundColor: color.palette.main,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: spacing[2],
    flex: 1,
    marginRight: spacing[4],
  },
  buttonSignInContent: { fontSize: 17 },
  buttonSignUp: {
    paddingVertical: paddingValue.button,
    borderColor: color.palette.white,
    backgroundColor: "transparent",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: spacing[2],
    flex: 1,
  },
  buttonSignUpContent: { fontSize: 17 },
  PolicyPrivacyContainer: { paddingHorizontal: spacing[6], marginVertical: spacing[7] },
  PolicyPrivacyText: {
    fontSize: 13,
    color: color.palette.white,
    textAlign: "center",
  },
  textLinkContainer: { top: 3 },
  textLink: {
    fontSize: 13,
    color: color.palette.white,
    fontWeight: "bold",
  },
})

export default styles
