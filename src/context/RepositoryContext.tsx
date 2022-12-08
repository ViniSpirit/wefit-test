import { createContext, useContext, useEffect, useState } from "react"
import UserSelectionModal from "../components/UserSelectionModal"
import useGetUserRepositories from "../hooks/useGetUserRepositories"
import storageHandler from "../helpers/AsyncStorage"

type Children = { children: JSX.Element }

export type Repository = {
  id: number
  name: string
  owner: { avatar_url: string }
  description: string
  url: string
  language: string
  stars: number
  favorite: boolean
}

type RepositoryContextData = {
  toggleUserSelectionModal: () => void
  loadRepositories: (userName: string) => void
  repositories: Repository[]
  reposLoading: boolean
  reposError: boolean
  favorites: Repository[]
  addFavoriteRepository: (repository: Repository) => void
  removeFavoriteRepository: (repository: Repository) => void
  repositoryOwner: string
}

const RepositoryContext = createContext<RepositoryContextData>(
  {} as RepositoryContextData
)

export function RepositoryProvider({ children }: Children) {
  const [showModal, setShowModal] = useState(false)
  const [repositoryOwner, setRepositoryOwner] = useState("")
  const [repositories, setRepositories] = useState<Repository[]>([])
  const [favorites, setFavorites] = useState<Repository[]>([])
  const toggleUserSelectionModal = () => setShowModal((value) => !value)

  const setUser = (user: string) => setRepositoryOwner(user)

  const addFavoriteRepository = async (repository: Repository) => {
    const newRepository = { ...repository, favorite: true }
    const isFavoriteAlredy = favorites.find((item) => item.id == repository.id)
    if (!isFavoriteAlredy) {
      setFavorites((prev) => {
        storageHandler.set("@favorites", [...prev, newRepository])
        return [...prev, newRepository]
      })
    }
    const newRepos = repositories.filter((item) => item.id !== repository.id)
    setRepositories(newRepos)
  }

  const removeFavoriteRepository = async (repository: Repository) => {
    const removeRepoFromFavorites = favorites.filter(
      (item) => item.id !== repository.id
    )
    setFavorites((prev) => {
      storageHandler.set("@favorites", removeRepoFromFavorites)
      return removeRepoFromFavorites
    })
  }

  const { getUserRepositories, reposLoading, reposError } =
    useGetUserRepositories()

  const loadRepositories = async (userName: string) => {
    if (!userName) return

    setUser(userName)

    const res = await getUserRepositories(userName)

    if (!res) return

    const repos = res.map((item: any) => {
      return {
        id: item.id,
        name: item.full_name,
        description: item.description,
        owner: item.owner,
        stars: item.stargazers_count,
        language: item.language,
        url: item.html_url,
        favorite: false,
      }
    })
    setRepositories(repos)
  }

  useEffect(() => {
    ;(async () => {
      const loadStorage = await storageHandler.get("@favorites")
      setFavorites(loadStorage)
    })()
  }, [])

  return (
    <RepositoryContext.Provider
      value={{
        toggleUserSelectionModal,
        loadRepositories,
        repositories,
        reposLoading,
        reposError,
        favorites,
        addFavoriteRepository,
        removeFavoriteRepository,
        repositoryOwner,
      }}
    >
      {children}
      <UserSelectionModal
        visible={showModal}
        onClose={() => setShowModal(false)}
        action={loadRepositories}
      />
    </RepositoryContext.Provider>
  )
}

export const useRepositoryContext = () => useContext(RepositoryContext)
