import { Container, BackButton, Text, Icon } from "./styles"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { ParamListBase } from "@react-navigation/native"

type Props = {
  navigation: NativeStackNavigationProp<ParamListBase, string, undefined>
  title: string | undefined
}

export default function BackHeader({ navigation, title }: Props) {
  return (
    <Container>
      <BackButton onPress={() => navigation.goBack()}>
        <Icon />
        <Text>{title}</Text>
      </BackButton>
    </Container>
  )
}
