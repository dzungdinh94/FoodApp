import React from 'react'
import {View,Text,Switch} from 'react-native'
import styles from './styles'

const othersetting1 = (props) => {
    return (
        <View style={[styles.textContainer,styles.flexRow,styles.justifySpaceBetween]}>
            <Text style={styles.text} >{props.settingswitch}</Text>
            <Switch />
        </View>
    )
}

export default othersetting1