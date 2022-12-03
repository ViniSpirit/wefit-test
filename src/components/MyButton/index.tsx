import React from "react"
import { Button, Text } from "./styles"

export type Props = {
  onPress: () => void
  title?: string
  m?: string
  bg?: string
  color?: string
}

export default function MyButton({ onPress, title, bg, m, color }: Props) {
  return (
    <Button m={m} bg={bg} onPress={onPress}>
      <Text color={color}>{title}</Text>
    </Button>
  )
}
