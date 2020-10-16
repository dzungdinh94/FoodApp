import { StyleSheet } from "react-native"
import { color, spacing } from "../../theme"

const styles = StyleSheet.create({
  //GLOBAL STYLES
  //Navigation Bar
  navigationContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: spacing[4],
    paddingTop: spacing[2],
  },
  previousButton: { left: -spacing[3] },
  contentContainer: {},
  headerText: {
    alignSelf: "flex-start",
    marginLeft: spacing[4],
    fontWeight: "bold",
    fontSize: 28,
    marginVertical: spacing[3],
    color: color.palette.black,
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
  //END GLOBAL STYLES

  //OrderDelivery  Custom
  //Icon
  IconContainer: {
    marginBottom: spacing[4],
  },
  //Status
  StatusContainer: {
    marginVertical: spacing[4],
  },
  StatusTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: color.palette.black,
    paddingHorizontal: spacing[8],
    textAlign: "center",
  },
  StatusContent: {
    fontSize: 17,
    color: color.palette.gray100,
    paddingHorizontal: spacing[8],
    textAlign: "center",
    paddingVertical: spacing[1],
  },
  //Order
  OrderContainer: {
    marginVertical: spacing[4],
  },
  OrderTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: color.palette.black,
    paddingHorizontal: spacing[8],
    textAlign: "center",
  },
  OrderContent: {
    fontSize: 15,
    color: color.palette.gray100,
    paddingHorizontal: spacing[8],
    textAlign: "center",
    paddingVertical: spacing[1],
  },

  //Info
  ListDetailsContainer: {
    backgroundColor: color.palette.white,
    marginHorizontal: spacing[4],
  },
  DetailContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: spacing[3],
  },
  DetailIcon: {
    backgroundColor: color.palette.gray250,
    padding: spacing[3],
    borderRadius: spacing[2],
  },
  infoContainer: {
    flexDirection: "row",
    flexGrow: 1,
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: spacing[3],
    paddingVertical: spacing[4],
    borderBottomWidth: 1,
    borderBottomColor: color.palette.gray240,
  },
  infoTitle: { fontSize: 13, marginBottom: spacing[1], color: color.palette.gray100 },
  infoHighlightDetails: { fontSize: 17, fontWeight: "bold" },
  infoMoreDetails: { fontSize: 13, color: color.palette.gray140 },
  infoHighLightMoreDetails: { fontSize: 13, fontWeight: "bold" },
})

export default styles
