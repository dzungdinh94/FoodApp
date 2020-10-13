import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    height: "100%",
    paddingHorizontal: 32,
    backgroundColor: "white",
  },
  header: {
    fontSize: 40,
    width: 250,
    paddingTop: 60,
    paddingBottom: 15,
    fontWeight: "bold",
  },
  forgotPassStyle: { fontSize: 17, color: "rgb(0,0,0)", paddingBottom: 16 },
  resendContainer: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingTop: 32,
  },
})

export default styles
