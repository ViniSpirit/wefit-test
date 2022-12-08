import styled from "styled-components/native"
import { Entypo } from "@expo/vector-icons"

type TextProps = {
  m?: string
}

export const Container = styled.Pressable`
  background-color: ${({ theme }) => theme.colors.WHITE};
  padding: 12px 16px;
  border-radius: 4px;
  margin: 8px 16px;
`

export const CardHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`

export const TitleView = styled.View`
  flex-direction: row;
`

export const Title = styled.Text<any>`
  font-size: 12px;
  font-family: ${({ theme, bold }) =>
    bold ? theme.fonts.BOLD : theme.fonts.REGULAR};

  color: ${({ theme }) => theme.colors.FONT};
`

export const Icon = styled.Image`
  width: 29px;
  height: 29px;
  border-radius: 50px;
`

export const Divider = styled.View`
  height: 1px;
  background-color: ${({ theme }) => theme.colors.DIVIDER};
`
export const Text = styled.Text<TextProps>`
  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.REGULAR};
  color: ${({ theme }) => theme.colors.GRAY};
  text-align: justify;
  margin: ${({ m }) => m || 0};
  overflow: hidden;
`

export const CardFooter = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const FavoriteButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.LIGHT_PRIMARY};
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border-radius: 4px;
  height: 36px;
  width: 103px;
`

export const StarIcon = styled<any>(Entypo).attrs({
  name: "star",
  size: 16,
})`
  color: ${({ theme }) => theme.colors.PRIMARY};
`

export const TextButton = styled.Text`
  margin-left: 11px;
  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.BOLD};
  color: ${({ theme }) => theme.colors.PRIMARY};
`

export const StarsCount = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
