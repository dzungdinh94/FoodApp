import React from 'react'
import {Text,Image,View, ImageBackground} from 'react-native'
import styles from './styles'
import {Icon} from 'react-native-elements'
import LikeHeart from '../../components/likeheart'
import FavoriteToogle from "../../components/FavoriteToogle/FavoriteToogle"
const item = (props) => {
    return (<View>

        <View style={styles.eachItem} >

            <ImageBackground source={require('../../image/header.png')} style={{width: 163, height: 163}} imageStyle={{borderRadius: 5}}  >
            <FavoriteToogle/>

            </ImageBackground>
            <Text style={styles.itemName}>{props.itemname}</Text>
    <Text style={styles.itemPrice}>{props.itemprice}</Text>
    </View>
        </View>
    )
}

export default item 
//done