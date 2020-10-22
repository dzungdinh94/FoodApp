import React from 'react'
import {View,Text,Image} from 'react-native'
import styles from './styles'

const each = (props) => {
    return (
        <View style={[styles.notiContainer,styles.flexRow]}>
            <Image source={require('../../image/1920x1080-gray-solid-color-background.jpg')} style={[styles.picWrap,styles.notiPic]} />
            <View style={[styles.flexColumn,styles.notiText]}>
                <Text style={styles.text}>{props.notitext}</Text>
                <Text style={[styles.time,styles.subtext]}>{props.time}</Text>
            </View>
        </View>
    )
}

export default each