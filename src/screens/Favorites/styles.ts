import styled from "styled-components/native"
import { Repository } from "../../context/RepositoryContext"

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.BACKGROUND};
`
export const Text = styled.Text`
  font-family: ${({ theme }) => theme.fonts.BOLD};
`
export const ReposList = styled.FlatList<any>``
