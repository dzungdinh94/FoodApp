import React from 'react'
import {View,Text} from 'react-native'
import styles from './styles'
const account = (props) => {
    return (
        <View style={[styles.flexRow,styles.justifySpaceBetween,styles.textContainer]}>
            <Text style={styles.text}>{props.accattr}</Text>
            <Text style={styles.arrow}>></Text>
        </View>
    )
}

export default account