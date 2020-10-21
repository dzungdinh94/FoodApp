import React from "react"
import { observer } from "mobx-react-lite"
import { ScrollView, ViewStyle, View, Image, Dimensions, TouchableOpacity, FlatList } from "react-native"
import { Screen, Text } from "../../components"
import { color } from "../../theme"
import { Icon } from 'react-native-elements'
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
    <View style={styles.container}>
      <View>
        <View style={styles.cover}>
          <Image source={item.image} style={styles.Image} />
          <LikeHeart />
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.price}>{item.price}</Text>
          <TouchableOpacity>
            <Text style={styles.buttonbuy} text="Thêm vào giỏ" />
          </TouchableOpacity>
        </View>
        
      </View>
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
    <View style={styles.container}>

      <View style={styles.cover}>
        <Image source={item.image} style={styles.Image} />
        <LikeHeart />
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>{item.price}</Text>
        <TouchableOpacity>
          <Text style={styles.buttonbuy}>Thêm vào giỏ</Text>
        </TouchableOpacity>
      </View>
      
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
        marginTop: 6
      }}
      labelStyle={{ color: color.palette.black, fontSize: 13, textTransform: 'capitalize' }}
      indicatorStyle={{ backgroundColor: color.palette.buttonbuy, width: 49, marginLeft: 16 }}
    />
  );
  return (
    <Screen style={ROOT} preset="scroll">
      <Header leftIcon='back' headerText='Back' onLeftPress={() => { navigation.navigate('Browse02Screen') }} />

      <View style={styles.headerBackground}>
        <Image source={require('../../image/logo.png')} style={styles.image} />
        <View style={styles.iconstyle}>
          <Icon name='search' type='feather' marginRight={15} />
          <Icon name='shopping-cart' type='feather' />
        </View>
      </View>
      <SearchBox />
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

