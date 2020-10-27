import { StyleSheet } from "react-native"
import { spacing } from "../../theme"
export default StyleSheet.create({
  flexRow: {
    display: "flex",
    flexDirection: "row",
  },
  flexColumn: {
    display: "flex",
    flexDirection: "column",
  },
  justifySpaceBetween: {
    justifyContent: "space-between",
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    marginTop: spacing[4],
    marginBottom: spacing[5],
    color: "black",
  },
  picWrap: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "gray",
  },
  notiPic: {
    width: 80,
    height: 80,
  },
  search: {
    display: "flex",
    flexDirection: "row-reverse",
  },
 
  notiText: {
    borderBottomColor: "rgb(239 ,239 ,244)",
    borderBottomWidth: 1,
  },
  text: {
    paddingTop: spacing[2],
    letterSpacing: .5,
    lineHeight: 20,
    fontSize: 15,
    fontWeight: 'normal',
    color: "black",
  },
  subtext: {
    fontSize: 13,
    color: "rgb(138,138,143)",
    marginBottom: spacing[4]
  },
  flexWrap: {
    flexWrap: 'wrap',
  },
  notiContainer: {
    marginBottom: spacing[4],
  
  },
  container:{
      marginHorizontal: spacing[4],
  },
  notiText: {
    marginHorizontal: spacing[4],
    marginTop: 10,
    borderBottomWidth: .6,
    width: '100%',
  } 
})
//done