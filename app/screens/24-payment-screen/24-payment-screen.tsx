import React from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle } from "react-native"
import { Button, Screen, Text } from "../../components"
import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color, spacing, distance } from "../../theme"
import { Icon } from "react-native-elements"
import SimpleImage from "../../components/simpleImage/simple-image"
import { ScrollView, TextInput, TouchableOpacity } from "react-native-gesture-handler"
import screens from "../../navigation/screens"
import styles from "./styles"
import ItemCounter from "../../components/ItemCounter/ItemCounter"
import FlipCard from "react-native-flip-card"
import RadioInput from "../../components/RadioInput"

const ROOT: ViewStyle = {
  backgroundColor: color.palette.white,
  alignItems: "center",
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
          <Icon name="navigate-before" type="material" size={40} />
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
      <View
        style={{
          width: "100%",
          paddingVertical: 16,
          alignItems: "center",
          backgroundColor: color.palette.gray240,
        }}
      >
        <FlipCard
          style={{ backgroundColor: color.palette.gray240 }}
          friction={6}
          flipHorizontal={true}
          flipVertical={false}
          flip={false}
          clickable={true}
          onFlipEnd={(isFlipEnd) => {
            console.log("isFlipEnd", isFlipEnd)
          }}
        >
          {/* Face Side */}
          <View
            style={{
              backgroundColor: color.palette.black,
              height: (distance.windowWidth - 32) * 0.6,
              width: distance.windowWidth - 32,
              borderRadius: spacing[4],
              borderWidth: 1,
              overflow: "hidden",
            }}
          >
            {/* VISA TEXT */}
            <Text
              style={{
                color: color.palette.gray140,
                fontSize: 32,
                fontWeight: "bold",
                fontStyle: "italic",
                position: "absolute",
                top: "12%",
                right: "8%",
              }}
            >
              {cardType}
            </Text>
            {/* RECTANGLE */}
            <View
              style={{
                width: 44,
                height: 36,
                position: "absolute",
                top: "12%",
                left: "8%",
                backgroundColor: color.palette.gray140,
                borderRadius: spacing[2],
              }}
            />
            {/*BIG VISA TEXT */}
            <Text
              style={{
                color: color.palette.gray100,
                fontSize: 160,
                lineHeight: 160,
                letterSpacing: 5,
                fontWeight: "bold",
                fontStyle: "italic",
                position: "absolute",
                bottom: -40,
                left: 0,
                opacity: 0.2,
                width: 2000,
              }}
            >
              {cardType}
            </Text>
            {/*CARD HOLDER DETAILS */}
            <View
              style={{
                marginHorizontal: "8%",
                top: "40%",
                height: "40%",
                justifyContent: "space-between",
              }}
            >
              <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
                {cardNumber.map((value, index) => (
                  <Text
                    key={index}
                    style={{
                      fontSize: 20,
                      color: color.palette.gray140,
                      textTransform: "uppercase",
                    }}
                  >
                    {value}
                  </Text>
                ))}
              </View>
              <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
                <View>
                  <Text
                    style={{
                      fontSize: 9,
                      color: color.palette.gray140,
                      textTransform: "uppercase",
                    }}
                  >
                    CARD HOLDER
                  </Text>
                  <Text
                    style={{
                      fontSize: 13,
                      color: color.palette.white,
                      textTransform: "capitalize",
                    }}
                  >
                    {cardHolder}
                  </Text>
                </View>
                <View>
                  <Text
                    style={{
                      fontSize: 9,
                      color: color.palette.gray140,
                      textTransform: "uppercase",
                    }}
                  >
                    CARD EXPRESS
                  </Text>
                  <Text
                    style={{
                      fontSize: 13,
                      color: color.palette.white,
                      textTransform: "capitalize",
                    }}
                  >
                    {cardExpires}
                  </Text>
                </View>
              </View>
            </View>
          </View>
          {/* Back Side */}
          <View
            style={{
              backgroundColor: color.palette.black,
              height: (distance.windowWidth - 32) * 0.6,
              width: distance.windowWidth - 32,
              borderRadius: spacing[4],
              borderWidth: 1,
            }}
          >
            <View
              style={{
                position: "absolute",
                backgroundColor: color.palette.white,
                borderWidth: 4,
                borderColor: color.palette.white,
                height: "20%",
                top: "20%",
                width: "100%",
              }}
            ></View>
            <Text
              style={{
                color: color.palette.black,
                top: "24%",
                left: "80%",
                fontSize: 18,
                fontStyle: "italic",
              }}
            >
              {cardCVC}
            </Text>
            <Text
              style={{
                color: color.palette.white,
                fontSize: 9,
                fontStyle: "italic",
                top: "-7%",
                left: "10%",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae sagittis sem
            </Text>
            <Text
              style={{
                color: color.palette.white,
                fontSize: 9,
                fontStyle: "italic",
                top: "26%",
                left: "10%",
                width: "80%",
              }}
            >
              {"  "}Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae sagittis sem.
              Aenean nec sapien nec diam consequat porttitor et ac leo. Donec malesuada ante a
              feugiat ornare. Sed id tincidunt quam, consequat hendrerit est. Donec faucibus
              lobortis velit eget aliquam. Sed mollis nibh ut ultricies commodo. Vestibulum quis
              fringilla eros.
            </Text>

            <Text
              style={{
                color: color.palette.white,
                fontSize: 9,
                fontStyle: "italic",
                top: "26%",
                left: "10%",
                width: "80%",
              }}
            >
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
