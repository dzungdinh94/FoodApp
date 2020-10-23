import React from "react"
import { observer } from "mobx-react-lite"
import { View,ViewStyle,BackHandler } from "react-native"
import { Screen, Text } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"
import styles from './styles'
import { useNavigation } from '@react-navigation/native';
import {Icon} from 'react-native-elements'
import Account from './account'
import OtherSetting1 from './other-setting1'
import OtherSetting2 from './other-setting2'
const ROOT: ViewStyle = {
  backgroundColor: color.palette.white,
  flex: 1,
}

export const SettingScreen = observer(function SettingScreen() {
  const navigation = useNavigation()
  const goBack =()=>{
    navigation.navigate('AccountScreen')
    
  }
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()
  // OR
  // const rootStore = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <Screen style={ROOT} preset="scroll" style={styles.container}>
      <View style={[styles.back,styles.justifySpaceBetween,styles.flexRow]}>

      <Icon name='chevron-back-outline' type='ionicon' iconStyle={{fontSize: 30 ,marginLeft:-10, fontWeight: 'bold'}} color='black' onPress={goBack}/>
      </View>
      <Text style={styles.title}>Thiết lập</Text>
      <View>
        <Text style={styles.subtitle}>Tài khoản</Text>
        <Account accattr="Đổi mật khẩu" name='lock' type=''/>
        <Account accattr="Thông báo" name='bell' type='font-awesome' />
        <Account accattr="Điều khoản" name='hand-right' type='ionicon'/>
        <Account accattr="Đăng xuất" name='log-out' type='entypo' />
      </View>

      <View>
        <Text style={styles.subtitle}>Thiết lập khác</Text> 
        <OtherSetting1 settingswitch='Nhận thư thông báo'/>
        <OtherSetting1 settingswitch='Nhận cuộc gọi'/>
        <OtherSetting1 settingswitch='Nhận tin nhắn'/>
          
        <OtherSetting2 settingtext="Tiền tệ" settingattr='đ-VND' />
        <OtherSetting2 settingtext="Ngôn ngữ" settingattr='Tiếng Việt' />
        <OtherSetting2 settingtext="Liên kết" settingattr='Facebook-Google' />
      </View>
    </Screen>
  )
})
