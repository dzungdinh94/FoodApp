import React from 'react'
import { observer } from "mobx-react-lite"
import { ViewStyle, View,Image} from "react-native"
import { Screen, Text } from ".."
import { color } from "../../theme"
import LinearGradient from 'react-native-linear-gradient'
import styles from './style'
const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
  flex: 1,
}

export const imageBullet = observer(function ImageBullet() {
  return (
    <Screen style={ROOT} preset="scroll">
     <View>
          <LinearGradient 
             start={{x: 0, y:1}} end={{x: 0, y: 0}} 
             colors={['#000000', '#595959', '#d9d9d9']} 
             style={styles.linearGradient}>
                <Image source={require('../../image/header.png')} style={styles.imageBullet}/>
            </LinearGradient>
        </View>
    </Screen>
  )
})
