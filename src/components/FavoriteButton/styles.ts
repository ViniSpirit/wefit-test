import styled from "styled-components/native"
import { Entypo } from "@expo/vector-icons"

export const Button = styled.TouchableOpacity<any>`
  flex: 1;
  height: 42px;
  background: ${({ theme, isFavorite }) =>
    isFavorite ? "transparent" : theme.colors.PRIMARY};
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  margin: ${({ m }) => m || "0px"};
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: ${({ isFavorite }) => (isFavorite ? "1px solid black" : "0px")};
`
export const Text = styled.Text<any>`
  color: ${({ theme, color }) => color || theme.colors.BLACK};
  font-family: ${({ theme }) => theme.fonts.MEDIUM};
  font-size: 15px;
  margin-right: 8px;
`
export const Icon = styled<any>(Entypo).attrs({
  size: 20,
})``
