import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';

//Styles Import
import {color} from '../../theme'
//Main Function
const ItemCounter = () => {
  const [count, setCount] = useState(0);
  //MAIN RENDER
  return (
    <View style={{height: 40, alignItems: 'center', justifyContent: 'center'}}>
      {count === 0 ? (
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: color.palette.main,
            paddingHorizontal: 5,
            paddingVertical: 2,
            borderRadius: 20,
          }}
          onPress={() => setCount(1)}>
          <Text style={{color: color.palette.main, fontSize: 13}}>Thêm vào giỏ</Text>
        </TouchableOpacity>
      ) : (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity
            onPress={() => setCount(count - 1 < 0 ? 0 : count - 1)}>
            <Icon
              reverse={true}
              name="minus"
              type="font-awesome-5"
              color="white"
              reverseColor={color.palette.lighterGrey}
              size={11}
              containerStyle={{
                borderColor: color.palette.lighterGrey,
                borderWidth: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            />
          </TouchableOpacity>
          <Text>{count}</Text>
          <TouchableOpacity onPress={() => setCount(count + 1)}>
            <Icon
              reverse={true}
              name="plus"
              type="font-awesome-5"
              color={color.palette.main}
              reverseColor="white"
              size={11}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default ItemCounter;
