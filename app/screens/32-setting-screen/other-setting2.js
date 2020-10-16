import React from 'react'
import {View,Text} from 'react-native'
import styles from './styles'

const othersetting2 = (props) => {
    return (
        <View style={[styles.flewRow,styles.justifySpaceBetween,styles.textContainer]}>
            <Text  style={styles.text}>{props.settingtext}</Text>
    <Text style={styles.arrow}>{props.settingattr}</Text>
        </View>
    )
}
export default othersetting2