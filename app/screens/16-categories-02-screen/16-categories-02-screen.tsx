import React,{useState, useEffect} from "react"
import { observer } from "mobx-react-lite"
import { ScrollView, ViewStyle, View, Image,FlatList, TouchableOpacity, TextStyle } from "react-native"
import { Screen, Text } from "../../components"
import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"
import style from './style'
import { Header } from '../../components'
import screens from "../../navigation/screens"
import firestore from '@react-native-firebase/firestore'
import storage from '@react-native-firebase/storage'
import { utils } from '@react-native-firebase/app';

const ROOT: ViewStyle = {
  backgroundColor: color.palette.background,
  flex: 1,
}
export const Categories02Screen = observer(function Categories02Screen() {
  const navigation = useNavigation()
  const [CategoriesData, setCategoriesData] = useState([])
  
  const Categories = ()=>{
     firestore().collection('Categories').get().then((getData)=>{
      let result = []
      for(let data of getData.docs) {
            result.push(data.data())
          }
          setCategoriesData(result)
      })
  }

  // const total = async(item,index )=>{
  //   firestore().collection('Categories').where('categoryId','==',item.id).get().then((getData)=>{
  //     let result = []
  //     let total
  //     for(let data of getData.docs) {
  //           result.push(data.data())
  //         }
  //         total=result.length
  //     console.log(total)
  //     })
  // }

    useEffect(() => {
      Categories() }, [])

      const browse =(id,name)=>{
        navigation.navigate(screens.Browse01Screen,{
          itemId:id,
          itemName:name,
        })
      }

  return (
    <Screen style={ROOT} preset="scroll">
      <Header leftIcon='back' headerText='Back' onLeftPress={() => { navigation.navigate('Browse02Screen') }} />
      
        <Text style={style.header}>Danh mục</Text>
        <Screen preset="scroll">
        <FlatList
        numColumns={2}
        data={CategoriesData}
        keyExtractor={item=>item.id}
        renderItem={({item,index})=>{   
          
          return(
            <View key={index} style={{flex:1,marginHorizontal:8}}>
            <View style={style.cover}>
            <TouchableOpacity onPress={()=>browse(item.id,item.name)} >
            <Image source={{uri: item.image}} style={style.Image} />
          <Text style={style.name}>{item.name}</Text>
            <Text style={style.price}>{item.total} mặt hàng</Text>
            </TouchableOpacity>
          </View>
          </View>
          )
        }}
        ></FlatList>
        </Screen>
        {/*<View style={style.container}>
           <View style={style.cover}>
            <Image source={require('../../image/traicay.png')} style={style.Image} />
            <Text style={style.name}>Trái cây</Text>
            <Text style={style.price}>746 mặt hàng</Text>
          </View>


          <View style={style.cover}>
            <Image source={require('../../image/rau.png')} style={style.Image} />
            <Text style={style.name}>Rau</Text>
            <Text style={style.price}>926 mặt hàng</Text>
          </View>

       </View>

        <View style={style.container}> 
         
            <View style={style.cover}>
              <Image source={require('../../image/banhkeo.png')} style={style.Image} />
              <Text style={style.name}>Bánh kẹo</Text>
              <Text style={style.price}>4385 mặt hàng</Text>
            </View>
         
          
            <View style={style.cover}>
              <Image source={require('../../image/thit.png')} style={style.Image} />
              <Text style={style.name}>Thịt</Text>
              <Text style={style.price}>268 mặt hàng</Text>
            </View>
          
        </View>

        <View style={style.container}>
         
            <View style={style.cover}>
              <Image source={require('../../image/sua.png')} style={style.Image} />
              <Text style={style.name}>Sữa</Text>
              <Text style={style.price}>926 mặt hàng</Text>
            </View>
          
         
            <View style={style.cover}>
              <Image source={require('../../image/douong.png')} style={style.Image} />
              <Text style={style.name}>Đồ uống</Text>
              <Text style={style.price}>725 mặt hàng</Text>
            </View>
          
        </View>

        <View style={style.container}> 
         
            <View style={style.cover}>
              <Image source={require('../../image/cscn.png')} style={style.Image} />
              <Text style={style.name}>Chăm sóc cá nhân</Text>
              <Text style={style.price}>9237 mặt hàng</Text>
            </View>
          
          
            <View style={style.cover}>
              <Image source={require('../../image/rau.png')} style={style.Image} />
              <Text style={style.name}>Gia dụng</Text>
              <Text style={style.price}>583 mặt hàng</Text>
            </View>
        </View> */}
      
    </Screen>
  )
})
