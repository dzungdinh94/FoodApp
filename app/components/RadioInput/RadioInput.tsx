import React from "react"
import { View, Text, TouchableOpacity } from "react-native"
import { Icon } from "react-native-elements"
//Style
import { color } from "../../theme"
import styles from "./styles"

const RadioInput = ({ title, selected, onClick }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.circle,
          {
            borderColor: selected ? color.palette.main : color.palette.black,
            backgroundColor: selected ? color.palette.main : color.palette.white,
          },
        ]}
        onPress={() => {
          onClick(title)
        }}
      >
        {selected ? (
          <Icon name="check" type="font-awesome" color={color.palette.white} size={12} />
        ) : null}
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 17,
          color: selected ? "black" : "rgb(100,100,100)",
          fontWeight: selected ? "bold" : "normal",
        }}
      >
        {title}
      </Text>
    </View>
  )
}

export default RadioInput
