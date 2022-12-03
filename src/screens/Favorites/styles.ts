import styled from "styled-components/native"

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.BACKGROUND};
`
export const Text = styled.Text`
  font-family: ${({ theme }) => theme.fonts.BOLD};
`
