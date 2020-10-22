import { StyleSheet } from "react-native"
import { color, spacing } from "../../theme"

const styles = StyleSheet.create({
  //Navigation Bar
  navigationContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: spacing[4],
    paddingTop: spacing[2],
  },
  contentContainer: {},
  headerText: {
    alignSelf: "center",
    marginLeft: spacing[4],
    fontWeight: "bold",
    lineHeight: 41,
    fontSize: 40,
    marginTop: 85,
    color: color.palette.black,
  },
  //Animation Image
  animationImageContainer: {
    marginTop: 56,
    width: 128,
    height: 128,
    borderRadius: 128,
    backgroundColor: color.palette.main,
  },
  //Button
  GroupButtonContainer: {
    alignSelf: "stretch",
  },
  button: {
    alignSelf: "stretch",
    height: 50,
    backgroundColor: color.palette.main,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: spacing[2],
    marginTop: 56,
    marginHorizontal: spacing[4],
  },
  buttonContent: { fontSize: 17 },

  button2: {
    alignSelf: "stretch",
    height: 50,
    backgroundColor: color.palette.white,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: spacing[2],
    borderWidth: 1,
    borderColor: color.palette.main,
    marginTop: spacing[4],
    marginHorizontal: spacing[4],
    marginBottom: 94,
  },
  button2Content: { fontSize: 17, color: color.palette.black },

  //SUCCESS
  thanksContentContainer: { marginTop: 56 },
  thanksTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: color.palette.black,
    paddingHorizontal: 67,
    textAlign: "center",
  },
  thanksContent: {
    fontSize: 17,
    color: color.palette.gray100,
    paddingHorizontal: 59,
    textAlign: "center",
    marginTop: spacing[2],
  },
})

export default styles
