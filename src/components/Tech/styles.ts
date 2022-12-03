import styled from "styled-components/native"

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
`
export const Text = styled.Text`
  font-size: 12px;
  margin-left: 6px;
  font-family: ${({ theme }) => theme.fonts.REGULAR};
  color: ${({ theme }) => theme.colors.GRAY};
`
export const DotIcon = styled.View`
  width: 8px;
  height: 8px;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.colors.RED};
`
