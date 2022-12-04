import { createContext, useContext, useEffect, useState } from "react"
import UserSelectionModal from "../components/UserSelectionModal"
import useGetUserRepositories from "../hooks/useGetUserRepositories"
import AsyncStorage from "@react-native-async-storage/async-storage"

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
  removeFavoriteRepository: (repository: Repository) => void
  repositoryOwner: string
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

  const getStorageData = async () => {
    const value = await AsyncStorage.getItem("@favorites")
    if (value !== null) {
      const jsonValue = JSON.parse(value)
      setFavorites(jsonValue)
    }
  }

  const saveStorageData = async (data: Repository[]) => {
    const jsonValue = JSON.stringify(data)
    await AsyncStorage.setItem("@favorites", jsonValue)
  }

  const addFavoriteRepository = async (repository: Repository) => {
    const newRepository = { ...repository, favorite: true }
    const isFavoriteAlredy = favorites.find((item) => item.id == repository.id)
    if (!isFavoriteAlredy) {
      setFavorites((prev) => {
        saveStorageData([...prev, newRepository])
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
      saveStorageData(removeRepoFromFavorites)
      return removeRepoFromFavorites
    })
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
              favorite: false,
            }
          })
          setRepositories(repos)
        }
      })
    }
  }, [repositoryOwner])

  useEffect(() => {
    getStorageData()
  }, [])

  return (
    <RepositoryContext.Provider
      value={{
        toggleUserSelectionModal,
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
        setUser={setUser}
      />
    </RepositoryContext.Provider>
  )
}

export const useRepositoryContext = () => useContext(RepositoryContext)
