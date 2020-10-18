import React from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle,View, StyleSheet, TouchableOpacity } from "react-native"
import { Screen, Text } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"
import { Icon } from 'react-native-elements'

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
    alignItems: 'center'
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
  }
})

export const Browse01Screen = observer(function Browse01Screen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()
  // OR
  // const rootStore = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <Screen style={ROOT} preset="scroll">
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
      <View style={styles.adsWrapper}>
        <Text style={styles.smallText}>Trái cây & Rau</Text>
        <Text style={styles.hugeText}>Càng mua càng rẻ</Text>
        <Text style={styles.mediumText}>Mức giảm giá tới 30%</Text>
      </View>
      <View>
        <TouchableOpacity>
          <View>
            {/* <Icon 
              name=
            /> */}
          </View>
        </TouchableOpacity>
      </View>
    </Screen>
  )
})
