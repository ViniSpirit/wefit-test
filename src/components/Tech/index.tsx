import React from "react"
import { Container, DotIcon, Text } from "./styles"

type Props = {
  language: string
}

export default function Tech({ language }: Props) {
  return (
    <Container>
      <DotIcon />
      <Text>{language || "Desconhecido"}</Text>
    </Container>
  )
}
