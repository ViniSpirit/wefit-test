import styled from "styled-components/native"
import { Props } from "./index"

export const Button = styled.TouchableOpacity<Props>`
  flex: 1;
  height: 42px;
  background: ${({ theme, bg }) => bg || theme.colors.BLUE};
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  margin: ${({ m }) => m || "0px"};
`
export const Text = styled.Text<any>`
  color: ${({ theme, color }) => color || theme.colors.WHITE};
  font-family: ${({ theme }) => theme.fonts.MEDIUM};
  font-size: 15px;
`
