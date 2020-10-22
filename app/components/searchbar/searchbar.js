import React, { useEffect, useState } from 'react'
import { View, Image, TouchableOpacity, } from 'react-native'
import styles from './styles'
import { Icon, SearchBar } from 'react-native-elements'
import { Text } from "../../components"

const searchbar = (props) => {
  const [searchStatus, setSearchStatus] = useState(0)
  const [searchText, setSearchText] = useState('')
  const dismiss = () => {
    setSearchStatus(0)
    setArrayHolder(myData)
    setFilterStatus(4)
  }

  if (searchStatus === 0) {
    return (
      <TouchableOpacity style={{ flexDirection: "row-reverse" }} onPress={() => setSearchStatus(1)}>
        <Icon name="search" type="AntDesign" style={styles.icon} />
      </TouchableOpacity>
    )
  } else {
    return (
      <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
        <SearchBar
          placeholder="Tìm kiếm"
          // lightTheme
          round
          showCancel={true}
          onChangeText={text => setSearchText(text)}
          value={searchText}
          onClear={dismiss}
          autoCorrect={false}
          containerStyle={{ backgroundColor: "white", borderTopColor: "white", borderBottomColor: "white", flex: 1, paddingLeft: 0, paddingTop: 0 }}
          inputContainerStyle={{ backgroundColor: "rgb(239,239,244)" }}

        />
        <TouchableOpacity onPress={dismiss}><Text text="Hủy" style={{ color: "rgb(102,102,102)", paddingLeft: 33, paddingRight: 16, fontFamily: "SegoeUI", fontSize: 17, fontWeight: "normal" }} /></TouchableOpacity>
      </View>
    )
  }
}

export default searchbar
