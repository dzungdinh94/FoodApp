import React from 'react'
import { observer } from "mobx-react-lite"
import { View, Dimensions } from "react-native"
import { Input, Icon} from 'react-native-elements'
import style from './style'
import { color } from "../../theme"

const searchBox = () => {
    return (
        <View>
           
            {/* <View style={style.icon}>
                            <Icon name='search' size={22} color={color.palette.icon}/>
            </View> */}

             <Input containerStyle={{backgroundColor:color.palette.search,
             marginTop:10,
             marginHorizontal:16,
             width: Dimensions.get('window').width - 32,
             borderRadius:10,
             height:45
            }} 
            inputContainerStyle={{borderBottomWidth:0}}
             placeholder="Tìm kiếm" 
             leftIcon={<Icon  name='search' size={22} color={color.palette.icon} />}/>
        </View>

    )
}
export default searchBox