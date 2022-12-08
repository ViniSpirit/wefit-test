import styled from "styled-components/native"
import { AntDesign } from "@expo/vector-icons"

export const Container = styled.SafeAreaView`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  height: 56px;
  background-color: ${({ theme }) => theme.colors.BLACK};
`

export const BackButton = styled.Pressable`
  flex-direction: row;
  align-items: center;
`
export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.WHITE};
  font-size: 20px;
  font-family: ${({ theme }) => theme.fonts.MEDIUM};
  margin-left: 10px;
`

export const Icon = styled<any>(AntDesign).attrs({
  name: "arrowleft",
  size: 24,
})`
  color: ${({ theme }) => theme.colors.WHITE};
`
