import React from 'react'
import {Text,Image,View, ImageBackground} from 'react-native'
import styles from './styles'
import {Icon} from 'react-native-elements'
const item = (props) => {
    return (<View>

        <View style={styles.eachItem} >

            <ImageBackground source={require('../../image/1920x1080-gray-solid-color-background.jpg')} style={{width: 163, height: 163}} imageStyle={{borderRadius: 5}}  >
            <Icon name='heart' type='entypo' color='white' style={styles.icon} size={15} iconStyle={{alignSelf:'center', top:3}} />

            </ImageBackground>
            <Text style={styles.itemName}>{props.itemname}</Text>
    <Text style={styles.itemPrice}>{props.itemprice}</Text>
    </View>
        </View>
    )
}

export default item 