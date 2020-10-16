import React from 'react'
import {Text,Image,View} from 'react-native'
import styles from './styles'

const item = (props) => {
    return (
        <View style={styles.eachItem} >
            <Image source={require('../../image/1920x1080-gray-solid-color-background.jpg')} style={{width: 163, height: 163}}   />
            <Text style={styles.itemName}>{props.itemname}</Text>
    <Text style={styles.itemPrice}>{props.itemprice}</Text>
        </View>
    )
}

export default item 