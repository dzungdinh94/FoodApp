import React from "react"
import { View, Text } from "react-native"
import styles from "./styles"
const address = (props) => {
  return (
    <View style={styles.addressContainer}>
      <Text style={styles.place}>{props.place}</Text>
      <Text>{props.address}</Text>
    </View>
  )
}

export default address
