import React from "react"
import { Icon, LinkRepository, Text } from "./styles"

type Props = {
  text: string
  onPress: () => void
}

export default function Link({ text, onPress }: Props) {
  return (
    <LinkRepository onPress={onPress}>
      <Text>{text}</Text>
      <Icon />
    </LinkRepository>
  )
}
