import { StyleSheet } from "react-native"
import { color, distance, spacing } from "../../theme"

const itemSize =
  distance.windowHeight < distance.windowWidth
    ? (distance.windowWidth - 16 * 2 - 8 * 2) / 3
    : (distance.windowWidth - 16 * 2 - 8) / 2

const styles = StyleSheet.create({
  //Navigation Bar
  navigationContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: spacing[4],
  },

  //Header Text
  headerText: {
    fontWeight: "bold",
    fontSize: 34,
    color: color.palette.black,
    paddingLeft: spacing[4],
  },

  //Main Container
  mainContainer: {
    paddingLeft: spacing[4],
    borderBottomColor: color.palette.gray240,
    borderBottomWidth: 1,
    paddingBottom: spacing[3],
  },

  //CUSTOM STYLE

  //Options
  optionContainer: { paddingBottom: spacing[4] },

  optionTitle: {
    paddingVertical: spacing[3],
    fontSize: 17,
    alignItems: "center",
    fontWeight: "bold",
  },
  optionChoiceContainer: {},
  optionChoiceContainer2: { flexDirection: "row", flexWrap: "wrap" },
  //Choice Style 1
  choiceContainer1: {
    borderBottomWidth: 1,
    borderBottomColor: color.palette.gray240,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: spacing[3],
    paddingRight: spacing[4],
  },
  choiceValue1: { fontSize: 17 },
  choiceCircleActive: {
    width: 19,
    height: 19,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: color.palette.main,
    backgroundColor: color.palette.main,
    alignItems: "center",
    justifyContent: "center",
  },
  choiceCircle: {
    width: 19,
    height: 19,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: color.palette.gray200,
  },
  //Choice Style 2
  choiceContainer2: {
    width: itemSize,
    paddingVertical: spacing[4],
    borderRadius: spacing[2],
    borderWidth: 1,
    borderColor: color.palette.gray220,
    marginRight: spacing[2],
    marginTop: spacing[2],
    justifyContent: "center",
    alignItems: "center",
  },
  choiceContainer2Active: {
    width: itemSize,
    paddingVertical: spacing[4],
    borderRadius: spacing[2],
    borderWidth: 1,
    borderColor: color.palette.main,
    color: color.palette.main,
    marginRight: spacing[2],
    marginTop: spacing[2],
    justifyContent: "center",
    alignItems: "center",
  },
  choiceValue2Active: {
    fontSize: 15,
    color: color.palette.main,
    textAlign: "center",
    overflow: "hidden",
  },
  choiceValue2: { fontSize: 15, textAlign: "center", color: color.palette.gray100 },

  //Slider

  markerStyleLeft: {
    backgroundColor: color.palette.white,
    height: 28,
    width: 28,
    borderRadius: 28,
    borderWidth: 1,
    borderColor: color.palette.gray230,
    left: spacing[3],
  },

  markerStyleRight: {
    backgroundColor: color.palette.white,
    height: 28,
    width: 28,
    borderRadius: 28,
    borderWidth: 1,
    borderColor: color.palette.gray230,
    right: spacing[3],
  },

  sliderLabelLeft: {
    top: 32,
    fontSize: 15,
    width: 50,
  },
  sliderLabelRight: {
    textAlign: "right",
    top: 32,
    fontSize: 15,
    width: 50,
    right: 22,
  },

  //Button
  button: {
    alignSelf: "stretch",
    height: 50,
    backgroundColor: "rgb(147,194,47)",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: spacing[2],
    marginVertical: spacing[4],
    marginHorizontal: spacing[4],
  },
  buttonContent: { fontSize: 17 },
})

export default styles
