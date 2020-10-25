import React from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { Screen, Text } from "../../components"
import {View} from 'react-native'

import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import Address from './address'
import Name from './name'
import Payment from './payment'
import { color } from "../../theme"
import {Icon} from 'react-native-elements'
import styles from './styles'
import { TouchableOpacity } from "react-native-gesture-handler"
const ROOT: ViewStyle = {
  backgroundColor: color.palette.white,
  flex: 1,
}

export const AccountScreen = observer(function AccountScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()
  // OR
  // const rootStore = useStores()

  // Pull in navigation via hook
  const navigation = useNavigation()
  return (
    <Screen style={ROOT} preset="scroll"  style={styles.screen} >
      <View style={styles.nameBg}>
      <Name name='Mai Phương Thúy' email='thuy6888@gmail.com' point='53' reppoint='37' creditpoint='500K' />
      </View>

<View style={styles.magLeft}>
  <Text style={styles.title}>Địa chỉ</Text>
  <Address place='Nhà riêng' address='35 ngõ Quỳnh, phố Bạch Mai, Hai Bà Trưng, Hà Nội'/>
  <Address place='Cơ quan' address='35 ngõ Quỳnh, phố Bạch Mai, Hai Bà Trưng, Hà Nội'/>
   
   <View style={[styles.flexRow,styles.justifySpaceBetween,styles.padRight]}>
     <Text style={styles.add}>Thêm địa chỉ khác</Text>
     <Icon name='pluscircle' type='antdesign' color={color.palette.textGreen}/>
     </View> 
</View>
<View style={styles.magLeft}>
  <Text style={styles.title}>Phương thức thanh toán</Text>
  <TouchableOpacity onPress={()=>{navigation.navigate('PaymentScreen')}}>
    <Payment cardtype='Main card' cardnumber="9432 **** **** ****"/>
  </TouchableOpacity>  
    <Payment cardtype='Oscar' cardnumber="**** 6857"/>    


    <View style={[{marginTop: 8},styles.flexRow,styles.justifySpaceBetween,styles.padRight]}>

    <Text style={styles.add}>Thêm phương thức</Text>
    <Icon name='pluscircle' type='antdesign' color={color.palette.textGreen}/>
    </View>

</View>
    </Screen>
  )
})
//done