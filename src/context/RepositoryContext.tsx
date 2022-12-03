import { createContext, useContext, useState } from "react"
import UserSelectionModal from "../components/UserSelectionModal"

type Children = { children: JSX.Element }

type RepositoryContextData = {
  toggleUserSelectionModal: () => void
}

const RepositoryContext = createContext<RepositoryContextData>(
  {} as RepositoryContextData
)

export function RepositoryProvider({ children }: Children) {
  const [showModal, setShowModal] = useState(false)

  const toggleUserSelectionModal = () => setShowModal((value) => !value)

  return (
    <RepositoryContext.Provider value={{ toggleUserSelectionModal }}>
      {children}
      <UserSelectionModal
        visible={showModal}
        onClose={() => setShowModal(false)}
      />
    </RepositoryContext.Provider>
  )
}

export const useRepositoryContext = () => useContext(RepositoryContext)
