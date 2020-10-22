import React from 'react'
import { View, Image } from 'react-native'
import styles from './styles'

const imageList = (props) => {

  return (

    <View>

      <View style={styles.image}>
        {
          props.data.map((value, index) => {
            return <Image style={styles.btnImage} source={value.uri} />
          })
        }
      </View>
    </View>
  )
}

export default imageList
