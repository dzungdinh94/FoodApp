import { StyleSheet } from "react-native"
import { color, spacing, distance } from "../../theme"

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
    alignSelf: "flex-start",
    marginLeft: spacing[4],
    fontWeight: "bold",
    fontSize: 34,
    color: color.palette.black,
  },

  //List of Card
  listCardContainer: {
    alignSelf: "flex-start",
    paddingHorizontal: spacing[4],
    paddingRight: spacing[6],
    paddingVertical: spacing[3],
    marginTop: spacing[2],
  },

  hightlightCardTypeContainer: {
    paddingVertical: spacing[1],
    paddingHorizontal: spacing[2],
    backgroundColor: color.palette.main,
    borderRadius: spacing[3],
    marginRight: spacing[2],
  },
  hightlightCardTypeName: { fontWeight: "bold", fontSize: 13, color: color.palette.white },
  cardTypeContainer: {
    paddingVertical: spacing[1],
    paddingHorizontal: spacing[2],
    backgroundColor: color.palette.gray240,
    borderRadius: spacing[3],
    marginRight: spacing[2],
  },
  cardTypeName: { fontSize: 13 },
  //Card Image
  cardImageContainer: {
    width: "100%",
    paddingVertical: 16,
    alignItems: "center",
    backgroundColor: color.palette.gray240,
  },
  faceSideContainer: {
    backgroundColor: color.palette.black,
    height: (distance.windowWidth - 32) * 0.6,
    width: distance.windowWidth - 32,
    borderRadius: spacing[4],
    borderWidth: 1,
    overflow: "hidden",
  },
  faceSideBrandText: {
    color: color.palette.gray140,
    textTransform: "uppercase",
    fontSize: 32,
    fontWeight: "bold",
    fontStyle: "italic",
    position: "absolute",
    top: "12%",
    right: "8%",
  },
  faceSideRectangleShape: {
    width: 44,
    height: 36,
    position: "absolute",
    top: "12%",
    left: "8%",
    backgroundColor: color.palette.gray140,
    borderRadius: spacing[2],
  },
  faceSideBackgroundText: {
    color: color.palette.gray100,
    fontSize: 160,
    lineHeight: 160,
    letterSpacing: 5,
    fontWeight: "bold",
    fontStyle: "italic",
    position: "absolute",
    bottom: -40,
    left: 0,
    opacity: 0.2,
    width: 2000,
    textTransform: "uppercase",
  },
  faceSideDetailContainer: {
    marginHorizontal: "8%",
    top: "45%",
    height: "40%",
    justifyContent: "space-between",
  },
  faceSideDetailContentWrapper: { justifyContent: "space-between", flexDirection: "row" },
  faceSideCardNumberText: {
    fontSize: 20,
    color: color.palette.gray140,
    textTransform: "uppercase",
  },
  faceSideTitleText: {
    fontSize: 9,
    color: color.palette.gray140,
    textTransform: "uppercase",
  },
  faceSideContentText: {
    fontSize: 13,
    color: color.palette.white,
    textTransform: "capitalize",
  },

  backSideContainer: {
    backgroundColor: color.palette.black,
    height: (distance.windowWidth - 32) * 0.6,
    width: distance.windowWidth - 32,
    borderRadius: spacing[4],
    borderWidth: 1,
  },
  backSideWhiteSpace: {
    position: "absolute",
    backgroundColor: color.palette.white,
    borderWidth: 4,
    borderColor: color.palette.white,
    height: "20%",
    top: "20%",
    width: "100%",
  },
  backSideCVCText: {
    color: color.palette.black,
    top: "24%",
    left: "80%",
    fontSize: 18,
    fontStyle: "italic",
  },
  backSideTopContent: {
    color: color.palette.white,
    fontSize: 9,
    fontStyle: "italic",
    top: "-7%",
    left: "10%",
  },
  backSideBottomContent1: {
    color: color.palette.white,
    fontSize: 9,
    fontStyle: "italic",
    top: "26%",
    left: "10%",
    width: "80%",
  },
  backSideBottomContent2: {
    color: color.palette.white,
    fontSize: 9,
    fontStyle: "italic",
    top: "26%",
    left: "10%",
    width: "80%",
  },

  //Card Details
  cardDetailsMainContainer: { marginTop: spacing[3], alignSelf: "stretch" },
  cardDetailContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
    marginHorizontal: spacing[4],
    borderBottomWidth: 1,
    borderColor: color.palette.gray240,
  },
  cardDetailContainerNoBorder: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
    marginHorizontal: spacing[4],
  },

  cardDetailContainer2: {
    justifyContent: "space-between",
    flexDirection: "row",
    width: "44%",
    borderBottomWidth: 1,
    borderColor: color.palette.gray240,
  },
  cardDetailTitle: {
    fontSize: 17,
    color: color.palette.black,
    paddingVertical: spacing[3],
  },
  cardDetailContent: {
    fontSize: 17,
    color: color.palette.gray140,
    paddingVertical: spacing[3],
  },

  //Save info
  saveInfoContainer: {
    alignSelf: "flex-start",
    marginLeft: spacing[4],
    marginTop: spacing[3],
  },

  //Button
  button: {
    alignSelf: "stretch",
    height: 50,
    backgroundColor: "rgb(147,194,47)",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: spacing[2],
    marginTop: 78,
    marginBottom: spacing[4],
    marginHorizontal: spacing[4],
  },
  buttonContent: { fontSize: 17 },
  //COMPONENTS: RADIO BUTTON

  radioContainer: { flexDirection: "row", alignItems: "center" },
  radioCircle: {
    width: 19,
    height: 19,
    borderRadius: 19,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 5,
  },
})

export default styles
