import React from "react"
import { Container, ReposList } from "./styles"
import CardRepository from "../../components/CardRepository"
import {
  Repository,
  useRepositoryContext,
} from "../../context/RepositoryContext"
import { ListRenderItem } from "react-native"
import { NavigationProps } from "../../routes/Stack.router"

export function Favorites({ navigation }: NavigationProps) {
  const { favorites } = useRepositoryContext()

  const renderItem: ListRenderItem<Repository> = ({ item }) => (
    <CardRepository data={item} navigation={navigation} noFavButton />
  )

  return (
    <Container>
      <ReposList
        data={favorites}
        renderItem={renderItem}
        keyExtractor={(item: Repository) => item.id}
      />
    </Container>
  )
}
