import React, { useState } from "react"
import DetailCard, { RepositoryInfo } from "../../components/CardDetail"
import FavoriteButton from "../../components/FavoriteButton"
import Link from "../../components/Link"
import { useRepositoryContext } from "../../context/RepositoryContext"
import { ButtonsView, Container } from "./styles"
import * as Linking from "expo-linking"

type Props = {
  route: {
    params: any
  }
}

export default function Details({ route }: Props) {
  const repository = route.params
  const [isFavorite, setIsFavorite] = useState(repository.favorite)

  const { removeFavoriteRepository, addFavoriteRepository } =
    useRepositoryContext()

  const handleFavorite = () => {
    if (isFavorite) {
      removeFavoriteRepository(repository)
      setIsFavorite(false)
    }
    if (!isFavorite) {
      addFavoriteRepository(repository)
      setIsFavorite(true)
    }
  }

  const toRepository = () => {
    Linking.openURL(repository.url)
  }

  return (
    <Container>
      <DetailCard info={repository} />
      <ButtonsView>
        <Link text="VER REPOSITÓRIO" onPress={toRepository} />
        <FavoriteButton onPress={handleFavorite} isFavorite={isFavorite} />
      </ButtonsView>
    </Container>
  )
}
