import { StyleSheet } from "react-native"
import { color, spacing } from "../../theme"

const styles = StyleSheet.create({
  //Navigation Bar
  navigationContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    marginVertical: spacing[4],
  },
  contentContainer: {},
  headerText: {
    fontWeight: "bold",
    fontSize: 34,
    marginBottom: spacing[1],
    color: color.palette.black,
  },
  // Coupon Input
  //
  //
  button: {
    height: 50,
    backgroundColor: "rgb(147,194,47)",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: spacing[2],
    marginVertical: spacing[4],
    marginRight: spacing[4],
    marginBottom: spacing[6],
  },
  buttonContent: { fontSize: 17 },
  //RadioInputCart
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: spacing[2],
    paddingVertical: spacing[4],
    paddingHorizontal: spacing[4],
    flex: 1,
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
    color: "rgb(100,100,100)",
    fontWeight: "normal",
  },
  radioValueTextUnSelected: {
    fontSize: 15,
    color: "rgb(100,100,100)",
    fontWeight: "normal",
  },
})

export default styles