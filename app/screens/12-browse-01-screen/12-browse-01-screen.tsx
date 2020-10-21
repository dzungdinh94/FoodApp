import React from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle,View, StyleSheet, FlatList, TouchableOpacity } from "react-native"
import { Screen, Text } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"
import { Icon } from 'react-native-elements'
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs"
import {SearchScreen} from '../17-search-screen/17-search-screen'
import {OrdersScreen} from '../26-orders-screen/26-orders-screen'
import {FavoritesScreen} from '../29-favorites-screen/29-favorites-screen'
import {NotificationsScreen} from '../30-notifications-screen/30-notifications-screen'
import {AccountScreen} from '../31-account-screen/31-account-screen'


const ROOT: ViewStyle = {
  backgroundColor: color.palette.white,
  flex: 1,
  marginHorizontal: 16
}

const styles = StyleSheet.create({
  headerWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  headerText: {
    color: 'black'
  },
  headerIcon: {
    display: 'flex',
    flexDirection: 'row'
  },
  adsWrapper: {
    width: 326,
    height: 190,
    backgroundColor: 'rgba(0,0,0,0.2)',
    marginTop: 16,
    borderRadius: 8,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8
  },
  smallText: {
    fontFamily: 'SegoeUI-Regular',
    fontSize: 12,
    color: 'rgb(255,255,255)'
  },
  hugeText: {
    fontFamily: 'SegoeUI-Bold',
    fontSize: 28,
    color: 'rgb(255,255,255)'
  },
  mediumText: {
    fontFamily: 'SegoeUI-Bold',
    fontSize: 17,
    color: 'rgb(147,194,47)'
  },
  categoryText: {
    fontFamily: 'SegoeUI-Regular',
    fontSize: 13,
    marginVertical: 8,
    color: color.palette.black
  },
  categoryWrapper: {
    display:'flex',
    flexDirection:'column'
  },
  iconWrapperNormal: {
    width: 48,
    height: 48,
    borderRadius: 50,
    marginTop: 8,
    borderStyle: 'solid',
    backgroundColor: 'rgb(239,239,244)',
    marginHorizontal: 8,
    display: 'flex',
    justifyContent: 'center' 
  },
  iconWrapperPress: {
    width: 48,
    height: 48,
    borderRadius: 50,
    marginTop: 8,
    borderStyle: 'solid',
    backgroundColor: 'rgb(147,194,47)',
    marginHorizontal: 8,
    display: 'flex',
    justifyContent: 'center'     
  },
  categoryTextWrapper: {
    display: 'flex',
    alignItems: 'center'
  }
})


const dataAds=[
  {
    id:1,
    smallText: 'Trái cây & Rau',
    hugeText: 'Càng mua càng rẻ',
    mediumText: 'Mức giảm giá tới 30%'
  },
  {
    id:2,
    smallText: 'Trái cây & Rau',
    hugeText: 'Càng mua càng rẻ',
    mediumText: 'Mức giảm giá tới 30%'
  },  
  {
    id:3,
    smallText: 'Trái cây & Rau',
    hugeText: 'Càng mua càng rẻ',
    mediumText: 'Mức giảm giá tới 30%'
  },  
  {
    id:4,
    smallText: 'Trái cây & Rau',
    hugeText: 'Càng mua càng rẻ',
    mediumText: 'Mức giảm giá tới 30%'
  },
]

const foodCategories = [
  {
    id: 1,
    name: 'Trái cây',
    iconName: 'carrot',
  },
  {
    id: 2,
    name: 'Rau',
    iconName: 'lemon',

  },
  {
    id: 3,
    name: 'Bánh',
    iconName: 'birthday-cake',

  },
  {
    id: 4,
    name: 'Thịt',
    iconName: 'bacon',

  },
  {
    id: 5,
    name: 'Sữa',
    iconName: 'cheese',

  },
  {
    id: 6,
    name: 'Trái cây 123',
    iconName: 'carrot',

  },
  {
    id: 7,
    name: 'Rau 123',
    iconName: 'lemon',

  },
  {
    id: 8,
    name: 'Bánh 123',
    iconName: 'birthday-cake',

  },
  {
    id: 9,
    name: 'Thịt 123',
    iconName: 'bacon',

  },
  {
    id: 10,
    name: 'Sữa 123',
    iconName: 'cheese',
  }
]








const  Browse01MainScreen = () => {
  const [category,setCategory] = React.useState('Trái cây')
  
  const renderItemAds =({item}) => {
    return(
      <View style={styles.adsWrapper}>
        <Text style={styles.smallText}>{item.smallText}</Text>
        <Text style={styles.hugeText}>{item.hugeText}</Text>
        <Text style={styles.mediumText}>{item.mediumText}</Text>
      </View>
    )
  }
  

  const renderItemFoodCategories = ({item}) => {    
    return(
      <View>
        <TouchableOpacity style={category == item.name ? styles.iconWrapperPress : styles.iconWrapperNormal}>
          <Icon 
            name={item.iconName}
            type='font-awesome-5'
            onPress={() => {setCategory(item.name)}}
            color={category == item.name ? 'rgb(255,255,255)' : 'rgb(200,199,204)'}
            />
        </TouchableOpacity> 
        <View style={styles.categoryTextWrapper} >
            <Text style={styles.categoryText}>{item.name}</Text>
        </View> 
        
      </View>
    )
  }
  return(
    <View style={{backgroundColor:color.palette.white}}>
      <Text preset="header" text="Browse01Screen" />
      <View style={styles.headerWrapper}>
        <Text style={styles.headerText}>Smart Life</Text>
        <View style={styles.headerIcon}>
          <Icon 
            name='search'
          />
          <Icon 
            name='shopping-cart'
          />
        </View>
      </View>
      <FlatList 
        data={dataAds}
        renderItem={renderItemAds}
        keyExtractor={(item) => item.id}
        horizontal={true}
      />
      <FlatList 
        data={foodCategories}
        renderItem={renderItemFoodCategories}
        keyExtractor={(item) => item.id}
        horizontal={true}
        style={{width:'100%',height:90}}
      />
      <View style={{width: 163, height: 223, borderRadius: 8, display:'flex', flexDirection:'column',margin:8,borderWidth:1, borderColor:'rgb(239,239,244)'}}>
        <View style={{width:'100%',height:163,display:'flex',flexDirection:'row-reverse',backgroundColor:'rgb(200,199,204)',borderRadius:8}}>
          <View style={{width:20,height:20,borderRadius:50,backgroundColor:'white',display:'flex',justifyContent:'center',marginTop:8, marginRight:8}}>
            <Icon 
              name='heart'
              type='ionicon'
              size={10}
              color='grey'
            />
          </View>
          
        </View>
        <View style={{flexGrow:1, marginHorizontal:16, marginVertical:8}}>
          <Text style={{fontFamily: 'SegoeUI-Regular', fontSize: 15, color:'black', marginBottom:4}}>Bông cải xanh</Text>
          <Text style={{fontFamily: 'SegoeUI-Regular', fontSize: 15, color:'rgb(102,102,102)'}}>50.000đ</Text>
        </View>
      </View>
    </View>
  )
}

const Tab = createMaterialBottomTabNavigator()
export const Browse01Screen = observer(function Browse01Screen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()
  // OR
  // const rootStore = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <Screen style={ROOT} preset="scroll">


      <Tab.Navigator
      initialRouteName={'Tìm kiếm'}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName
          if (route.name === 'Tìm kiếm') {
            iconName = focused ? "search" : "search"
          } else if (route.name === 'Đặt hàng') {
            iconName = focused ? "newspaper" : "newspaper-outline"
          } else if (route.name === 'Yêu thích') {
            iconName = focused ? "heart" : "heart-outline"
          } else if (route.name === 'Thông báo') {
            iconName = focused ? "notifications" : "notifications-outline"
          } else {
            iconName = focused ? "person" : "person-outline"
          }
          return <Icon name={iconName} size={25} type="ionicon" color={color.palette.main}/>
        },
      })}
      barStyle={{ backgroundColor: color.palette.white }}
      activeColor={color.palette.main}
    >
      <Tab.Screen name='Tìm kiếm' component={Browse01MainScreen} />
      <Tab.Screen name='Đặt hàng' component={OrdersScreen} />
      <Tab.Screen name='Yêu thích' component={FavoritesScreen} />
      <Tab.Screen name='Thông báo' component={NotificationsScreen} />
      <Tab.Screen name='Tài khoản' component={AccountScreen} />
    </Tab.Navigator>
    </Screen>
  )
})
