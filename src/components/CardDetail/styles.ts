import styled from "styled-components/native"

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.WHITE};
  padding: 16px;
`

export const Title = styled.Text<any>`
  font-size: 20px;
  font-family: ${({ theme, bold }) =>
    bold ? theme.fonts.BOLD : theme.fonts.REGULAR};

  color: ${({ theme }) => theme.colors.FONT};
`

export const Description = styled.Text`
  font-size: 16px;
  margin: 16px 0;
  font-family: ${({ theme }) => theme.fonts.REGULAR};

  color: ${({ theme }) => theme.colors.GRAY};
`
