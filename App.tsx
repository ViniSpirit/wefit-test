import { ThemeProvider } from "styled-components/native"
import AppRoutes from "./src/routes"
import theme from "./src/theme"

import { useFonts, Roboto_500Medium } from "@expo-google-fonts/roboto"
import { Inter_400Regular, Inter_700Bold } from "@expo-google-fonts/inter"
import { RepositoryProvider } from "./src/context/RepositoryContext"
import { Provider as PaperProvider } from "react-native-paper"

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_500Medium,
    Inter_400Regular,
    Inter_700Bold,
  })

  if (!fontsLoaded) return <></>

  return (
    <ThemeProvider theme={theme}>
      <PaperProvider>
        <RepositoryProvider>
          <AppRoutes />
        </RepositoryProvider>
      </PaperProvider>
    </ThemeProvider>
  )
}
