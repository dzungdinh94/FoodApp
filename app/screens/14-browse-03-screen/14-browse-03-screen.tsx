import React, { useState } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, View, Image, Dimensions, TouchableOpacity, FlatList } from "react-native"
import { Screen, Text } from "../../components"
import { color, spacing } from "../../theme"
import { Icon, Input } from 'react-native-elements'
import styles from './style'
import SearchBox from '../../components/search-box'
import LikeHeart from '../../components/likeheart'
import { Header } from '../../components'
import { useNavigation } from "@react-navigation/native"
import { TabView, SceneMap, TabBar } from 'react-native-tab-view'; "react-native-underline-tabbar"
import { Traicay, Rau } from '../data/data'
import screens from "../../navigation/screens"
import ItemCounter from "../../components/ItemCounter/ItemCounter"
import FavoriteToogle from "../../components/FavoriteToogle/FavoriteToogle"
import firestore from '@react-native-firebase/firestore'
const ROOT: ViewStyle = {
  backgroundColor: color.palette.background,
  flex: 1,
}

export const Browse03Screen = observer(function Browse03Screen() {
  const [speclist, setList] = useState([])

  const [newData, setNew] = useState([])
  const [rau, setraucu] = useState([])
  const RenderTraiCay = () => {
    const newArr = []
    const newList = []
    for (let x of speclist) {
      if (x.categoryID === 1) {
        const obj = {
          name: x.name,
          price: x.price
        }
        newArr.push(obj)
      }
      else if (x.categoryID === 2) {
        const newobj = {
          name: x.name,
          price: x.price
        }
        newList.push(newobj)
      }
    }

    console.log(newArr)
    setNew(newArr)
    setraucu(newList)
  }
  React.useEffect(() => {
    const specialList = async () => {
      const list = []
      const get = await firestore().collection('Product').get()
      for (let item of get.docs) {
        list.push(item.data())
        // list.sort((a, b) => a.id - b.id)

      }
      // console.log(list)

      setList(list)
    };
    specialList()
  }, [])
  React.useEffect(() => { RenderTraiCay() }, [speclist])



  const FirstRoute = () => (
    <FlatList
      data={newData}
      renderItem={renderMyItem}
      numColumns={2}
    />
  );

  const renderMyItem = ({ item, index }) => {

    return (
      <View style={[styles.container, index % 2 == 1 && { marginRight: spacing[4] }]}>
        <View style={styles.cover}>
          <View style={{ marginTop: 153 }}>
            <Text style={styles.name}>{item.name}</Text>
            {(item.price < 1000) ? <Text style={styles.price}>{item.price} triệu</Text> :
              <Text style={styles.price}>{item.price} đ</Text>
            }
            <TouchableOpacity>
              <ItemCounter
                onClickAdd={() => counterClick(1)}
                onClickRemove={() => counterClick(-1)}
                startValue={0} />
            </TouchableOpacity>
          </View>
        </View>


        <View style={styles.favoriteToggleContainer}>

          <FavoriteToogle />
        </View>

        <Image source={require('../../image/header.png')} style={styles.Image} />
      </View>
    )
  }
  const SecondRoute = () => (
    <FlatList
      data={rau}
      renderItem={renderRaucu}
      numColumns={2}

    />
  );
  const renderRaucu = ({ item, index }) => {
    return (
      <View style={[styles.container, index % 2 == 1 && { marginRight: spacing[4] }]}>
        <View style={styles.cover}>
          <View style={{ marginTop: 153 }}>
            <Text style={styles.name}>{item.name}</Text>
            {(item.price < 1000) ? <Text style={styles.price}>{item.price} triệu</Text> :
              <Text style={styles.price}>{item.price} đ</Text>
            }
            <TouchableOpacity>
              <ItemCounter
                onClickAdd={() => counterClick(1)}
                onClickRemove={() => counterClick(-1)}
                startValue={0} />
            </TouchableOpacity>
          </View>

        </View>

        <View style={styles.favoriteToggleContainer}>

          <FavoriteToogle />
        </View>

        <Image source={require('../../image/header.png')} style={styles.Image} />
      </View>
    )
  }
  const ThirdRoute = () => (
    <View style={[styles.scene, { backgroundColor: color.palette.background }]} />
  );
  const FourRoute = () => (
    <View style={[styles.scene, { backgroundColor: color.palette.background }]} />
  );
  const FiveRoute = () => (
    <View style={[styles.scene, { backgroundColor: color.palette.background }]} />
  );
  const navigation = useNavigation()
  const [numberItemsInCart, setNumberItemInCart] = React.useState(0)
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Trái cây' },
    { key: 'second', title: 'Rau' },
    { key: 'third', title: 'Bánh' },
    { key: 'four', title: 'Sữa' },
    { key: 'five', title: 'Protein' },
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
    four: FourRoute,
    five: FiveRoute
  });
  const initialLayout = { width: Dimensions.get('window').width };
  const renderTabBar = props => (
    <TabBar
      {...props}

      style={{
        backgroundColor: color.palette.background,
        color: color.palette.black,
        marginTop: 8,
        marginBottom: 12,
        shadowOffset: { height: 0, width: 0 },
        shadowColor: 'transparent',
        shadowOpacity: 0,
        elevation: 0,
        borderBottomWidth: 0.2,
        borderBottomColor: color.palette.search
      }}

      labelStyle={{
        color: color.palette.black,
        fontSize: 13,
        textTransform: 'capitalize',
      }}

      indicatorStyle={{ backgroundColor: color.palette.buttonbuy }}
    />
  );
  const changeScreen = () => {
    navigation.navigate(screens.SearchScreen)
  }
  return (
    <Screen style={ROOT} preset="scroll">
      <Header leftIcon='back' headerText='Back' onLeftPress={() => { navigation.navigate(screens.Browse02Screen) }} />

      <View style={styles.headerBackground}>
        <Image source={require('../../image/logo.png')} style={styles.image} />
        <View style={styles.iconstyle}>
          <Icon name='search' type='feather' />
          <Icon name='shopping-cart' type='feather' marginLeft={16} onPress={() => { navigation.navigate(screens.ShoppingCartScreen) }} />
        </View>

      </View>
      <TouchableOpacity >
        <SearchBox onFocus={changeScreen} />
      </TouchableOpacity>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        renderTabBar={renderTabBar}
      />
    </Screen>
  )
}
)

