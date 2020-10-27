import React from "react"
import { View, Text, Image } from "react-native"
import styles from "./styles"

const each = (props) => {
  return (
    <View style={[styles.notiContainer, styles.flexRow]}>
      <Image
        source={require("../../image/1920x1080-gray-solid-color-background.jpg")}
        style={[styles.picWrap, styles.notiPic]}
      />
      <View style={[styles.flexColumn,styles.notiText,styles.justifySpaceBetween]}>
  <Text style={styles.text,{flex:1,flexWrap:'wrap'}}>{props.notitext}<Text style={{fontWeight:'bold'}}>{props.ordernum}</Text><Text>{props.where}</Text></Text>
        <Text style={[styles.time,styles.subtext]}>{props.time}</Text>
      </View>
    </View>
  ) 
}

export default each
//done