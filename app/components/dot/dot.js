import React from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './styles';



const dot = (props) => {

  if (props.type === 1) {
    style = styles.dangxuly
  } else if (props.type === 2) {
    style = styles.huy
  } else {
    style = styles.hoanthanh
  }

  return (
    <View style={style}>
      
    </View>
  )
}

export default dot;