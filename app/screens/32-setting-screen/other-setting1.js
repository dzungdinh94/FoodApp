import React, {useState} from 'react'
import {View,Text,Switch} from 'react-native'
import styles from './styles'
const othersetting1 = (props) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <View style={[styles.textContainer,styles.flexRow,styles.justifySpaceBetween]}>
            <Text style={styles.text} >{props.settingswitch}</Text>
            <Switch disabled='false'  thumbColor={isEnabled ? "white" : "white"} trackColor={{true: 'rgb(147,194,47)',false: 'rgb(229,229,229)'}} value={isEnabled} onValueChange={toggleSwitch}  />
        </View>
    )
}

export default othersetting1