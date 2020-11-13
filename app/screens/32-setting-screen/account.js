import React from 'react'
import {View,Text} from 'react-native'
import styles from './styles'
import {Icon} from 'react-native-elements'
const account = (props) => {
    return (
        <View style={[styles.flexRow,styles.justifySpaceBetween,styles.textContainer,{alignItems:'center'}]}>
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                
            <Icon name={props.name} type={props.type} containerStyle={styles.iconContainer} iconStyle={styles.icon}/>
            </View>
            <Text style={[styles.text,styles.borderBottom,{marginRight:'auto'}]}>{props.accattr}</Text>
            <Icon name='arrow-forward-ios' type='material' iconStyle={styles.arrowIcon} />
            
        </View>
    )
}

export default account