import React from "react"
import { View, Text } from "react-native"
import styles from "./styles"
import {Icon} from 'react-native-elements'
const address = (props) => {
  return (
    <View style={[styles.flexRow,styles.addressContainer,styles.justifySpaceBetween]}>
      <View style={styles.flexColumn}>

      <Text style={styles.place}>{props.place}</Text>
      <Text style={styles.address}>{props.address}</Text>
      </View>
      
      <Icon name='arrow-forward-ios' type='material' iconStyle={styles.arrowIcon}/>
    </View>
  )
}

export default address
