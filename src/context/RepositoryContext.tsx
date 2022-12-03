import { createContext, useContext, useEffect, useState } from "react"
import UserSelectionModal from "../components/UserSelectionModal"
import useGetUserRepositories from "../hooks/useGetUserRepositories"

type Children = { children: JSX.Element }

export type Repository = {
  id: number
  name: string
  owner: any
  description: string
  url: string
  language: string
  stars: number
  favorite: boolean
}

type RepositoryContextData = {
  toggleUserSelectionModal: () => void
  repositories: Repository[]
  reposLoading: boolean
  reposError: boolean
  favorites: Repository[]
  addFavoriteRepository: (repository: Repository) => void
}

const RepositoryContext = createContext<RepositoryContextData>(
  {} as RepositoryContextData
)

export function RepositoryProvider({ children }: Children) {
  const [showModal, setShowModal] = useState(false)
  const [repositoryOwner, setRepositoryOwner] = useState("appswefit")
  const [repositories, setRepositories] = useState<Repository[]>([])
  const [favorites, setFavorites] = useState<Repository[]>([])
  const toggleUserSelectionModal = () => setShowModal((value) => !value)

  const setUser = (user: string) => setRepositoryOwner(user)

  const addFavoriteRepository = async (repository: Repository) => {
    setFavorites((prev) => [...prev, repository])
    const newRepos = repositories.filter((item) => item.id !== repository.id)
    setRepositories(newRepos)
  }

  const { getUserRepositories, reposLoading, reposError } =
    useGetUserRepositories()

  useEffect(() => {
    if (repositoryOwner) {
      getUserRepositories(repositoryOwner).then((res) => {
        if (res) {
          const repos = res.map((item: any) => {
            return {
              id: item.id,
              name: item.full_name,
              description: item.description,
              owner: item.owner,
              stars: item.stargazers_count,
              language: item.language,
              url: item.html_url,
            }
          })
          setRepositories(repos)
        }
      })
    }
  }, [repositoryOwner])

  return (
    <RepositoryContext.Provider
      value={{
        toggleUserSelectionModal,
        repositories,
        reposLoading,
        reposError,
        favorites,
        addFavoriteRepository,
      }}
    >
      {children}
      <UserSelectionModal
        visible={showModal}
        onClose={() => setShowModal(false)}
        setUser={setUser}
      />
    </RepositoryContext.Provider>
  )
}

export const useRepositoryContext = () => useContext(RepositoryContext)
