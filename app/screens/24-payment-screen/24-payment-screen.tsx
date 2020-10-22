import React from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle } from "react-native"
import { Button, Screen, Text } from "../../components"
import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color, spacing } from "../../theme"
import { Icon } from "react-native-elements"
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler"
import screens from "../../navigation/screens"
import styles from "./styles"
import FlipCard from "react-native-flip-card"

const ROOT: ViewStyle = {
  backgroundColor: color.palette.white,
  alignItems: "center",
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
      {/* Navigation Bar */}
      <View style={styles.navigationContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="navigate-before" type="material" size={45} style={{ left: -spacing[3] }} />
        </TouchableOpacity>
        <Text style={{ color: color.palette.gray140, fontSize: 17 }}>Add New</Text>
      </View>
      {/* Header */}
      <Text style={styles.headerText}>Thanh toán</Text>
      {/* List of Card */}
      <ScrollView
        horizontal
        style={styles.listCardContainer}
        showsHorizontalScrollIndicator={false}
      >
        {cardList.map((value, index) =>
          value === cardType ? (
            <TouchableOpacity
              key={index}
              style={styles.hightlightCardTypeContainer}
              onPress={() => SetCardType(value)}
            >
              <Text style={styles.hightlightCardTypeName}>{value}</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              key={index}
              style={styles.cardTypeContainer}
              onPress={() => SetCardType(value)}
            >
              <Text style={styles.cardTypeName}>{value}</Text>
            </TouchableOpacity>
          ),
        )}
      </ScrollView>
      <View style={styles.cardImageContainer}>
        <FlipCard
          friction={6}
          flipHorizontal={true}
          flipVertical={false}
          flip={false}
          clickable={true}
        >
          {/* Face Side */}
          <View style={styles.faceSideContainer}>
            {/* VISA TEXT */}
            <Text style={styles.faceSideBrandText}>{cardType}</Text>
            {/* RECTANGLE */}
            <View style={styles.faceSideRectangleShape} />
            {/*BIG VISA TEXT */}
            <Text style={styles.faceSideBackgroundText}>{cardType}</Text>
            {/*CARD HOLDER DETAILS */}
            <View style={styles.faceSideDetailContainer}>
              <View style={styles.faceSideDetailContentWrapper}>
                {cardNumber.map((value, index) => (
                  <Text key={index} style={styles.faceSideCardNumberText}>
                    {value}
                  </Text>
                ))}
              </View>
              <View style={styles.faceSideDetailContentWrapper}>
                <View>
                  <Text style={styles.faceSideTitleText}>CARD HOLDER</Text>
                  <Text style={styles.faceSideContentText}>{cardHolder}</Text>
                </View>
                <View>
                  <Text style={styles.faceSideTitleText}>CARD EXPRESS</Text>
                  <Text style={styles.faceSideContentText}>{cardExpires}</Text>
                </View>
              </View>
            </View>
          </View>
          {/* Back Side */}
          <View style={styles.backSideContainer}>
            <View style={styles.backSideWhiteSpace}></View>
            <Text style={styles.backSideCVCText}>{cardCVC}</Text>
            <Text style={styles.backSideTopContent}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae sagittis sem
            </Text>
            <Text style={styles.backSideBottomContent1}>
              {"  "}Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae sagittis sem.
              Aenean nec sapien nec diam consequat porttitor et ac leo. Donec malesuada ante a
              feugiat ornare. Sed id tincidunt quam, consequat hendrerit est. Donec faucibus
              lobortis velit eget aliquam. Sed mollis nibh ut ultricies commodo. Vestibulum quis
              fringilla eros.
            </Text>

            <Text style={styles.backSideBottomContent2}>
              {"  "}Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae sagittis sem.
              Aenean nec sapien nec diam consequat porttitor et ac leo. Donec malesuada ante a
              feugiat ornare. Sed id tincidunt quam, consequat hendrerit est. Donec faucibus
              lobortis velit eget aliquam. Sed mollis nibh ut ultricies commodo. Vestibulum quis
              fringilla eros.
            </Text>
          </View>
        </FlipCard>
      </View>
      {/* Card Details */}
      <View style={styles.cardDetailsMainContainer}>
        <View style={styles.cardDetailContainer}>
          <Text style={styles.cardDetailTitle}>Card Number</Text>
          <Text style={styles.cardDetailContent}>
            {cardNumber[0]} {cardNumber[1]} {cardNumber[2]} {cardNumber[3]}
          </Text>
        </View>
        <View style={styles.cardDetailContainer}>
          <Text style={styles.cardDetailTitle}>Card Holder</Text>
          <Text style={styles.cardDetailContent}> {cardHolder}</Text>
        </View>
        <View style={styles.cardDetailContainerNoBorder}>
          <View style={styles.cardDetailContainer2}>
            <Text style={styles.cardDetailTitle}>Expires</Text>
            <Text style={styles.cardDetailContent}> {cardExpires}</Text>
          </View>
          <View style={styles.cardDetailContainer2}>
            <Text style={styles.cardDetailTitle}>CVC</Text>
            <Text style={styles.cardDetailContent}>847</Text>
          </View>
        </View>
      </View>
      {/* Save credit infomation */}
      <View style={styles.saveInfoContainer}>
        <RadioInput
          title="Lưu thông tin thanh toán"
          selected={saveInfo}
          onClick={() => (saveInfo ? SetSaveInfo(false) : SetSaveInfo(true))}
        />
      </View>

      {/* Finish Button */}
      <Button
        text="Hoàn tất"
        onPress={() => navigation.navigate(screens.SuccessScreen)}
        style={styles.button}
        textStyle={styles.buttonContent}
      />
    </Screen>
  )
})
