import React from "react"
import { View, Text, Image } from "react-native"
import styles from "./styles"
import {Icon} from 'react-native-elements'
const payment = (props) => {
  return (
    <View style={[styles.flexRow,styles.payment,styles.justifySpaceBetween]}>
      <View style={styles.flexRow}>
      <Image source={require('../../image/1920x1080-gray-solid-color-background.jpg')} style={styles.cardPic} />
      <View style={styles.flexColumn}>


        <Text style={styles.cardName}>{props.cardtype}</Text>
        <Text style={styles.subtext}>{props.cardnumber}</Text>
      </View>
      </View>
      <Icon name='arrow-forward-ios' type='material' iconStyle={styles.arrowIcon}/>

    </View>
  )
}
export default payment
