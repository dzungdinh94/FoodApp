import React, { useState, useEffect } from "react"
import { observer } from "mobx-react-lite"
import { Image, View, ViewStyle } from "react-native"
import { Screen, Text } from "../../components"
import { useNavigation } from "@react-navigation/native"
import screens from "../../navigation/screens"
import { AppNavigator } from "../../navigation/primary-navigator"
// import { useStores } from "../../models"
import { color } from "../../theme"
import styles from "./styles"
import { images } from "../../../assets/images"
import auth from '@react-native-firebase/auth';

const ROOT: ViewStyle = {
  backgroundColor: color.palette.white,
  flex: 1,
}

export const SplashScreen = observer(function SplashScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()
  // OR
  // const rootStore = useStores()

  // Pull in navigation via hook
  const navigation = useNavigation()
  console.log(images.smartLifeLogo2)

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();


  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false)
    console.log(user)
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;
  if(user){
    return AppNavigator()
  }
    return(
    <Screen style={ROOT} preset="scroll">
    <View style={styles.container}>
      <Image source={images.splashBackground} style={styles.background} />
      <Image source={images.smartLifeLogoTransparent} style={styles.logo} resizeMode="stretch" />
      <View style={styles.darkBackground}></View>
    </View>
  </Screen>
    )
  
})
