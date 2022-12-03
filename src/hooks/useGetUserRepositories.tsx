import RepoHttpService from "../config/service"
import { useState } from "react"

type GetRepository = {
  getUserRepositories: () => any
  reposLoading: boolean
  reposError: boolean
}

export default function useGetUserRepositories<GetRepository>() {
  const [reposLoading, setReposLoading] = useState(false)
  const [reposError, setReposError] = useState(false)

  const getUserRepositories = async (user: string) => {
    try {
      setReposError(false)
      setReposLoading(true)
      const res = await RepoHttpService.get(user)
      return res.data
    } catch (e) {
      setReposError(true)
      return []
    } finally {
      setReposLoading(false)
    }
  }

  return {
    getUserRepositories,
    reposLoading,
    reposError,
  }
}
