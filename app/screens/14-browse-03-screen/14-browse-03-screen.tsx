import React from "react"
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

const ROOT: ViewStyle = {
  backgroundColor: color.palette.background,
  flex: 1,
}
const FirstRoute = () => (
  <FlatList
    data={Traicay}
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
          <Text style={styles.price}>{item.price}</Text>
          <TouchableOpacity>
            <Text style={styles.buttonbuy}>Thêm vào giỏ</Text>
          </TouchableOpacity>
        </View>

      </View>

      <Image source={item.image} style={styles.Image} /><LikeHeart />
    </View>
  )
}
const SecondRoute = () => (
  <FlatList
    data={Rau}
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
          <Text style={styles.price}>{item.price}</Text>
          <TouchableOpacity>
            <Text style={styles.buttonbuy}>Thêm vào giỏ</Text>
          </TouchableOpacity>
        </View>

      </View>

      <Image source={item.image} style={styles.Image} /><LikeHeart />
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
export const Browse03Screen = observer(function Browse03Screen() {
  const navigation = useNavigation()
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
        marginBottom:12,
        shadowOffset: { height: 0, width: 0 }, 
        shadowColor: 'transparent',
        shadowOpacity: 0,
        elevation:0 
      }}
      
      labelStyle={{
        color: color.palette.black,
        fontSize: 13,
        textTransform: 'capitalize',
      }}
      
      indicatorStyle={{ backgroundColor: color.palette.buttonbuy}}
    />
  );
  return (
    <Screen style={ROOT} preset="scroll">
      <Header leftIcon='back' headerText='Back' onLeftPress={() => { navigation.navigate('Browse02Screen') }} />

      <View style={styles.headerBackground}>
        <Image source={require('../../image/logo.png')} style={styles.image} />
        <View style={styles.iconstyle}>
          <Icon name='search' type='feather' />
          <Icon name='shopping-cart' type='feather' marginLeft={16} />
        </View>

      </View>
      <TouchableOpacity onPress={() => { navigation.navigate('SearchScreen') }}>
        <SearchBox />
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

