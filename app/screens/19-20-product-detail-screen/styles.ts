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

  navigationHighLightText: {
    fontSize: 17,
    fontWeight: "bold",
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

  //CUSTOM
  productDetailMainContanier: { marginHorizontal: spacing[4] },
  tagContainer: { flexDirection: "row" },
  tag: {
    backgroundColor: color.palette.purple,
    color: color.palette.white,
    fontSize: 13,
    paddingHorizontal: spacing[2],
    paddingVertical: spacing[1],
    marginRight: spacing[2],
    borderRadius: spacing[3],
  },
  detailTypeText: { fontSize: 17, color: color.palette.gray100 },
  detailNameText: { fontSize: 34, fontWeight: "bold" },
  detailPriceContainer: { flexDirection: "row" },
  detailOldPriceText: {
    fontSize: 20,
    color: color.palette.gray140,
    textDecorationLine: "line-through",
    marginRight: spacing[6],
  },
  detailnowPriceText: { fontSize: 20 },
  DescriptionsConTainer: { paddingVertical: spacing[4] },
  title: { fontSize: 17, fontWeight: "bold", paddingHorizontal: spacing[4] },
  DescriptionsContext: {
    fontSize: 15,
    paddingHorizontal: spacing[4],
    lineHeight: 20,
    marginTop: spacing[2],
  },
  RelatedProductConTainer: {
    borderBottomColor: color.palette.gray230,
    borderBottomWidth: 1,
    paddingVertical: spacing[4],
  },
})

export default styles
