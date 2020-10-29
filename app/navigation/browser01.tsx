import React from "react"
import { createNativeStackNavigator } from "react-native-screens/native-stack"
import {
  SignInScreen,
  SignUpScreen,
  ForgotPasswordScreen,
  VerificationCodeScreen,
  OnboardingScreen,
  Browse01Screen
} from "../screens"
import screens from "./screens"
const Stack = createNativeStackNavigator()

export function Browse01Stack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
      }}
      initialRouteName={screens.Browse01Screen}
    >
      <Stack.Screen name={screens.Browse01Screen} component={Browse01Screen} />
    </Stack.Navigator>
  )
}