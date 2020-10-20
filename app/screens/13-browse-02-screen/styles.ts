import { StyleSheet } from "react-native"
import { color, spacing } from "../../theme"

const styles = StyleSheet.create({
  //Header
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: spacing[4],
    paddingLeft: spacing[2],
  },
  groupIconContainer: { flexDirection: "row", alignItems: "center" },
  badgetCartContainer: {
    position: "absolute",
    top: -8,
    right: -8,
    backgroundColor: color.palette.angry,
    width: 18,
    height: 18,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  badgetCartText: { color: color.palette.white, fontSize: 11 },
  //Carousel
  carouselContentContainer: { top: 260, left: 16 },
  carouselBadgeContainer: {
    width: 35,
    height: 20,
    borderRadius: 10,
    backgroundColor: color.palette.black,
    justifyContent: "center",
    alignItems: "center",
  },
  carouselBadgeContent: { color: color.palette.white },
  carouselContentTypeOfFood: { color: color.palette.white, fontSize: 17, marginTop: 5 },
  carouselContentTitle: {
    color: color.palette.white,
    fontSize: 26,
    fontWeight: "bold",
    marginTop: 5,
  },
  carouselContentBuyNow: { color: color.palette.main, fontSize: 20, marginTop: 10 },
  //Search Control Panel
  searchControlPanelContainer: {
    flexDirection: "row",
    borderRadius: 10,
    backgroundColor: color.palette.gray250,
    borderColor: color.palette.gray230,
    borderWidth: 1,
    marginTop: spacing[4],
    zIndex: 10,
  },
  searchCP_SelectedContainer: {
    flex: 5,
    paddingVertical: 12,
    borderColor: color.palette.gray230,
    borderRightWidth: 1,
  },
  searchCP_SelectedItemContainerDisplay: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  searchCP_SelectedItemContainer: {
    position: "absolute",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    backgroundColor: color.palette.gray250,
    borderColor: color.palette.gray230,
    top: 26,
    borderWidth: 1,
  },
})

export default styles