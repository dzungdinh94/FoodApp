import React from "react"
import { View, Text, Image } from "react-native"

import styles from "./styles"

const Logo = ({ width, height }) => {
  return (
    <View style={{ zIndex: -1 }}>
      <Image
        style={{ width: width, height: height }}
        source={require("../../../assets/images/smart-life-logo-2.png")}
        resizeMode="stretch"
      />
    </View>
  )
}

export default Logo
