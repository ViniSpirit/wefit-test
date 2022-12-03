import React from "react"
import { Container, Text } from "./styles"

type Props = {
  message: string
}

export default function ErrorMessage({ message }: Props) {
  return (
    <Container>
      <Text>{message}</Text>
    </Container>
  )
}
