import React from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './styles';



const dot = (props) => {

  if (props.type === 'dangxuly') {
    style = styles.dangxuly
  } else if (props.type === 'huy') {
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