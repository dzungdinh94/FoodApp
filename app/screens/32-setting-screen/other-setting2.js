import React from 'react'
import {View,Text} from 'react-native'
import styles from './styles'
import {Icon} from 'react-native-elements'
const othersetting2 = (props) => {
    return (
        <View>

        <View style={[styles.justifySpaceBetween,styles.flexRow,styles.center,styles.textContainer]}>
            <Text  style={styles.text}>{props.settingtext}</Text>
    <Text style={styles.arrow}>{props.settingattr}</Text>
    <Icon name='arrow-forward-ios' type='material' iconStyle={styles.arrowIcon} />
        </View>
        
        </View>
    )
}
export default othersetting2