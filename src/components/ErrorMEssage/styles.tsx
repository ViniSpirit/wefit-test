import styled from "styled-components/native"

export const Container = styled.View`
  height: 100%;
  justify-content: center;
`

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.fonts.BOLD};
  font-size: 16px;
  color: ${({ theme }) => theme.colors.BLACK};
  text-align: center;
`
