import React, { useEffect, useState } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle ,View,TouchableOpacity, FlatList,Image } from "react-native"
import { Screen, Text} from "../../components"
import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"
import styles from "./styles"
import InputForm from "../../components/inputFrom"
import { Icon } from 'react-native-elements'
const ROOT: ViewStyle = {
  backgroundColor: color.palette.white,
  flex: 1,
}
// const styles = StyleSheet.create({
  
// })
export const SearchScreen = observer(function SearchScreen() {
  const [inputSearch,setInputSearch]=React.useState('')
  const getInputSearch=(text)=>{
    setInputSearch(text)
}
React.useEffect(() => {
  console.log(inputSearch)
},[inputSearch])
const dataFood=[
  {id : 1 , title : "Trái cây"},
  {id : 2 , title : "Rau"},
  {id : 3 , title : "Bánh Kẹo"},
  {id : 4 , title : "Thịt"},
  {id : 5 , title : "Sữa"},
  {id : 6, title:"Đồ uống" }
  ]
const food1=[
  {id:1,
  name: "Rau",
  title:"Mù tạt xanh",
  price:"10k",
  image:require('../../../assets/17_img/3dca2741043f945a6ed80f482fc7070f.jpg')
  },
  {id:2,
    name: "Trái cây",
    title:"táo hữu cơ",
    price:"20k",
    image:require('../../../assets/17_img/tao-juliet-huu-co.jpg')
    },
]
  const ItemFood = ({ title  }) => (
    <TouchableOpacity >
      <View style={styles.border}>
        <Text style={styles.TextBorder}>{title}</Text>
        </View>
    </TouchableOpacity>     
  );
  const renderItemFood = ({ item }) => (
      <ItemFood title={item.title}/>
  );
  const ItemFood1 = ({ title,name,price,image}) => (
   <View style={styles.row}>
      <View >
        <Text style={styles.nameFood}>{name}</Text>
        <Text style={styles.titleFood}>{title}</Text>  
        <Text style={styles.priceFood}>{price}</Text>  
      </View>
      <TouchableOpacity>
        <View style={styles.btnImage}>
          <Image source= {image} style={styles.image}/>
        </View>
      </TouchableOpacity>
   </View>
   
);
const renderItemFood1 = ({ item }) => (
  <ItemFood1 title={item.title} name={item.name} price={item.price} image={item.image}/>
);
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()
  // OR
  // const rootStore = useStores()

  // Pull in navigation via hook
  const navigation = useNavigation();

  const deleteSearch=()=>{
    // alert("hello")
    // setInputSearch("")
  }

  return (
    <Screen style={ROOT} preset="scroll">
      {/* <Text preset="header" text="SearchScreen" /> */}
      <View style={styles.container}>
      <View style={styles.btncontainer1}>
        <TouchableOpacity>
          <Icon name='search' type='AntDesign' style={styles.icon} />
        </TouchableOpacity>
        <InputForm title="Tìm kiếm" onPress={getInputSearch}/>
        <TouchableOpacity>
          <Icon name='delete' type='feather' style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={deleteSearch}>
          <Text preset="header" text="Hủy"  style={styles.text}/>
        </TouchableOpacity>
      </View>
      <View style={styles.btncontainer2}>
        <FlatList 
        horizontal={true}
        contentContainerStyle={{
            flexDirection: 'row',
        }}
        data={dataFood} 
        renderItem={renderItemFood}
        keyExtractor={item => item.id}
        />     
      </View>
      <View style={styles.btncontainer3}>
        <View style={styles.row1}/>
      <FlatList 
        data={food1} 
        renderItem={renderItemFood1}
        keyExtractor={item => item.id}
        />
      </View>
      </View>
    </Screen>
  )
})
