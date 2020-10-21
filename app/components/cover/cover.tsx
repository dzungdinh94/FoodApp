import React from 'react'
import { View, TouchableOpacity,Image} from "react-native"
import { Icon } from 'react-native-elements'
import { Text } from ".."
import styles from './style'
import LinearGradient from 'react-native-linear-gradient'
import {useNavigation} from '@react-navigation/native'


const Cover = () => {
  const navigation = useNavigation()
  const searchPage = () =>{
       navigation.navigate('Browse03Screen')
  }
  return (
    
         <View> 
            <View style={styles.headerBackground}>
            <Image source={require('../../image/logo.png')}style={styles.image}/>
            <View style={styles.iconstyle}>
            <Icon onPress={searchPage} name='search' type='feather' color='white' />
            <Icon name='shopping-cart' type='feather' color='white' marginLeft={16}/>
            </View>
            </View>
            <LinearGradient 
             start={{x: 0, y:1}} end={{x: 0, y: 0}} 
             colors={['#000000', '#595959', '#d9d9d9']} 
             >  
                <View style={styles.container}>
                <Text style={styles.danhmuc} text="Trái cây & Rau"/>
                <Text style={styles.description} text="Được sản xuất từ các trang trại theo quy trình an toàn"/>
                <TouchableOpacity>
                   <Text style={styles.buynow} text="Mua ngay"/>
                </TouchableOpacity>                  
                </View>

                <Image source={require('../../image/header.png')} style={styles.header}/>
            </LinearGradient>
        </View>
   
  )
}
export default Cover