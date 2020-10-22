import React from 'react'
import { Input, Icon } from 'react-native-elements'
import { color } from "../../theme"

const searchBox = () => {
    return (
     
            <Input 
                placeholder="Tìm kiếm"
                inputContainerStyle={{
                    height: 45,
                    borderBottomWidth:0,
                    backgroundColor:color.palette.search,
                    borderRadius:10,
                    paddingHorizontal:10,
                    marginHorizontal:6,
                    marginTop:16,
                }}
                containerStyle={{
                   height:64
                }}
                leftIcon={<Icon name='search' size={22} color={color.palette.icon} />} />
     

    )
}
export default searchBox