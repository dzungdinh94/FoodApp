import React from 'react'
import { View, TouchableOpacity} from 'react-native'
import styles from './styles'
import { Text } from "../../components"
import ImageList from "../image-list"

import Dot from "../dot"

// import { TouchableOpacity } from 'react-native-gesture-handler';

const orderItem = (props) => {

  return (
    <View style={styles.container2} >
      <View style={{ flexDirection: "row" }}>
        <Dot type={props.status} />
        <View style={styles.borderB}>
          <TouchableOpacity>
            <Text style={styles.orderNumber} text={"Đơn#: " + props.orderNumber} />
            <Text style={styles.createdAt} text={props.createdAt} />
            <Text style={styles.deliveryMethod} text={props.deliveryMethod} />
          </TouchableOpacity>
          <View style={{ flex: 1 }}></View>

          {/* IMAGE FLAT LIST */}

          <ImageList data={props.products}/>
        </View>
      </View>
    </View>
  )
}

export default orderItem;