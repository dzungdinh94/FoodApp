import { StyleSheet } from "react-native"
import { color, spacing } from "../../theme"

const styles = StyleSheet.create({
  //GLOBAL STYLES
  //Navigation Bar
  navigationContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
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
    fontSize: 34,
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

  //Notification List
  ImageContainer: {
    width: 80,
    height: 80,
    backgroundColor: color.palette.gray200,
    borderRadius: 8,
    marginRight: 10,
  },
  ListDetailsContainer: {
    backgroundColor: color.palette.white,
    marginHorizontal: spacing[4],
  },
  DetailContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: spacing[4],
  },
  DetailIcon: {
    backgroundColor: color.palette.gray250,
    padding: spacing[3],
    borderRadius: spacing[2],
  },
  NotificationContainer: {
    height: 90,
    flexGrow: 1,
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginLeft: spacing[3],
    paddingVertical: spacing[5],
    marginTop: spacing[2],
    borderBottomWidth: 1,
    borderBottomColor: color.palette.gray240,
  },
  NotificationHighlightDetails: { fontSize: 15, fontWeight: "bold" },
  NotificationDetails: { fontSize: 15, flexGrow: 1, marginRight: 120 },
  NotificationTimeLeft: { fontSize: 13, color: color.palette.gray140 },
})

export default styles
