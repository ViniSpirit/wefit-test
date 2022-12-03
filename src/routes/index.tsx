import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { StatusBar } from "expo-status-bar"

import StackRouter from "./Stack.router"

export default function AppRoutes() {
  return (
    <NavigationContainer>
      <StatusBar hidden />
      <StackRouter />
    </NavigationContainer>
  )
}
