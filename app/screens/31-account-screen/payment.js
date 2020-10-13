import React from "react"
import { View, Text, Image } from "react-native"
import styles from "./styles"

const payment = (props) => {
  return (
    <View style={[styles.flexRow,styles.payment]}>
      <Image source={require('../../image/1920x1080-gray-solid-color-background.jpg')} style={styles.cardPic} />
      <View>
        <Text style={styles.cardName}>{props.cardtype}</Text>
        <Text style={styles.subtext}>{props.cardnumber}</Text>
      </View>
    </View>
  )
}
export default payment
