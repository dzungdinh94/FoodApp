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
    fontSize: 40,
    marginVertical: spacing[3],
    color: color.palette.black,
  },
  // Coupon Input
  //
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
    marginVertical: spacing[2],
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
    marginVertical: spacing[2],
    marginHorizontal: spacing[4],
  },
  button2Content: { fontSize: 17, color: color.palette.black },
  //RadioInputCart
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: spacing[2],
    paddingVertical: spacing[2],
    paddingHorizontal: spacing[3],
    width: "45%",
    borderColor: color.palette.gray200,
  },
  circle: {
    width: 19,
    height: 19,
    borderRadius: 19,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 5,
  },
  radioValueTextSelected: {
    fontSize: 15,
    color: "black",
    fontWeight: "bold",
  },
  radioValueTextUnSelected: {
    fontSize: 15,
    color: "rgb(100,100,100)",
    fontWeight: "normal",
  },

  //Card Details
  cardDetailContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
    marginHorizontal: spacing[4],
    borderBottomWidth: 1,
    borderColor: color.palette.gray200,
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
    borderColor: color.palette.gray200,
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

  //
  saveInfoContainer: {
    alignSelf: "flex-start",
    marginLeft: spacing[4],
    marginVertical: spacing[4],
  },

  //List of Card
  listCardContainer: {
    alignSelf: "flex-start",
    paddingHorizontal: spacing[4],
    paddingRight: spacing[6],
    marginBottom: spacing[3],
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

  //Checkout-Screen
  //Info
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: spacing[4],
    paddingVertical: spacing[3],
    borderBottomWidth: 1,
    borderBottomColor: color.palette.gray240,
  },
  infoTitle: { fontSize: 13, marginBottom: spacing[1], color: color.palette.gray100 },
  infoHighlightDetails: { fontSize: 17, fontWeight: "bold" },
  infoMoreDetails: { fontSize: 13 },

  cartListContainer: { paddingHorizontal: spacing[4] },
  infoRowDetailsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  infoTotalRowContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: spacing[2],
  },
  infoTotalMoney: { fontSize: 13, fontWeight: "bold" },
  //Coupon
  CouponContainer: {
    backgroundColor: color.palette.gray240,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: spacing[3],
    paddingHorizontal: spacing[4],
    borderRadius: spacing[4],
    marginHorizontal: spacing[4],
    marginVertical: spacing[3],
  },
  CouponTitle: { fontSize: 15 },
  CouponDetailsContainer: {
    backgroundColor: color.palette.purple,
    paddingHorizontal: spacing[2],
    borderRadius: spacing[4],
  },
  CounponDetails: { fontSize: 15, color: color.palette.white },

  //SUCCESS 
  thanksTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: color.palette.black,
    paddingHorizontal: spacing[8],
    textAlign: "center",
  },
  thanksContent: {
    fontSize: 17,
    color: color.palette.gray100,
    paddingHorizontal: spacing[8],
    textAlign: "center",
    paddingVertical: spacing[1],
  },
})

export default styles
