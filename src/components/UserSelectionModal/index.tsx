import React, { useEffect, useState } from "react"
import { useModalize } from "react-native-modalize"
import theme from "../../theme"
import MyButton from "../MyButton"
import MyInput from "../MyInput"
import { Container, Text, BtnView, InputView } from "./styles"

type Props = {
  visible: boolean
  onClose: () => void
  setUser: (user: string) => void
}

const UserSelectionModal = ({ visible, onClose, setUser }: Props) => {
  const { ref, open, close } = useModalize()

  const [githubUser, setGithubUser] = useState("")

  useEffect(() => {
    visible ? open() : close()
  }, [visible])

  function handleClose() {
    close()
  }

  const saveUser = () => {
    setUser(githubUser)
    close()
  }

  return (
    <Container ref={ref} onClose={onClose}>
      <Text>Alterar usuário selecionado</Text>

      <InputView>
        <MyInput
          label="Nome do usuário"
          onChangeText={(e) => setGithubUser(e)}
        />
      </InputView>

      <BtnView>
        <MyButton
          title="CANCELAR"
          m="0 10px 0 0"
          bg="transparent"
          color={theme.colors.BLUE}
          onPress={handleClose}
        />
        <MyButton title="SALVAR" onPress={saveUser} />
      </BtnView>
    </Container>
  )
}

export default UserSelectionModal
