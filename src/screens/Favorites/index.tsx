import React, { useEffect } from "react"
import { Container, ReposList } from "./styles"
import CardRepository from "../../components/CardRepository"
import { useRepositoryContext } from "../../context/RepositoryContext"

type Props = {
  navigation: any
}

export function Favorites({ navigation }: Props) {
  const { favorites } = useRepositoryContext()

  return (
    <Container>
      <ReposList
        data={favorites}
        renderItem={({ item }: any) => (
          <CardRepository data={item} navigation={navigation} noFavButton />
        )}
        keyExtractor={(item: any) => item.name}
      />
    </Container>
  )
}
