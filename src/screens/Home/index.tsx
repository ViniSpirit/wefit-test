import React from "react"
import CardRepository from "../../components/CardRepository"
import ErrorMessage from "../../components/ErrorMEssage"
import Loading from "../../components/Loading"
import { useRepositoryContext } from "../../context/RepositoryContext"
import { Container, ReposList } from "./styles"

type Props = {
  navigation: any
}

export function Home({ navigation }: Props) {
  const { repositories, reposLoading, reposError } = useRepositoryContext()

  return (
    <Container>
      {reposError && <ErrorMessage message="Nenhum repositório encontrado" />}
      {reposLoading ? (
        <Loading />
      ) : (
        <ReposList
          data={repositories}
          renderItem={({ item }: any) => (
            <CardRepository data={item} navigation={navigation} />
          )}
          keyExtractor={(item: any) => item.name}
        />
      )}
    </Container>
  )
}
