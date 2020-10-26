import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';

const SimpleImage = ({width, height}) => {
  return (
    <View
      style={{
        width: width,
        height: height,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        opacity: 0.3,
      }}>
      <Text
        style={{
          fontSize: height / 8 > 41 ? 40 : height / 8 < 15 ? 15 : height / 8,
          fontWeight: 'bold',
          fontFamily: 'SegoeUI',
        }}>{`${width} X ${height}`}</Text>
    </View>
  );
};

export default SimpleImage;
