import {StyleSheet} from 'react-native'
import {color, spacing} from '../../theme'
export default StyleSheet.create({
    flexRow: {
        display: 'flex',
        flexDirection: 'row'
    },
    flexColumn: {
        display: 'flex',
        flexDirection: 'column',
    },
    findText: {
fontSize: 22,
color: color.palette.greyText,
    },
    title: {
fontSize: 38,
fontWeight: 'bold'
    },
    headerContainer:{
        marginHorizontal: spacing[5],
        marginBottom: spacing[3],
        marginTop: spacing[5]
    },
    category: {
        paddingRight: spacing[8],
        paddingLeft: spacing[1],
        paddingVertical: spacing[3],
        color: color.palette.greyText,
        marginTop: spacing[3]
        
    },
    icon:{
        backgroundColor: 'red',
        width: 22,
        height: 22,
        left: 135,
        top:0,
        marginTop: 5, 
        borderRadius: 50,
        
    },
    leftCategory: {
        borderRightColor: color.palette.greyText,
        borderRightWidth: .5,
        
    },
    justifySpaceBetween: {
        justifyContent: 'space-between',
        
    },
    center:{
        alignItems:'center',
        
    },
    typeContainer: {
        flex: 1,
        justifyContent:'center',
    },
    iconTop:{
        color:"rgb(138,138,143)",
        fontSize: 15,
        height: 15,
        flex: 1,
        marginTop: 10,
        
    },
    iconTopLeft: {
        paddingLeft: 35
    },
    header: {
        borderBottomWidth: 1,
        borderBottomColor: color.palette.greyText,
    },
    flexItem:{
        flexWrap: 'wrap',
        marginHorizontal: spacing[3],
    },
    text:{
        color: 'black',

    },
    eachItem: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: color.palette.lighterGrey,
        marginHorizontal: spacing[3],
        marginBottom: spacing[3]
    },
   
    itemName: {
        paddingHorizontal: spacing[5],
        paddingTop: spacing[2],
        paddingBottom: spacing[1],
        fontSize: 16
    },
    itemPrice :{
        paddingHorizontal: spacing[5],
        paddingBottom: spacing[3],
        color: color.palette.greyText,
        fontSize: 16,
    },
})