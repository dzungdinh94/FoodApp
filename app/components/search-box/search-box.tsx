import React from 'react'
import { observer } from "mobx-react-lite"
import {View, TextInput} from "react-native"
import { Icon } from 'react-native-elements'
import style from './style'

const searchBox = () => {
    return(
        <View>
        <TextInput style={style.box} placeholder="Tìm kiếm"/>        
        </View>

    )
}
export default searchBox