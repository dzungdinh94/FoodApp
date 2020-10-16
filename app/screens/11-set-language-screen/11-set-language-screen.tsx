import React from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, Text, View, StyleSheet } from "react-native"
import {CheckBox} from 'react-native-elements'
import { Screen, Button } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"

const ROOT: ViewStyle = {
  backgroundColor: color.palette.white,
  flex: 1,
  marginHorizontal: 32,
  
}

const styles = StyleSheet.create({
  checkboxWrapper: {
    display: 'flex',
    flexDirection: 'row',
    marginRight: 1
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: 'black',
  },
  avatarWrapper:{
    paddingTop: 64
  },
  firstText: {
    fontFamily:'SegoeUI-Bold',
    fontSize: 28
  },
  firstTextWrapper:  {
    marginTop: 16,
    marginBottom: 32
  },
  checkboxText: {
    fontSize: 15,
    fontFamily:'SegoeUI-Regular',
    color: 'rgb(102,102,102)'
  },
  button: {
    width: '100%',
    height: 50,
    borderRadius: 8,
    backgroundColor: 'rgb(147,194,47)',
  },
  buttonWrapper: {
    marginTop: 32
  }
})

export const SetLanguageScreen = observer(function SetLanguageScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()
  // OR
  // const rootStore = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <Screen style={ROOT} preset="scroll">
      <Text preset="header" text="SetLanguageScreen" />
      <View style={styles.avatarWrapper}>
        <View style={styles.avatar}></View>
      </View>
      <View style={styles.firstTextWrapper}>
        <Text style={styles.firstText}>Hi Thuý!</Text>  
      </View>
      <Text>Please select your preferred language to facilitate communication</Text>
      <View style={styles.checkboxWrapper}>
        <CheckBox 
          title='English'
          checked={true}
          size={20}
          textStyle={styles.checkboxText}
          checkedIcon='check-circle'
          uncheckedIcon='circle'
          checkedColor='#93c22f'
        />
        <CheckBox 
          title='Chinese'
          checked={false}
          size={20}
          textStyle={styles.checkboxText}
          checkedIcon='check-circle'
          uncheckedIcon='circle'
          checkedColor='#93c22f'
        />
      </View>
      <View style={styles.checkboxWrapper}>
        <CheckBox 
          title='Portuguese'
          checked={false}
          size={20}
          textStyle={styles.checkboxText}
          checkedIcon='check-circle'
          uncheckedIcon='circle'
          checkedColor='#93c22f'
        />
        <CheckBox 
          title='Spanish'
          checked={false}
          size={20}
          textStyle={styles.checkboxText}
          checkedIcon='check-circle'
          uncheckedIcon='circle'
          checkedColor='#93c22f'
        />
      </View>
      <View style={styles.checkboxWrapper}>
        <CheckBox 
          title='Hindi'
          checked={false}
          size={15}
          textStyle={styles.checkboxText}
          checkedIcon='check-circle'
          uncheckedIcon='circle'
          checkedColor='#93c22f'
        />
        <CheckBox 
          title='Arabic'
          checked={false}
          size={20}
          textStyle={styles.checkboxText}
          checkedIcon='check-circle'
          uncheckedIcon='circle'
          checkedColor='#93c22f'
        />
        <CheckBox 
          title='Russian'
          checked={false}
          size={20}
          textStyle={styles.checkboxText}
          checkedIcon='check-circle'
          uncheckedIcon='circle'
          checkedColor='#93c22f'
        />
      </View>
      <View style={styles.checkboxWrapper}>
        <CheckBox 
          title='Bulgarian'
          checked={false}
          size={20}
          textStyle={styles.checkboxText}
          checkedIcon='check-circle'
          uncheckedIcon='circle'
          checkedColor='#93c22f'
        />
        <CheckBox 
          title='Lithuanian'
          checked={false}
          size={20}
          textStyle={styles.checkboxText}
          checkedIcon='check-circle'
          uncheckedIcon='circle'
          checkedColor='#93c22f'
        />
      </View>
      <View style={styles.buttonWrapper}>
        <Button text='Select' style={styles.button}></Button>
      </View>
      
    </Screen>
  )
})
