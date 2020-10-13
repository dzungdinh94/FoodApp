import React from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, View, TouchableOpacity, ScrollView,Image} from "react-native"
import { Icon } from 'react-native-elements'
import { Screen, Text } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"
import style from "./style"
import LikeHeart from '../../components/likeheart/likeheart'
import ImageBullet from '../../components/image-bullet/imagebullet'
const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
  flex: 1,
}

export const Browse02Screen = observer(function Browse02Screen() {
  return (
    <Screen style={ROOT} preset="scroll">
        <View>
        <Cover/>
        <View style={style.body}>
          <View>
              <View style={style.textHead}>
                <Text style={style.item}>Danh mục</Text>
                <TouchableOpacity style={{display:'flex',flexDirection:'row'}}>
                  <Text style={style.textRight}>Tất cả</Text>
                  <Icon name='navigate-next' type='MaterialIcons' color='gray'/>
                </TouchableOpacity>
                
              </View>
               <ScrollView horizontal={true}>
                 <View>
                      <ImageBullet/>
                      <View style={{position:'absolute', top:130,left:15}}>
                       <Text style={style.textbullet}>Trái cây</Text>
                       <Text style={style.textwhite}>Giá từ 5.000đ</Text> 
                       </View>
                 </View>
                 <View>
                      <ImageBullet/>
                      <View style={{position:'absolute', top:130,left:15}}>
                       <Text style={style.textbullet}>Rau</Text>
                       <Text style={style.textwhite}>Giá từ 3.000đ</Text> 
                       </View>
                 </View>
                 <View>
                      <ImageBullet/>
                      <View style={{position:'absolute', top:130,left:15}}>
                       <Text style={style.textbullet}>Bánh</Text>
                       <Text style={style.textwhite}>Giá từ 5.000đ</Text> 
                       </View>
                 </View>
               </ScrollView>
          </View>
          <View style={style.item2}>
              <View style={style.textHead}>
                <Text style={style.item}>Đặc biệt</Text>
                <TouchableOpacity style={{display:'flex',flexDirection:'row'}}>
                  <Text style={{marginLeft:255, color:'gray'}}>Tất cả</Text>
                  <Icon name='navigate-next' type='MaterialIcons' color='gray'/>
                </TouchableOpacity>
                
              </View>
               <ScrollView horizontal={true} style={styles.scrollrow}>
                   <View style={{display:'flex', flexDirection:'column'}}>
                     <View>
                        <Image source={require('../../image/header.png')} style={style.Image}/>
                        <LikeHeart/>
                     </View> 
                     <View style={style.title}>
                     <Text style={style.textgray}>Rau</Text>
                     <Text style={style.textblack}>Mù tạt xanh</Text>
                     <Text style={style.textgray}>10.000đ</Text>                       
                     </View>
                  </View>
                  <View style={{display:'flex', flexDirection:'column'}}>
                  <View>
                        <Image source={require('../../image/header.png')} style={style.Image}/>
                        <LikeHeart/>
                    </View> 
                     <View style={style.title}>
                     <Text style={style.textgray}>Bánh</Text>
                     <Text style={style.textblack}>Bơ lạt</Text>
                     <Text style={style.textgray}>10.000đ</Text>                       
                     </View>
                  </View>
                  <View style={{display:'flex', flexDirection:'column'}}>
                  <View>
                        <Image source={require('../../image/header.png')} style={style.Image}/>
                        <LikeHeart/>
                     </View> 
                     <View style={style.title}>
                     <Text style={style.textgray}>Trái cây</Text>
                     <Text style={style.textblack}>Bưởi diễn</Text>
                     <Text style={style.textgray}>10.000đ</Text>                       
                     </View>
                  </View>
               </ScrollView>
          </View>
          {/* last item 2 */}
          <View style={style.item2}>
              <View style={style.controlbar}>
              <TouchableOpacity style={{display:'flex',flexDirection:'row'}}>
                <Text style={style.controlitem}>Bán chạy</Text>
                <Icon name='down' type='antdesign' color='gray' size={10} marginLeft={20} marginTop={15}/>
              </TouchableOpacity>
              <TouchableOpacity style={{display:'flex',flexDirection:'row'}}>
                <Icon name='sort' type='font-awesome' color='gray' size={12} marginRight={10} marginTop={15}/>
                <Text style={style.controlitem}>Sắp xếp</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{display:'flex',flexDirection:'row'}}>
                <Text style={style.controlitem}>Lọc</Text>
                <Icon name='filter' type='fontisto' color='gray' size={10} marginLeft={20}  marginTop={15}/>
              </TouchableOpacity>    
              </View>
              <View>
              </View>
              <View style={style.listitem}>
                   <View style={style.buy}>
                       <Image source={require('../../image/header.png')} style={styles.buyitem}/>
                       <View style={style.titlebuy}>
                       <Text style={style.textgray}>Trái cây</Text>
                     <Text style={style.textblack}>Táo xanh</Text>
                     <Text style={style.textgray}>20.000đ</Text>  
                       </View>
                       <Buttons title="Thêm vào giỏ"/>             
                   </View> 
                   <View style={style.buy}>
                       <Image source={require('../../image/header.png')} style={styles.buyitem}/>
                       <View style={style.titlebuy}>
                       <Text style={style.textgray}>Rau</Text>
                       <Text style={style.textblack}>Bí đỏ</Text>
                       <Text style={style.textgray}>50.000đ</Text>  
                       </View>
                       <Buttons title="Thêm vào giỏ"/>
                   </View> 
                   <View style={style.buy}>
                       <Image source={require('../../image/header.png')} style={styles.buyitem}/>
                       <View style={style.titlebuy}>
                       <Text style={style.textgray}>Rau</Text>
                     <Text style={style.textblack}>Cà chua</Text>
                     <Text style={style.textgray}>20.000đ</Text>  
                       </View>
                     <Buttons title="Thêm vào giỏ"/>
                   </View> 
              </View>
          </View>
          {/* last item 2.2 */}
        </View>
    </View>
    </Screen>
  )
})
