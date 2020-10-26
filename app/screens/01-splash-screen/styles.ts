import { StyleSheet } from "react-native"
import { color, distance } from "../../theme"

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  logo: {
    marginTop: 187,
    height: 200,
    width: 375,
  },
  background: {
    position: "absolute",
    width: distance.windowWidth,
    height: distance.windowHeight,
  },
  darkBackground: {
    position: "absolute",
    width: distance.windowWidth,
    height: distance.windowHeight,
    backgroundColor: color.palette.black,
    opacity: 0.2,
    zIndex: 1,
  },
})

export default styles
