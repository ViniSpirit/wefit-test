import React, { useEffect } from "react"
import { useModalize } from "react-native-modalize"
import { TextInput } from "react-native-paper"
import theme from "../../theme"
import MyButton from "../MyButton"
import MyInput from "../MyInput"
import { Container, Text, BtnView, InputView } from "./styles"

type Props = {
  visible: boolean
  onClose: () => void
}

const UserSelectionModal = ({ visible, onClose }: Props) => {
  const { ref, open, close } = useModalize()

  useEffect(() => {
    visible ? open() : close()
  }, [visible])

  function handleClose() {
    close()
  }

  return (
    <Container ref={ref} onClose={onClose}>
      <Text>Alterar usuário selecionado</Text>

      <InputView>
        <MyInput label="Nome do usuário" onChangeText={(e) => console.log(e)} />
      </InputView>

      <BtnView>
        <MyButton
          title="CANCELAR"
          m="0 10px 0 0"
          bg="transparent"
          color={theme.colors.BLUE}
          onPress={handleClose}
        />
        <MyButton title="SALVAR" onPress={() => console.log("test")} />
      </BtnView>
    </Container>
  )
}

export default UserSelectionModal
