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
    paddingLeft: spacing[2],
    paddingRight: spacing[4],
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
  productDetailMainContanier: { marginTop: spacing[2], marginHorizontal: spacing[4] },
  tagContainer: { flexDirection: "row" },
  tag: {
    backgroundColor: color.palette.purple,
    color: color.palette.white,
    fontSize: 13,
    paddingHorizontal: spacing[2],
    paddingVertical: 1,
    marginRight: spacing[2],
    borderRadius: spacing[3],
  },
  detailTypeText: { fontSize: 17, color: color.palette.gray100, marginTop: spacing[2] },
  detailNameText: { fontSize: 34, fontWeight: "bold", marginTop: spacing[1] },
  detailPriceContainer: { flexDirection: "row", marginTop: spacing[1] },
  detailOldPriceText: {
    fontSize: 20,
    color: color.palette.gray140,
    textDecorationLine: "line-through",
    marginRight: spacing[6],
  },
  detailnowPriceText: { fontSize: 20 },
  //Grop Options
  groupOptionsContainer: { flexDirection: "row", marginTop: spacing[4] },
  optionContainer: {
    flex: 1,
    marginRight: spacing[4],
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: spacing[4],
    borderRadius: spacing[2],
    borderWidth: 1,
    borderColor: color.palette.gray220,
  },
  optionValue: { fontSize: 15, color: color.palette.gray100 },
  //Descriptions
  DescriptionsConTainer: {},
  title: {
    fontSize: 17,
    fontWeight: "bold",
    paddingHorizontal: spacing[4],
    paddingVertical: 11,
    marginTop: spacing[4],
  },
  DescriptionsContext: {
    fontSize: 15,
    paddingHorizontal: spacing[4],
    lineHeight: 20,
    color: color.palette.gray100,
  },
  RelatedProductConTainer: {
    borderBottomColor: color.palette.gray230,
    borderBottomWidth: 1,
  },
})

export default styles
