import React from "react"
import { Button, Icon, Text } from "./styles"
import theme from "../../theme"

type Props = {
  onPress: () => void
  isFavorite: boolean
}

export default function FavoriteButton({ onPress, isFavorite }: Props) {
  return (
    <Button isFavorite={isFavorite} onPress={onPress}>
      <Text>{isFavorite ? "DESFAVORITAR" : "FAVORITAR"}</Text>
      <Icon
        name={isFavorite ? "star-outlined" : "star"}
        color={theme.colors.BLACK}
      />
    </Button>
  )
}
