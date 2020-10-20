import React from 'react'
import {View,Text} from 'react-native'
import styles from './styles'

const othersetting2 = (props) => {
    return (
        <View>

        <View style={[styles.justifySpaceBetween,styles.flexRow,styles.center,styles.textContainer]}>
            <Text  style={styles.text}>{props.settingtext}</Text>
    <Text style={styles.arrow}>{props.settingattr}</Text>
        </View>
        
        </View>
    )
}
export default othersetting2