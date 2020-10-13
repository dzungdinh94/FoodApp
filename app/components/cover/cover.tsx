import React, { useState } from 'react'
import { observer } from "mobx-react-lite"
import { ViewStyle, View, TouchableOpacity,Image} from "react-native"
import { Icon } from 'react-native-elements'
import { Screen, Text } from ".."
import { color } from "../../theme"
import styles from './style'
import LinearGradient from 'react-native-linear-gradient'

const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
  flex: 1,
}

export const Cover = () => {

  return (
    <Screen style={ROOT} preset="scroll">
         <View>
            <View style={styles.container}>
            <View style={styles.headerBackground}>
            <Image source={require('../../image/header.png')}style={styles.image}/>
            <View style={styles.iconstyle}>
            <Icon name='search' type='feather'/>
            <Icon name='shopping-cart' type='feather'/>
            </View>
            </View>
            <LinearGradient 
             start={{x: 0, y:1}} end={{x: 0, y: 0}} 
             colors={['#000000', '#595959', '#d9d9d9']} 
             >
                <Image source={require('../../image/header.png')} style={styles.header}/>
            </LinearGradient>
            </View>
            <View style={styles.description}>
                 <BulletItem bullet='Trái cây & Rau'/>
                 <TextField  title='Được sản xuất từ các trang trại theo quy trình an toàn'/>
            <TouchableOpacity>
                 <Text style={styles.buynow}>Mua ngay</Text>  
            </TouchableOpacity> 
            </View>
        </View>
    </Screen>
  )
}
