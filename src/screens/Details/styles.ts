import styled from "styled-components/native"

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.BACKGROUND};
`

export const ButtonsView = styled.View`
  width: 100%;
  position: absolute;
  bottom: 0;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.WHITE};
`
