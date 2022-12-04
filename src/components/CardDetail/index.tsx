import React from "react"
import Tech from "../Tech"
import { Container, Description, Title } from "./styles"

export type RepositoryInfo = {
  info: {
    id: number
    user: string
    repoName: string
    description: string
    language: string
    url: string
    favorite: boolean
  }
}

export default function DetailCard(props: RepositoryInfo) {
  const { info } = props
  return (
    <Container>
      <Title>
        {info?.user}/ <Title bold>{info?.repoName}</Title>
      </Title>
      <Description>{info?.description}</Description>
      <Tech language={info?.language} />
    </Container>
  )
}
