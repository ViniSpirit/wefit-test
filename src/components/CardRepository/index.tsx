import React from "react"
import theme from "../../theme"
import Tech from "../Tech"
import {
  Container,
  Title,
  CardHeader,
  TitleView,
  Icon,
  Divider,
  Text,
  CardFooter,
  FavoriteButton,
  TextButton,
  StarIcon,
  StarsCount,
} from "./styles"

type Props = {
  noFavButton?: any
}

export default function CardRepository({ noFavButton }: Props) {
  return (
    <Container style={theme.boxShadow}>
      <CardHeader>
        <TitleView>
          <Title>appswefit/</Title>
          <Title bold>create-react-app</Title>
        </TitleView>
        <Icon source={require("./icon.png")} />
      </CardHeader>
      <Divider />
      <Text m="16px 0" numberOfLines={2}>
        Yarn Workspaces Monorepo support for Create-React-App / React-Scripts.
        Yarn Workspaces Monorepo support for Create-React-App / React-Scripts.
      </Text>

      <CardFooter>
        {!noFavButton && (
          <FavoriteButton>
            <StarIcon />
            <TextButton>Favoritar</TextButton>
          </FavoriteButton>
        )}

        <StarsCount>
          <StarIcon />
          <Text m="0 0 0 6px">0</Text>
        </StarsCount>
        <Tech />
      </CardFooter>
    </Container>
  )
}
