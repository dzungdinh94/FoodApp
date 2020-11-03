import React from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, View, ScrollView, TouchableOpacity } from "react-native"
import { Screen, Text } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color, spacing } from "../../theme"
import styles from './styles'
import { Icon } from 'react-native-elements';

const ROOT: ViewStyle = {
  backgroundColor: color.palette.white,
  flex: 1,
}

const RadioInput = ({ title, selected, onClick }) => {
  return (
    <View style={styles.radioContainer}>
      <TouchableOpacity
        style={[
          styles.radioCircle,
          {
            borderColor: selected ? color.palette.main : color.palette.black,
            backgroundColor: selected ? color.palette.main : color.palette.white,
          },
        ]}
        onPress={() => {
          onClick(title)
        }}
      >
        {selected ? (
          <Icon name="check" type="font-awesome" color={color.palette.white} size={12} />
        ) : null}
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 17,
          color: "rgb(100,100,100)",
          fontWeight: "normal",
        }}
      >
        {title}
      </Text>
    </View>
  )
}

const cardList = ["Visa", "Mastercard", "Paypal", "ApplePay", "American Express"]

export const PaymentScreen = observer(function PaymentScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()
  // OR
  // const rootStore = useStores()
  const [cardType, SetCardType] = React.useState(cardList[0])
  const [cardNumber, SetCardNumber] = React.useState(["8364", "9375", "0930", "7320"])
  const [cardHolder, SetCardHolder] = React.useState("Fedricson Moors")
  const [cardExpires, SetCardExpires] = React.useState("22/20")
  const [cardCVC, SetCardCVC] = React.useState("847")
  const [saveInfo, SetSaveInfo] = React.useState(true)
  // Pull in navigation via hook
  const navigation = useNavigation()
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

      <View style={styles.tittle}>
        <Text style={styles.textThanhToan}>Thanh toán</Text>
      </View>

      <View style={styles.listCard}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          <View style={[styles.textListCard, { backgroundColor: 'rgb(147,194,47)' }]}>
            <Text style={[styles.textCard, { color: 'white' }]}>Visa</Text>
          </View>
          <View style={styles.textListCard}>
            <Text style={styles.textCard}>Mastercard</Text>
          </View>
          <View style={styles.textListCard}>
            <Text style={styles.textCard}>Paypal</Text>
          </View>
          <View style={styles.textListCard}>
            <Text style={styles.textCard}>ApplePay</Text>
          </View>
          <View style={styles.textListCard}>
            <Text style={styles.textCard}>American Express</Text>
          </View>
        </ScrollView>
      </View>

      <View style={styles.inforCard}>
          <ScrollView
            horizontal={true}
            pagingEnabled={true}
            style={{ paddingVertical: 16 }}
          >
            <View style={styles.card}>
              <View style={styles.hologram}>

              </View>

            </View>

            <View style={styles.card}>

            </View><View style={styles.card}>

            </View>
          </ScrollView>
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

      <View style={{ flexDirection: 'row', marginLeft: spacing[3], alignItems: 'center' }}>
        <Icon
          name="checkcircle"
          type="antdesign"
          color={color.palette.main}
          size={20}
        />
        <Text style={[styles.textInputInfor, { fontSize: 15, lineHeight: 20, marginLeft: spacing[2] }]}>Save credit information</Text>
      </View>
      <TouchableOpacity style={styles.button} >
        <Text style={styles.textButton}>Hoàn tất</Text>
      </TouchableOpacity>

    </Screen>
  )
})
