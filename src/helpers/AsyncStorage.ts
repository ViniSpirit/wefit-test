import AsyncStorage from "@react-native-async-storage/async-storage"

type StorageHandlerType = {
  get: (key: string) => Promise<any> | null
  set: (key: string, data: any) => void
}

const storageHandler: StorageHandlerType = {
  get: async (key: string) => {
    const value = await AsyncStorage.getItem(key)
    if (value !== null) {
      const jsonValue = JSON.parse(value)
      return jsonValue
    }
    return null
  },

  set: async (key: string, data: string) => {
    const jsonValue = JSON.stringify(data)
    await AsyncStorage.setItem(key, jsonValue)
  },
}

export default storageHandler
