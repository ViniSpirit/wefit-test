import React from "react"
import { StatusBar } from "expo-status-bar"
import { Container, Text } from "./styles"

export function Favorites() {
  return (
    <Container>
      <StatusBar hidden />
      <Text>Favorites</Text>
    </Container>
  )
}
