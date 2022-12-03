import React from "react"
import CardRepository from "../../components/CardRepository"
import { Container } from "./styles"

type Props = {
  navigation: object
}

export function Home({ navigation }: Props) {
  return (
    <Container>
      <CardRepository />
    </Container>
  )
}
