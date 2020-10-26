import React from "react"
import { View, Text } from "react-native"
import SimpleImage from "../simpleImage"

import styles from "./styles"

const AvatarInput = ({ width, height, type }) => {
  return (
    <View>
      <SimpleImage width={width} height={height} />
      {type === "none" ? null : (
        <View style={styles.avatarContainer}>
          <Text style={{ fontSize: 24, color: "white" }}>+</Text>
        </View>
      )}
    </View>
  )
}

export default AvatarInput
