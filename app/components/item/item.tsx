import React from 'react'
import { observer } from "mobx-react-lite"
import { ViewStyle, View} from "react-native"

import { Screen, Text } from ".."
import { color } from "../../theme"
import styles from './style'

const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
  flex: 1,
}

export const Item = (props) => {

  return (
    <Screen style={ROOT} preset="scroll">
        <View>
            <Text style={styles.bullet}>{props.bullet}</Text>
            
        </View>
    </Screen>
  )
}