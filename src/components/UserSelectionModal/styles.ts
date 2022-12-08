import styled from "styled-components/native"
import { Modalize } from "react-native-modalize"

export const Container = styled(Modalize).attrs({
  adjustToContentHeight: true,
  handlePosition: "inside",
  childrenStyle: {
    padding: 24,
  },
})`
  background-color: ${({ theme }) => theme.colors.WHITE};
`

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.fonts.REGULAR};
  font-size: 16px;
  margin-top: 16px;
  color: ${({ theme }) => theme.colors.BLACK};
`

export const InputView = styled.View`
  margin: 10px 0;
`

export const BtnView = styled.View`
  flex-direction: row;
`
