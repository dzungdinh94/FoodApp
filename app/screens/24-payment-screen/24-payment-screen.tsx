import React from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, View, ScrollView, TouchableOpacity, TextInput } from "react-native"
import { Screen, Text } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color, spacing } from "../../theme"
import styles from './styles'
import { Icon } from 'react-native-elements';


const ROOT: ViewStyle = {
  backgroundColor: color.palette.white,

}

const cardBackground = [{
  visa: 'Visa'
}, {
  visa: 'Mastercard'
}, {
  visa: 'Paypal'
}, {
  visa: 'ApplePay'
}, {
  visa: 'American Express'
},
]



export const PaymentScreen = observer(function PaymentScreen() {
  // Pull in one of our MST stores
  // const { SuccessScreen } = useStores()
  // OR
  // const rootStore = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()

  return (
    <Screen style={ROOT} preset="scroll">

      <View style={styles.hearder}>
        <Icon
          name="navigate-before"
          type="materialIcons"
          size={25}
        />
        <Text style={styles.textHearder}>Add New</Text>
      </View>


      <Text style={styles.textThanhToan}>Thanh toán</Text>


      <View style={styles.listCard}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          <TouchableOpacity style={[styles.textListCard, { backgroundColor: 'rgb(147,194,47)' }]}>
            <Text style={[styles.textCard, { color: 'white' }]}>Visa</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.textListCard}>
            <Text style={styles.textCard}>Mastercard</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.textListCard}>
            <Text style={styles.textCard}>Paypal</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.textListCard}>
            <Text style={styles.textCard}>ApplePay</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.textListCard}>
            <Text style={styles.textCard}>American Express</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      <View style={styles.inforCard}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          pagingEnabled={true}
        >
          <View style={styles.card}>
            <View style={styles.outHologram}>
              <View style={styles.hologram}>
              </View>
              <Text style={{ color: 'white' }}>VISA</Text>
            </View>
            <Text style={styles.cardNummer}>8364       9375       0930       7302</Text>

            <View style={styles.holderAndExpires}>
              <View >
                <Text style={styles.textCardHolder}>Card Holder</Text>
                <Text style={styles.textCardInput}>Fedricson Moors</Text>
              </View>
              <View>
                <Text style={styles.textCardHolder}>Expires</Text>
                <Text style={styles.textCardInput}>22 / 20</Text>
              </View>
            </View>
          </View>

          <View style={styles.card}>
            <View style={styles.outHologram}>
              <View style={styles.hologram}>
              </View>
              <Text style={{ color: 'white' }}>VISA</Text>
            </View>
            <Text style={styles.cardNummer}>8364       9375       0930       7302</Text>

            <View style={styles.holderAndExpires}>
              <View >
                <Text style={styles.textCardHolder}>Card Holder</Text>
                <Text style={styles.textCardInput}>Fedricson Moors</Text>
              </View>
              <View>
                <Text style={styles.textCardHolder}>Expires</Text>
                <Text style={styles.textCardInput}>22 / 20</Text>
              </View>
            </View>
          </View>
        </ScrollView>
        <View style={styles.outOval} >
          <View style={[styles.oval, { backgroundColor: color.palette.main }]}></View>
          <View style={[styles.oval, { backgroundColor: color.palette.lightGrey }]}></View>
          <View style={[styles.oval, { backgroundColor: color.palette.lightGrey }]}></View>
        </View>
      </View>

      <View style={styles.inputInfor}>
        <Text style={styles.textTittleInfor}>Card Number</Text>
        <Text style={styles.textInputInfor}>8364 9375 0930 7302</Text>
      </View>
      <View style={styles.inputInfor}>
        <Text style={styles.textTittleInfor}>Card Holder</Text>
        <Text style={styles.textInputInfor}>Fedricson Moors</Text>
      </View>
      <View style={styles.inputInfor}>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={styles.textTittleInfor}>Expires</Text>
          <Text style={styles.textInputInfor}>22 / 20</Text>
        </View>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginLeft: spacing[3] }}>
          <Text style={styles.textTittleInfor}>CVC</Text>
          <Text style={styles.textInputInfor}>847</Text>
        </View>
      </View>

      <View style={{ flexDirection: 'row', marginLeft: spacing[4], alignItems: 'center' }}>
        <Icon
          name="checkcircle"
          type="antdesign"
          color={color.palette.main}
          size={20}
        />
        <Text style={[styles.textInputInfor, { fontSize: 15, lineHeight: 20, marginLeft: spacing[2] }]}>Save credit information</Text>
      </View>
      <TouchableOpacity style={styles.button}
      >
        <Text style={styles.textButton}>Hoàn tất</Text>
      </TouchableOpacity>

    </Screen>
  )
})
