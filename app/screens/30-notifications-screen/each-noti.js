import React from 'react'
import {View,Text,Image} from 'react-native'
import styles from './styles'
const eachnoti = (props) => {
    return (
        <View style={[styles.notiContainer,styles.flexRow]}>
            <Image source={require('../../image/1920x1080-gray-solid-color-background.jpg')} style={[styles.picWrap,styles.notiPic]} />
            <View style={[styles.flexColumn,styles.notiText]}>
                <Text style={styles.text}>{props.notiText}</Text>
                <Text style={[styles.time,styles.subtext]}>{props.time}</Text>
            </View>
        </View>
    )
}
export default eachnoti