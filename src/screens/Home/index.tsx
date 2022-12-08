import React from "react"
import CardRepository from "../../components/CardRepository"
import ErrorMessage from "../../components/ErrorMEssage"
import Loading from "../../components/Loading"
import {
  Repository,
  useRepositoryContext,
} from "../../context/RepositoryContext"
import { Container, ReposList } from "./styles"
import { ListRenderItem } from "react-native"
import { NavigationProps } from "../../routes/Stack.router"

export function Home({ navigation }: NavigationProps) {
  const { repositories, reposLoading, reposError, repositoryOwner } =
    useRepositoryContext()

  const renderItem: ListRenderItem<Repository> = ({ item }) => (
    <CardRepository data={item} navigation={navigation} />
  )

  return (
    <Container>
      {repositories.length === 0 && !reposLoading && (
        <ErrorMessage message={`Repositório vazio`} />
      )}

      {reposError && (
        <ErrorMessage message={`Usuário inválido "${repositoryOwner}" `} />
      )}

      {reposLoading ? (
        <Loading />
      ) : (
        <ReposList
          data={repositories}
          renderItem={renderItem}
          keyExtractor={(item: Repository) => item.id}
        />
      )}
    </Container>
  )
}
