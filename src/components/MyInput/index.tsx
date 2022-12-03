import React from "react"
import { TextInput } from "react-native-paper"
import theme from "../../theme"

type Props = {
  onChangeText: (e: string) => void
  label: string
}

export default function MyInput({ onChangeText, label }: Props) {
  return (
    <TextInput
      label={label}
      activeUnderlineColor={theme.colors.BLUE}
      textColor={theme.colors.BLACK}
      onChangeText={onChangeText}
    />
  )
}
