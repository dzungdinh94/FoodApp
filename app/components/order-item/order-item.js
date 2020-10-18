import React from 'react';
import { View, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
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
            <Text style={{ color: "black" }} text={"Đơn#: " + props.orderNumber} />
            <Text style={{ color: "rgb(102,102,102)" }} text={props.createdAt} />
            <Text style={{ color: "rgb(102,102,102)" }} text={props.deliveryMethod} />
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