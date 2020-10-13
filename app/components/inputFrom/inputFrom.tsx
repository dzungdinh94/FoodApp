import React from 'react'
import {View, TextInput} from 'react-native'
import styles from './styles'
 const inputForm = (props)=>{
     return (
         <View style={styles.container}> 
            <TextInput style = {styles.inputContainer} onChangeText={props.onChange} 
            underlineColorAndroid = "transparent"
               placeholder = {props.title}
               placeholderTextColor = '#696969'
               autoCapitalize = "none"/>
         </View>
     )
 }

 export default inputForm