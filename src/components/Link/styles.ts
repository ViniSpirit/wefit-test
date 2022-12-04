import styled from "styled-components/native"
import { Ionicons } from "@expo/vector-icons"

export const LinkRepository = styled.Pressable`
  align-items: center;
  justify-content: center;
  margin-bottom: 18px;
  flex-direction: row;
  height: 42px;
`

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.fonts.MEDIUM};
  font-size: 15px;
  color: ${({ theme }) => theme.colors.BLUE};
`
export const Icon = styled<any>(Ionicons).attrs({
  name: "link",
  size: 20,
})`
  margin-left: 10px;
  color: ${({ theme }) => theme.colors.BLUE};
`
