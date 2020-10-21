import React from 'react';
import { View, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import { Text } from ".."
import ImageList from "../image-list"

import Dot from "../dot"

// import { TouchableOpacity } from 'react-native-gesture-handler';




const favoriteItem = (props) => {


  return (
    <View style={styles.container2} >
      <Image style={{ marginTop: 8, height: 64, tintColor: 'rgb(147,194,47)', resizeMode: 'contain' }} source={images.shoppingBagIcon} />
    </View>
  )
}

export default favoriteItem;