import React from "react"
import { View, Text, Image } from "react-native"
import styles from "./styles"
import { useNavigation } from '@react-navigation/native';

import {Icon} from 'react-native-elements'
const name = (props) => {
  const navigation = useNavigation()

  const toSetting = () => {
    navigation.navigate('SettingScreen')
  }
  return (
    <View style={[styles.nameContainer,styles.nameBg]}>
      <View style={[styles.flexRow,styles.justifySpaceBetween]}>
      <Icon name='gear' type="font-awesome" color="black" onPress={toSetting} />
    <Icon name='dots-three-horizontal' type='entypo' color='black'/>
      </View>
      
      <View style={styles.flexRow}>
       <Image source={require('../../image/1920x1080-gray-solid-color-background.jpg')} style={styles.namePic} />
      <View>
        <Text style={styles.name}>{props.name}</Text>
        <Text>{props.email}</Text>
      </View>
      </View>
      <View style={[styles.flexRow, styles.pointContainer]}>
        <View style={styles.borderRight}>
          <Text style={styles.point}>{props.point}</Text>
          <Text style={styles.subtext}>điểm</Text>
        </View>
        <View style={styles.borderRight}>
          <Text style={styles.point}>{props.reppoint}</Text>
          <Text style={styles.subtext}>Receipts</Text>
        </View>
        <View style={styles.borderRight}>
          <Text style={styles.point}>{props.creditpoint}</Text>
          <Text style={styles.subtext}>Tín dụng</Text>
        </View>
      </View>
    </View>
  )
}

export default name
