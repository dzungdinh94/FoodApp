/**
 * Welcome to the main entry point of the app. In this file, we'll
 * be kicking off our app or storybook.
 *
 * Most of this file is boilerplate and you shouldn't need to modify
 * it very often. But take some time to look through and understand
 * what is going on here.
 *
 * The app navigation resides in ./app/navigation, so head over there
 * if you're interested in adding screens and navigators.
 */
import "./i18n"
import "./utils/ignore-warnings"
import React, { useState, useEffect, useRef } from "react"
import { NavigationContainerRef } from "@react-navigation/native"
import { SafeAreaProvider, initialWindowSafeAreaInsets } from "react-native-safe-area-context"
import * as storage from "./utils/storage"
import {Provider} from 'react-redux'
import store from './redux/createStore.js'
import {
  useBackButtonHandler,
  RootNavigator,
  canExit,
  setRootNavigation,
  useNavigationPersistence,
} from "./navigation"
import { RootStore, RootStoreProvider, setupRootStore } from "./models"

// This puts screens in a native ViewController or Activity. If you want fully native
// stack navigation, use `createNativeStackNavigator` in place of `createStackNavigator`:
// https://github.com/kmagiera/react-native-screens#using-native-stack-navigator
import { enableScreens } from "react-native-screens"
import { RootContainer } from "./root-container"


import AsyncStorage from "@react-native-community/async-storage"
enableScreens()

export const NAVIGATION_PERSISTENCE_KEY = "NAVIGATION_STATE"
const appName = "FOODAPP" //My addition code [dinhhoan]
const version = "1.0" //My addition code [dinhhoan]
async function PushAllDataToLocal(nameOfApp, appVersion, setTrackingState) {
  //===== PROPS ====
  //nameOfApp [string]: Name of App
  //appVersion [string]: Version of App
  //setTrackingState [function setState]: change State that tracking the push data work of
  //==== MAIN FUNCTION ====
  //Get Count Run from AsyncStorage
  let RunAppTimes = Number(await AsyncStorage.getItem(`${nameOfApp}_countRuns`))
  //Turn result to number
  //Welcome to run this app
  console.log("\x1b[33m=====================================\x1b[0m")
  console.log("\x1b[33m|            WELCOME LOG            |\x1b[0m")
  console.log("\x1b[33m=====================================\x1b[0m")
  console.log()
  console.log(`\x1b[35m${nameOfApp} ver ${appVersion}\x1b[0m`)
  console.log()
  console.log(`This is the \x1b[31m${RunAppTimes}\x1b[0m times run on this device!`)
  RunAppTimes++

  //Check is this the first time run app
  if (RunAppTimes > 0) {
    //Action when this is NOT the first run
    console.log("\x1b[32mAll data is ready to sevre!!! Happy to use this app\x1b[0m")
    console.log()
  } else {
    //ACTION WHEN DO A FRIST RUN
    AsyncStorage.setItem(`${nameOfApp}_countRuns`, "1")
  }

  //Set tracking State
  setTrackingState ? setTrackingState(true) : null
  //Increase the time run for the next run
  RunAppTimes++
  //Save the run times to asyncStorage
  AsyncStorage.setItem(`${nameOfApp}_countRuns`, RunAppTimes.toString())
  //End console.log
  console.log("\x1b[33m=====================================\x1b[0m")

  //==== END FUNCTION ====
} //My addition code [dinhhoan]
/**
 * This is the root component of our app.
 */
function App() {
  const navigationRef = useRef<NavigationContainerRef>()
  const [rootStore, setRootStore] = useState<RootStore | undefined>(undefined)
  const [isLoadAllData, setIsLoadAllData] = React.useState(false) //My addition code [dinhhoan]
  setRootNavigation(navigationRef)
  useBackButtonHandler(navigationRef, canExit)
  // const { initialNavigationState, onNavigationStateChange } = useNavigationPersistence(
  //   storage,
  //   NAVIGATION_PERSISTENCE_KEY,
  // )

  // Kick off initial async loading actions, like loading fonts and RootStore
  useEffect(() => {
    ;(async () => {
      setupRootStore().then(setRootStore)
    })()
    PushAllDataToLocal(appName, version, setIsLoadAllData) //My addition code [dinhhoan]
  }, [])

  // Before we show the app, we have to wait for our state to be ready.
  // In the meantime, don't render anything. This will be the background
  // color set in native by rootView's background color. You can replace
  // with your own loading component if you wish.
  if (!rootStore) return null

  // otherwise, we're ready to render the app
  return (
    <Provider store={store}>
      <SafeAreaProvider initialSafeAreaInsets={initialWindowSafeAreaInsets}>
        <RootContainer />
      </SafeAreaProvider>
    </Provider>
  )
}
  
export default App
