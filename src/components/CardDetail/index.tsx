import React from "react"
import { Repository } from "../../context/RepositoryContext"
import Tech from "../Tech"
import { Container, Description, Title } from "./styles"

export type RepositoryInfo = {
  info: Repository
}

export default function DetailCard(props: RepositoryInfo) {
  const { info } = props

  const [user, repoName] = info?.name.split(`/`)

  return (
    <Container>
      <Title>
        {user}/ <Title bold>{repoName}</Title>
      </Title>
      <Description>{info?.description}</Description>
      <Tech language={info?.language} />
    </Container>
  )
}
